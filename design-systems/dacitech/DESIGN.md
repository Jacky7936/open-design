# Design System Inspired by 大慈資訊 (dacitech)

> Category: IT Services & Enterprise Software
> 大慈資訊有限公司 — humanistic IT studio. Pine-olive accent, earth-tone editorial layout.

## 1. Visual Theme & Atmosphere

dacitech's interface treats software as a craft of patience — an IT studio reimagined as a forest reading room. The canvas is built on warm earth-tone neutrals (cream `#f4f0ec`, stone `#d6d2c3`, loam `#dbd0c3`) that read more like aged paper and undyed linen than the cold glass of a typical SaaS dashboard. Where most enterprise software leans into corporate blue and clinical white, dacitech is grounded in the deliberate slowness of soil, sage, and shadow — a visual translation of 大慈 ("great compassion"), the brand's namesake virtue.

The signature move is the pairing of pine-olive (`#364118`) with earthen tan (`#96795a`) — two saturated-but-quiet pigments lifted from forest floor and tilled earth. These do all the chromatic work on screen; everything else is a graded scale of the same warm, low-chroma family. The result is a palette that feels mineral rather than synthetic. Combined with Marcellus (a humanist serif for headlines) and Montserrat (a geometric sans for the interface), every screen carries the cadence of a small-press book — measured, considered, and unmistakably human.

What makes dacitech's design distinctive is its strict refusal of the techindustry's default cool palette. There are no blue-grays, no gradient meshes, no neon accents. Every gray has a yellow-brown undertone (`#9fa0a0` reads warm, never frigid). Borders are tinted with the same loam family (`#e0dcd5`, `#dbd7cf`). When motion happens, it happens once, briefly, and stops — like a page turning. The color narrative is a four-beat ladder: **土壤底蘊 → 思考萌芽 → 沉澱留白 → 靈光乍現** (soil-foundation → thinking-sprout → settling-stillness → spark-of-insight). Each surface, button, and section sits somewhere on that ladder, and the eye climbs it without effort.

**Key Characteristics:**
- Warm cream canvas (`#f4f0ec`) evoking undyed linen and tilled paper, not screens
- Dual-script type system: Marcellus + Noto Serif TC for serifs, Montserrat + Noto Sans TC for sans
- Pine-olive brand accent (`#364118`) paired with earthen tan (`#96795a`) — deliberately mineral
- Exclusively warm-toned neutrals — every gray, border, and shadow carries an earth undertone
- 9-step graded scales (P-100 → P-900, S1-100 → S1-900, S2-100 → S2-900, N-100 → N-900, T-100 → T-900)
- Low-saturation discipline — no neon, no cool blue, no synthetic accents
- Editorial pacing with serif-driven headlines and generous body line-heights
- "Soil ladder" color narrative — sections climb from cream to charcoal-bark in measured steps

## 2. Color Palette & Roles

### Primary (P) — Earthen Tan Scale
The dominant UI scale: warm tan derived from Pantone 7504C. Used for primary surfaces, container backgrounds, and the soft-CTA family.
- **P-900** (`#977a5b`): Darkest tan — primary CTA on cream surfaces, strong dividers
- **P-800** (`#a1876a`): Deep loam — hover state for P-900
- **P-700** (`#ac947a`): Mid loam — emphasized container backgrounds on dark surfaces
- **P-600** (`#b7a28b`): Soft loam — secondary buttons, prominent badges
- **P-500** (`#c3b19d`): Brand tan reference — mid-scale anchor (Pantone 7504C-80%)
- **P-400** (`#cfc0b0`): Pale loam — subtle hover backgrounds
- **P-300** (`#dbd0c3`): Stone tan — divider lines, soft fills
- **P-200** (`#e7e0d7`): Cream tan — alternating row backgrounds
- **P-100** (`#f4f0ec`): Page parchment — the primary light canvas

