import { agentCapabilities } from '../capabilities.js';
import { DEFAULT_MODEL_OPTION } from './shared.js';
import type { RuntimeAgentDef } from '../types.js';
import type { RuntimeModelOption } from '../types.js';

export function parseCursorAgentModels(stdout: string): RuntimeModelOption[] | null {
  const lines = String(stdout || '')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith('#'));
  if (lines.length === 0) return null;

  const out = [DEFAULT_MODEL_OPTION];
  const seen = new Set<string>([DEFAULT_MODEL_OPTION.id]);
  for (const line of lines) {
    if (/^(available models|models)$/i.test(line)) continue;

    const match = line.match(/^([A-Za-z0-9][A-Za-z0-9._/:@-]*)(?:\s+-\s+(.+))?$/);
    if (!match) continue;
    const id = match[1];
    if (!id || seen.has(id)) continue;
    seen.add(id);

    const label = match[2]?.trim() || id;
    out.push({ id, label });
  }

  return out.length > 1 ? out : null;
}

export const cursorAgentDef = {
    id: 'cursor-agent',
    name: 'Cursor Agent',
    bin: 'cursor-agent',
    versionArgs: ['--version'],
    helpArgs: ['--help'],
    capabilityFlags: {
      // Older Cursor Agent builds advertised these under global `--help`.
      // Current releases (2025.09+) removed them; probe once at detection
      // so buildArgs stays compatible with both shapes.
      '--stream-partial-output': 'partialOutput',
      '--trust': 'trust',
      '--workspace': 'workspace',
    },
    // `cursor-agent models` prints account-bound model ids per line. When
    // the user isn't authed it prints "No models available for this
    // account." — that's not a model list, so we detect it and fall back.
    listModels: {
      args: ['models'],
      timeoutMs: 5000,
      parse: (stdout) => {
        const trimmed = String(stdout || '').trim();
        if (!trimmed || /no models available/i.test(trimmed)) return null;
        return parseCursorAgentModels(trimmed);
      },
    },
    fallbackModels: [
      DEFAULT_MODEL_OPTION,
      { id: 'auto', label: 'auto' },
      { id: 'sonnet-4', label: 'sonnet-4' },
      { id: 'sonnet-4-thinking', label: 'sonnet-4-thinking' },
      { id: 'gpt-5', label: 'gpt-5' },
    ],
    // Headless `--print` mode takes the user prompt as a positional argument.
    // Do not pass `-` (literal dash prompt) or rely on stdin — current builds
    // fall back to the interactive sign-in TUI when no positional prompt is
    // supplied. Workspace is carried by the spawn `cwd`; only older CLIs that
    // still advertise `--workspace` get that flag.
    buildArgs: (
      prompt,
      _imagePaths,
      _extra,
      options = {},
      runtimeContext = {},
    ) => {
      const caps = agentCapabilities.get('cursor-agent') || {};
      const args = ['--print', '--output-format', 'stream-json', '--force'];
      if (caps.partialOutput) {
        args.push('--stream-partial-output');
      }
      if (caps.trust) {
        args.push('--trust');
      }
      if (caps.workspace && runtimeContext.cwd) {
        args.push('--workspace', runtimeContext.cwd);
      }
      if (options.model && options.model !== 'default') {
        args.push('--model', options.model);
      }
      args.push(prompt);
      return args;
    },
    maxPromptArgBytes: 30_000,
    streamFormat: 'json-event-stream',
    eventParser: 'cursor-agent',
} satisfies RuntimeAgentDef;