### Secondary 1 (S1) — Pine Olive Scale
The signature brand color: deep olive green derived from Pantone 5747C. Used for primary CTAs, brand-led sections, and the highest-signal accents.
- **S1-900** (`#374218`): Pine olive — primary CTA, brand color reference (Pantone 5747C)
- **S1-800** (`#4a5128`): Deeper olive — pressed/active CTA state
- **S1-700** (`#5d613a`): Moss — emphasized dark surfaces
- **S1-600** (`#72744e`): Sage olive — secondary olive surfaces
- **S1-500** (`#878766`): Lichen — mid-scale anchor
- **S1-400** (`#9d9d80`): Faded sage — muted olive UI accents
- **S1-300** (`#b4b49e`): Pale sage — soft olive fills
- **S1-200** (`#cdccbd`): Mist olive — gentle backgrounds
- **S1-100** (`#e6e6de`): Olive cream — alternating section backgrounds

### Secondary 2 (S2) — Yellow-Olive Scale
The supporting brand color: a warmer, more yellow-tinged olive used for charts, status emphasis, and information-dense regions.
- **S2-900** (`#56641f`): Deep yellow-olive — data viz primary
- **S2-800** (`#67712f`): Moss yellow — data viz secondary
- **S2-700** (`#787f41`): Sage yellow — chart fills
- **S2-600** (`#8a8e57`): Lichen yellow — chart grids
- **S2-500** (`#9d9f6f`): Pale yellow-olive — mid-scale anchor
- **S2-400** (`#b0b189`): Mist yellow-olive — chart backgrounds
- **S2-300** (`#c3c3a6`): Pale yellow-mist — chart axis labels
- **S2-200** (`#d7d7c3`): Cream yellow-olive — subtle accents
- **S2-100** (`#ecece2`): Lightest yellow-cream — gentle highlights

### Neutral (N) — Warm Gray Scale
The structural scale: warm grays for backgrounds, borders, and card surfaces.
- **N-900** (`#d7d2c9`): Strongest neutral — emphasized borders
- **N-800** (`#dbd7cf`): Strong border — section dividers
- **N-700** (`#e0dcd5`): Standard border — card borders, divider lines
- **N-600** (`#e5e1db`): Soft border — subtle separators
- **N-500** (`#e9e7e2`): Surface tint — alternating row backgrounds
- **N-400** (`#eeece8`): Pale surface — disabled backgrounds
- **N-300** (`#f2f1ee`): Card surface — elevated container background
- **N-200** (`#f7f6f4`): Light surface — table headers
- **N-100** (`#fbfbfa`): Lightest neutral — pure-light alternative to N-300

### Text (T) — Foreground Scale
The text ramp: from near-black to near-white, with warm undertones throughout.
- **T-900** (`#231815`): Near black — primary text, the warmest "black" in the system
- **T-800** (`#454241`): Dark warm — emphasized secondary text, link text
- **T-700** (`#666464`): Charcoal warm — secondary body text
- **T-600** (`#838383`): Mid gray — tertiary text, captions
- **T-500** (`#9fa0a0`): Mid warm — placeholder text, de-emphasized metadata
- **T-400** (`#babbbb`): Light gray — disabled text
- **T-300** (`#d3d3d4`): Pale gray — text on dark warm surfaces
- **T-200** (`#eaebeb`): Lightest gray — text on near-black surfaces
- **T-100** (`#ffffff`): Pure white — text on brand-olive and bark surfaces

### Functional & Error
Status colors deliberately drawn from the same warm earth family — no cool blues, no synthetic greens.
- **Success / Spring Olive** (`#9aa02f`): Success states, validated input
- **Neutral State / Linen** (`#c6bbab`): In-progress, indeterminate
- **Warn Soft / Pale Wheat** (`#f6e2a1`): Soft warnings, informational
- **Warn / Wheat** (`#fac76a`): Standard warnings
- **Warn Strong / Burnt Orange** (`#d8670b`): Urgent warnings
- **Error / Ember** (`#ea5614`): Standard error
- **Error Soft / Coral** (`#f19065`): Inline error highlights

### Brand Palette Anchors
The four Pantone-derived brand anchors that drive the entire system:
- **Pine Olive** (`#364118`) — Pantone 5747C — primary brand color
- **Earthen Tan** (`#96795a`) — Pantone 7504C — secondary brand color
- **Stone** (`#d6d2c3`) — Pantone 7527C — surface anchor
- **Bark** (`#322828`) — Pantone 440C — dark-surface anchor

### Gradient System
dacitech is **gradient-free** by design. Depth and visual richness come from layering of warm surface tones, the disciplined olive/tan accent pairing, and the four-beat "soil ladder" of section transitions: cream → stone → olive → bark. Each section is a distinct rung on that ladder, and the eye climbs it without help from gradients.

## 3. Typography Rules

### Font Family
A four-family system: serif and sans, each with a Latin and a CJK companion. The Latin faces handle English / numerals; the CJK faces handle Traditional Chinese.

- **Headline (Latin)**: `Marcellus`, fallback: `Georgia`, `Times New Roman`, serif
- **Headline (CJK)**: `Noto Serif TC`, fallback: `PingFang TC`, `Songti TC`, serif
- **Body / UI (Latin)**: `Montserrat`, fallback: `system-ui`, `-apple-system`, `Helvetica Neue`, sans-serif
- **Body / UI (CJK)**: `Noto Sans TC`, fallback: `PingFang TC`, `Microsoft JhengHei`, sans-serif
- **Code**: `JetBrains Mono`, fallback: `SF Mono`, `Menlo`, monospace

*Marcellus delivers the humanist serif gravity for English headlines (Roman-inscriptional proportions, no superfluous flourish). Montserrat carries 18 weights for system text. Noto Serif TC and Noto Sans TC are the Traditional Chinese companions, kept tonally adjacent to the Latin pairings.*

### Hierarchy — Chinese (ZH)

| Role | Font | Size | Weight | Line Height | Use |
|------|------|------|--------|-------------|-----|
| H1-ZH | Noto Sans TC | 36px | 700 (Bold) | 1.30 | 首頁大標 — landing page headlines |
| H2-ZH | Noto Sans TC | 28px | 700 (Bold) | 1.30 | Slogan / 區塊標題 — section titles |
| H3-ZH | Noto Sans TC | 24px | 700 (Bold) | 1.35 | 一般區塊標題 — generic section titles |
| H4-ZH | Noto Sans TC | 20px | 700 (Bold) | 1.40 | Slogan 副標 — subheadings |
| H5-ZH | Noto Sans TC | 16px | 700 (Bold) | 1.45 | 卡片標題 — card titles |
| B1-ZH | Noto Sans TC | 14px | 400 (Regular) | 1.70 | 一般內文 — body copy |
| B2-ZH | Noto Sans TC | 12px | 400 (Regular) | 1.70 | 卡片內文 — card body |
| B3-ZH | Noto Sans TC | 12px | 500 (Medium) | 1.40 | 按鈕 / 標籤 — buttons, labels |
| B4-ZH | Noto Sans TC | 10px | 300 (Light) | 1.60 | 備註 — captions, footnotes |
| B5-ZH | Noto Sans TC | 10px | 300 (Light) | 1.60 | 連結 — inline links, micro-text |
| Display-ZH | Noto Serif TC | 32–48px | 500 (Medium) | 1.30 | 品牌表現 — brand slogans, hero serif moments |

### Hierarchy — English (EN)

| Role | Font | Size | Weight | Line Height | Use |
|------|------|------|--------|-------------|-----|
| H1-EN | Montserrat | 36px | 700 (Bold) | 1.20 | Landing-page H1 |
| H2-EN | Montserrat | 28px | 600 (SemiBold) | 1.25 | Section / slogan headers |
| H3-EN | Montserrat | 24px | 600 (SemiBold) | 1.30 | Sub-section headers |
| H4-EN | Montserrat | 20px | 500 (Medium) | 1.35 | Subheadings |
| H5-EN | Montserrat | 16px | 500 (Medium) | 1.45 | Card titles |
| B1-EN | Montserrat | 14px | 400 (Regular) | 1.65 | Body copy |
| B2-EN | Montserrat | 12px | 400 (Regular) | 1.65 | Card body |
| B3-EN | Montserrat | 12px | 500 (Medium) | 1.40 | Buttons, labels |
| B4-EN | Montserrat | 10px | 300 (Light) | 1.60 | Captions |
| B5-EN | Montserrat | 10px | 300 (Light) | 1.60 | Links |
| Display-EN | Marcellus | 32–64px | 400 (Regular) | 1.10 | Brand wordmark, editorial display |

### Principles
- **Serif for authority, sans for utility**: Marcellus (EN) and Noto Serif TC (ZH) carry brand expression — wordmarks, slogans, editorial pull-quotes. Montserrat and Noto Sans TC handle every screen-level UI need.
- **Single-weight serif headlines**: Marcellus has only Regular (400); never simulate boldness. Noto Serif TC Medium (500) is the matching weight for ZH display.
- **Strict 5-step hierarchy**: H1–H5 maps 1:1 across ZH and EN, so a bilingual page never invents a "between" size.
- **Generous body line-height**: 1.65–1.70 for body, well above the typical 1.4–1.5. This is the editorial cadence — text breathes like a printed page.
- **No italic, no all-caps for body**: All-caps reserved for B3 labels and overlines (tracking ≥0.5px). Italic reserved for cited quotes only.
- **CJK & Latin mix**: When a heading mixes ZH + EN ("dacitech 大慈資訊"), use Latin first when ordering allows; the dual-family stack handles both gracefully.

## 4. Component Stylings

### Buttons

**Primary — Pine Olive**
- Background: S1-900 (`#364118`)
- Text: T-100 (`#ffffff`)
- Padding: 12px 20px
- Radius: 8px (comfortably rounded)
- Hover: S1-800 (`#4a5128`) — slightly darker olive
- Active: S1-700 (`#5d613a`)
- Used for: page primary CTA, brand-led action — the single highest-signal interaction on a screen

**Secondary — Earthen Tan**
- Background: P-600 (`#b7a28b`)
- Text: T-900 (`#231815`)
- Padding: 12px 20px
- Radius: 8px
- Hover: P-500 (`#c3b19d`)
- Used for: supporting actions, non-destructive secondary flows

**Outline — Olive Border**
- Background: transparent
- Border: 1px solid S1-900 (`#364118`)
- Text: S1-900 (`#364118`)
- Padding: 11px 19px (1px less to compensate for border)
- Radius: 8px
- Hover: background P-100 (`#f4f0ec`)
- Used for: tertiary actions, dual-CTA pairings with the primary olive button

**Ghost — Text Only**
- Background: transparent
- Text: T-800 (`#454241`)
- Padding: 12px 16px
- Radius: 8px
- Hover: background N-300 (`#f2f1ee`)
- Used for: low-emphasis actions, table-row inline actions

### Cards & Containers
- Background: N-300 (`#f2f1ee`) for elevated cards on the page canvas; P-100 (`#f4f0ec`) when nested inside another light surface
- Border: `1px solid N-700` (`#e0dcd5`) — the standard warm border
- Radius: 12px (generously rounded) for standard cards; 16px for featured / hero cards
- Shadow: `0 2px 8px rgba(35, 24, 21, 0.06)` — a whisper of bark-tinted depth
- Internal padding: 24px (small), 32px (standard), 40px (featured)
- Section dividers within a card: `1px solid N-600` (`#e5e1db`)

### Inputs & Forms
- Text: T-900 (`#231815`)
- Background: N-100 (`#fbfbfa`) on light canvases; P-100 (`#f4f0ec`) on neutral canvases
- Border: `1px solid N-700` (`#e0dcd5`)
- Padding: 10px 12px
- Radius: 8px
- Font: Noto Sans TC / Montserrat, 14px (B1)
- Placeholder: T-500 (`#9fa0a0`)
- Focus: border S1-700 (`#5d613a`), box-shadow `0 0 0 3px rgba(55, 66, 24, 0.20)` — focus glows olive, never cool blue
- Disabled: background N-400 (`#eeece8`), text T-500
- Error: border `#ea5614`, helper text `#ea5614`

### Navigation
- Header background: P-100 (`#f4f0ec`) — page canvas, no separation by default
- Sticky shadow on scroll: `0 1px 0 N-700` (a single hairline)
- Wordmark: "dacitech" in Marcellus Regular at 24px, color T-900
- Chinese co-mark: 大慈資訊 in Noto Serif TC Medium at 14px, color T-700
- Nav links: Montserrat / Noto Sans TC 14px Regular, color T-800
- Hover: color S1-900, no underline
- Active link: 2px bottom border in S1-900
- Primary CTA in header: olive button (Brand Primary)

### Image Treatment
- Generous border-radius on media (12–24px)
- Product screenshots framed with a `1px solid N-700` ring rather than a heavy drop shadow
- Photography palette skews toward earth tones, forest, soil, undyed textile — never high-saturation tech imagery
- Aspect ratios: 16:9 for hero media, 4:3 for cards, 1:1 for portraits and team shots

### Distinctive Components

**Section Bands**
Each major page section sits on one of four ladder rungs:
1. **Parchment** — P-100 background (default)
2. **Stone** — P-300 / N-500 background (data-dense)
3. **Olive** — S1-900 background, T-100 text (brand moments)
4. **Bark** — `#322828` background, T-200 text (footer / closing)

Transition between rungs is a hard color change — never a gradient.

**Token Chip**
A compact label used in design documentation to show a color-token pairing:
- Layout: 12px color swatch + token name + hex
- Background: N-300, Border: N-700, Radius: 6px
- Padding: 6px 10px
- Used in design-system docs, hand-off pages, internal references

**Quote / Brand Slogan**
- Font: Noto Serif TC Medium / Marcellus Regular
- Size: 32px
- Color: T-900
- Often paired with a leading vertical rule in S1-900, 4px wide
- Used for: hero slogans, brand declarations, manifesto sections

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px
- Button padding: 12px (vertical) × 20px (horizontal) standard
- Card internal padding: 24–32px
- Section vertical spacing: 96px desktop, 64px tablet, 48px mobile

### Grid & Container
- Max container width: 1200px, centered
- Gutter: 24px desktop, 16px tablet, 12px mobile
- Hero: single-column or 1.4:1 asymmetric two-column
- Feature sections: 2 or 3 column card grids
- Data tables: full-bleed within container, gentle alternating row backgrounds (N-200 / N-100)

### Whitespace Philosophy
- **Editorial pacing**: 96px between major sections is the desktop default — generous like a magazine spread.
- **Serif-driven rhythm**: Marcellus and Noto Serif TC need breathing room; line-heights of 1.10–1.30 require 32–48px of margin below display headlines.
- **Soil-ladder structure**: Sections alternate between cream, stone, olive, and bark — each rung is a distinct "room" for one message.
- **No floating elements**: Components sit firmly on their section's ground color. No drop-shadow halos suggesting flight.

### Border Radius Scale
- Sharp (0–4px): Inline code, data-table cells
- Subtly rounded (6px): Small chips, dense list items
- Comfortably rounded (8px): Standard buttons, inputs, cards
- Generously rounded (12px): Featured cards, modal containers
- Very rounded (16px): Hero containers, image frames
- Highly rounded (24px): Embedded media, full-width hero crops
- Maximum rounded (9999px): Pills, avatar frames, status chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Page canvas, inline text |
| Ring (Level 1) | `1px solid N-700` | Standard cards, list items, inputs |
| Stronger Ring (Level 2) | `1px solid N-800` | Featured cards, primary containers |
| Whisper (Level 3) | `0 2px 8px rgba(35,24,21,0.06)` + 1px ring | Elevated cards, modals, dropdowns |
| Inset (Level 4) | `inset 0 0 0 2px S1-900` | Active selection, focused tab |

**Shadow Philosophy**: dacitech communicates depth through **warm rings and ladder steps**, not floating drop shadows. The default elevation is a 1px ring in N-700 — a quiet warm hairline. When something truly needs to lift (a modal, an active dropdown), the shadow is bark-tinted (`rgba(35, 24, 21, 0.06)`) and short (8px blur). The dominant depth signal across the entire system is **section background color** — moving from cream to stone to olive to bark *is* the elevation system, not the shadow scale.

### Decorative Depth
- **Ladder transitions**: The four-rung section ladder (cream → stone → olive → bark) creates the strongest depth signal — a full-width color shift reads as "different room, different mood."
- **Vertical rules**: A 4px-wide S1-900 vertical rule beside a serif quote does more work than any drop shadow.
- **Avoid neumorphism**: No inset double-shadow effects. dacitech is earthy and grounded — never soft or pillowy.

## 7. Do's and Don'ts

### Do
- Use Parchment (`#f4f0ec`) as the primary light canvas — it is the dacitech personality
- Pair Pine Olive (`#364118`) and Earthen Tan (`#96795a`) as the brand-anchor duo
- Use Marcellus / Noto Serif TC for brand expression (wordmark, slogans, hero quotes)
- Use Montserrat / Noto Sans TC for every screen-level UI need (buttons, body, labels)
- Keep all neutrals warm-toned — every gray must carry a yellow-brown undertone
- Use 1px N-700 rings for default elevation instead of drop shadows
- Maintain the H1–H5 / B1–B5 hierarchy strictly — no in-between sizes
- Use 1.65–1.70 body line-height for the editorial reading cadence
- Alternate between cream / stone / olive / bark sections to create chapter-like rhythm
- Apply generous border-radius (8–24px) for a grounded, hand-finished feel
- Match CJK and Latin type weights so bilingual lines stay visually level

### Don't
- Don't introduce cool blue, blue-gray, or cyan anywhere except the system focus indicator
- Don't apply gradients — depth is communicated by background-color shifts, not gradients
- Don't use Marcellus bold or Noto Serif TC Bold; weight stays at 400–500 for display
- Don't reach for pure black (`#000000`) — T-900 (`#231815`) is the deepest text color
- Don't use pure white (`#ffffff`) as a page canvas — Parchment (`#f4f0ec`) is the surface
- Don't add saturated chromatic accents beyond Pine Olive and Earthen Tan
- Don't apply heavy drop shadows or neumorphic inset shadows
- Don't use sharp corners (<6px radius) on buttons or cards
- Don't reduce body line-height below 1.5 — the generous spacing supports the editorial voice
- Don't mix Latin and CJK families inside a single word (e.g., "dacitech 資" must use both stacks via `font-family` cascade, not Frankenstein characters)
- Don't introduce icons in a geometric tech style — prefer simple, line-based, hand-finished iconography
- Don't use the dacitech name + "AI" suffix anywhere unless explicitly a product line; the brand is "dacitech" / "大慈資訊"

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Small Mobile | <479px | Stacked everything, H1 reduced to 24px |
| Mobile | 479–639px | Single column, hamburger nav, body 14→15px for legibility |
| Large Mobile | 640–767px | Slightly wider content area |
| Tablet | 768–991px | 2-column grids, condensed nav, H1 28→32px |
| Desktop | 992–1199px | 3-column grids, full nav, H1 36px |
| Wide | 1200px+ | Max container, generous gutters, full hero scale |

### Touch Targets
- All interactive elements ≥44×44px minimum (Apple HIG baseline)
- Button vertical padding does not drop below 12px on touch breakpoints
- Form fields use 10px padding (≈40px total height with 14px text) — extends to 12px on mobile
- Nav links get extra horizontal padding (16px) on mobile for thumb reach

### Collapsing Strategy
- **Navigation**: Horizontal nav → hamburger drawer on <768px
- **Feature sections**: 3-column → 2-column at tablet → 1-column at mobile
- **Hero text**: H1 36px → 28px → 24px progressive scaling
- **Tables**: Full-width → horizontal scroll on mobile (preserve column relationships)
- **Section padding**: 96px → 64px → 48px maintains editorial rhythm at each breakpoint
- **Type scale**: H1–H5 reduce by 4–8px each on mobile; B1–B5 mostly stable to preserve readability

### Image Behavior
- Product screenshots scale proportionally within rounded containers
- Aspect ratios preserved at all sizes (16:9 hero, 4:3 cards, 1:1 portraits)
- Hi-res sources for retina displays; lazy load below the fold
- No art direction swaps between breakpoints; same crop scales down

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand CTA: "Pine Olive (#364118) / S1-900"
- Page Background: "Parchment (#f4f0ec) / P-100"
- Card Surface: "Card Cream (#f2f1ee) / N-300"
- Primary Text: "Near Black (#231815) / T-900"
- Secondary Text: "Charcoal Warm (#666464) / T-700"
- Tertiary Text: "Mid Warm (#9fa0a0) / T-500"
- Borders (light): "Border Warm (#e0dcd5) / N-700"
- Brand Secondary: "Earthen Tan (#96795a) / P-900"
- Dark Surface: "Bark (#322828)"
- Focus Olive: "S1-700 (#5d613a) with rgba(55,66,24,0.20) outer ring"

### Example Component Prompts

- "Create a hero on Parchment (#f4f0ec) with an English headline in Marcellus 64px and a Traditional Chinese subhead in Noto Serif TC Medium 32px below. Use Near Black (#231815) text. Place a Pine Olive (#364118) primary CTA labeled '開始使用' / 'Get started' and an Outline-Olive secondary CTA labeled '了解更多' / 'Learn more'."

- "Design a feature card on Card Cream (#f2f1ee) with a 1px solid Border Warm (#e0dcd5) border and 12px radius. Title in Noto Sans TC Bold 16px (H5-ZH), body in Noto Sans TC Regular 14px (B1-ZH) with line-height 1.70. Add a top-aligned 4px-wide Pine Olive vertical rule beside the title for brand emphasis."

- "Build a dark closing section on Bark (#322828) with Marcellus headline at 52px in white. Body text in Noto Sans TC Regular 14px in T-300 (#d3d3d4). Borders within the section use a thin 1px line in rgba(255,255,255,0.08). End with a Pine Olive button labeled 'Contact us / 聯絡我們'."

- "Create a token chip showing 'P-900 / #977a5b' — a 12px tan-colored square swatch, the token name in Montserrat Medium 12px (B3-EN), and the hex in JetBrains Mono 12px. Wrap in an 8px-radius chip with N-300 background and N-700 border, 6px 10px padding."

- "Design a 3-column model comparison grid with three cards on N-300 surfaces with N-700 borders. Each card gets a Pine Olive top border (4px), a Chinese model name in Noto Sans TC Bold 20px (H4-ZH), and a description in Noto Sans TC Regular 14px (B1-ZH) in T-700."

- "Build a form section with a single input field labeled '公司名稱 / Company name' in Noto Sans TC Medium 12px (B3-ZH). The input has 10px 12px padding, 8px radius, 1px N-700 border, and on focus the border becomes S1-700 with a 3px rgba(55,66,24,0.20) outer ring. Place an Olive primary CTA labeled '送出申請' / 'Submit' beside a Ghost secondary button '取消' / 'Cancel'."

### Iteration Guide

1. Focus on ONE component at a time — never compose a whole page in a single prompt.
2. Reference specific token names: "use S1-900 (#364118)", not "make it dark green".
3. Always specify warm-toned variants — no "gray" without an explicit warm hex.
4. Describe serif vs sans usage explicitly — "Noto Serif TC for the slogan, Noto Sans TC for the body".
5. For shadows, use "1px N-700 ring" or "whisper shadow (rgba(35,24,21,0.06) 0 2px 8px)" — never generic "drop shadow".
6. Specify the canvas — "on Parchment (#f4f0ec)" or "on Bark (#322828)".
7. Place CTAs in pairs (Pine Olive primary + Outline secondary), not solo buttons floating on a page.
8. For Chinese + English bilingual lines, specify the order ("Chinese first, English in T-700 below") so the agent can pick the right type sizes.
9. Reference the ladder ("place this in a Stone-rung section") instead of describing colors twice.
10. When asked to "add color" — resist. dacitech earns color by restraint, not addition.
