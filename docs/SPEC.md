# 냥타로 아이스브레이킹 — Product & Build Spec

A static (no backend) web app for networking events. People draw one **cat tarot card**, get a playful
**"오늘의 네트워킹 검사표"** (networking check-up sheet), then go through a **deck of 10 icebreaking question
cards** whose topic is decided by the drawn tarot card. Korean UI. Deployed to Vercel as a Vite static build.

Audience: adults at meetups, workshops, team onboarding — strangers or new colleagues. It is shown either on
each person's phone or on a facilitator's laptop/projector. Mobile-first (360–430px), must also look good at
1280px+ desktop.

## Screens & flow

State lives in the URL hash so refresh/share works (no server rewrites needed):

| Hash | Screen |
| --- | --- |
| `#/` (or empty) | **Draw** — landing + pick one face-down card |
| `#/card/<id>` | **Result** — 검사표 for that card |
| `#/card/<id>/q/<n>` (n = 1..10) | **Deck** — question n of that card's 10 |
| `#/card/<id>/done` | **Done** — completion |

Unknown ids / out-of-range n → fall back gracefully (to Draw, or clamp n).

### 1. Draw (첫 화면)
- Title "냥타로 아이스브레이킹", subtitle like "고양이가 점쳐주는 오늘의 네트워킹". A cat mascot (use `<Cat>` from
  `src/art/Cat.tsx`) adds charm. Night-sky background with subtle twinkling stars.
- 22 face-down cards (`<CardBack>`) spread out (fan / arc / overlapping rows — must fit 360px width without
  horizontal page scroll). Order is shuffled on load; a "섞기" button reshuffles with animation.
- Hint: "마음이 끌리는 카드를 한 장 골라주세요".
- Tapping a card: it lifts, moves to center, 3D-flips (rotateY) to reveal the **card face**, the rest dim/fall
  away. Then a CTA "검사표 보기" (or auto-advance after ~1.5s with the CTA also present) → Result.
- Card face (`TarotCardFace` component): tarot proportions (≈ 240×380), gold double border, roman numeral at
  top, `<CardArt id>` illustration in the middle, name plate at bottom ("THE FOOL" + "바보 · 모험가 치즈냥").

### 2. Result — 오늘의 네트워킹 검사표
Styled like a cute official check-up sheet / 진단서 on cream paper (`--paper`), floating on the night background:
- Header: "오늘의 네트워킹 검사표", today's date (Korean format), a round "냥" stamp/seal (rotated, red/pink ink).
- The drawn card (small `TarotCardFace`) + catName + 3 keyword chips + networkerType badge.
- `reading.headline` big, `reading.summary` below.
- 4 stat gauges (`reading.stats`, labels 친화력/대화운/인연운/에너지) — animated fill bars or paw-print meters with
  score + comment.
- Rows: 행운의 대화 주제 (`luckyTopic`), 행운의 아이템 (`luckyItem`), 주의할 점 (`caution`).
- 오늘의 미션 체크리스트 (`checklist`, 3 items) — tappable checkboxes (paw check marks). Optional localStorage
  persistence (wrap in try/catch).
- 고양이의 한마디 (`catAdvice`) in a speech bubble from a small cat.
- 궁합 좋은 카드 (`bestMatch`) — mini card thumbnail + name ("오늘은 ○○ 카드를 뽑은 사람과 잘 맞아요").
- Theme callout: "오늘의 대화 주제" `theme.emoji theme.title` + `theme.subtitle`.
- Primary CTA "질문 카드 펼치기 →" → `#/card/<id>/q/1`. Secondary: "다시 뽑기" → `#/`. Share button.

### 3. Deck — 질문 카드 (10장)
- Header: theme emoji + title, subtitle; progress "3 / 10" + 10 paw-print dots.
- A visual **stack** of remaining cards behind the current one. Current card (cream/paper or light face with
  gold edge) shows: level badge (1 → "몸풀기", 2 → "알아가기", 3 → "한 뼘 더"), question number, the question
  text large and readable (it will be read aloud / shown on a projector), and a "꼬리 질문 보기" toggle that
  reveals `followUp`.
- Next / Prev buttons, swipe left/right on touch (pointer events), ←/→ keys and Space for presenters.
  Advancing animates the top card off (fly/flip) and the next rises. Question 10 → Next → Done.
- Small tool buttons: fullscreen toggle (presenter mode, hide if unsupported), back to 검사표.

### 4. Done
- Celebrating cat, "10개의 질문을 모두 나눴어요!" + the card face small.
- Buttons: "다른 카드 뽑기" (→ `#/`), "이 카드 질문 다시 보기" (→ `q/1`), "공유하기".

### Share
`navigator.share` when available, else copy link to clipboard with a toast. Text like
"오늘의 네트워킹 카드는 ‘0. 바보 – 모험가 치즈냥’! 나도 뽑아보기 👉 <url>". Link = origin + `#/card/<id>`.

## Visual language — "cute mystic cat"
- Night sky (`--night-*`), gold foil (`--gold-*`), cream paper (`--paper`), pink/mint accents. Tokens in
  `src/styles/tokens.css` — use the CSS variables, don't hard-code new colors without adding a token.
- Fonts: display = **Jua** (Google Fonts), body = **Pretendard** (jsDelivr CDN:
  `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css`).
- Cat details everywhere but tasteful: paw prints as progress dots/check marks, cat ears on headers, tail
  swishes. Motion: springy but short; every animation must respect `prefers-reduced-motion: reduce`.
- Accessibility: real `<button>`s, visible `:focus-visible`, aria-labels on icon buttons, color contrast AA for
  text, `lang="ko"`, tap targets ≥ 44px.
- No horizontal scroll at 360px. Safe-area insets respected (`env(safe-area-inset-*)`).

## Illustration system (src/art)
- `CardArt` (`src/art/CardArt.tsx`, fixed — do not edit) renders `<svg viewBox="0 0 240 300">` wrapping the
  per-card scene component from `src/art/cards/<id>.tsx`.
- Each scene draws a full-bleed background for its 240×300 box, then the cat and props. Flat vector, soft
  rounded shapes, dark outline `#2b2140` (stroke 3 for main shapes, 2 for details), limited palette from
  tokens + a per-card accent. Cute, readable at 90px wide thumbnails.
- `src/art/Cat.tsx` exports the parametric `<Cat>` (fur/pattern/eyes/expression/pose options + documented
  anchor coordinates) used by all scenes for consistency. `src/art/CardBack.tsx` exports `<CardBack>` (viewBox
  240×380).
- **SVG id rule:** any `id` (gradients, clipPaths, filters) must be prefixed with the card id (e.g.
  `fool-sky`), and `<Cat>` must not use fixed ids (take a `uid` prop if it needs any). Multiple different
  cards render on one page — colliding ids break fills.
- No `<text>` with Korean in art (fonts are not guaranteed inside SVG). Roman numerals/names are drawn by the
  UI, not by the scene.

## Content rules (src/data/cards/<id>.ts)
Contract: `src/data/types.ts`. Canonical identity + topic direction: `src/data/deck.ts`.
- Korean, warm and witty, polite 해요체 for questions. Mystic-tarot flavor + cat puns in reading text (not in
  every sentence).
- Questions must be answerable by anyone in 1–2 minutes, safe with strangers and at work: **never** ask about
  salary/money amounts, politics, religion, dating/marital status, age, appearance/body, health, family
  circumstances, or anything requiring disclosure of trauma. The Death/Devil/Tower cards stay light and
  positive (change, harmless guilty pleasures, funny mishaps).
- Progression: q1–q4 level 1 (easy warm-up), q5–q8 level 2 (getting to know), q9–q10 level 3 (a bit deeper,
  reflective, still safe). Each question is concrete and specific to the card's topic (avoid generic "취미가
  뭐예요?"), open-ended (not yes/no), and distinct from the others. `followUp` digs one step further.
- Stat scores vary between cards (use the full 45–98 range; not all high). `bestMatch` must be a different id.
- Run `npm run validate -- <ids>` — must report 0 errors for your cards.

## Commands
- `npm run dev -- --port <PORT> --strictPort` — dev server (use the port you were assigned).
- `npm run build` — typecheck + production build (must pass).
- `npm run validate [-- ids]` — content validator.
- `npm run art [-- ids]` — render illustrations to `qa-shots/art/<id>.png` (+ `gallery.png`, `card-back.png`
  when run with no ids). Read the PNGs to check your work visually.
- Screenshot the running app (puppeteer): `node /private/tmp/claude-501/-Users-maro-Documents-yukmaro-icebreaking/f5cb076b-224f-4ab7-8c00-de5dc2288ce6/scratchpad/qa/shoot.mjs <url> <out.png> [--w 390 --h 844]
  [--full] [--wait ms] [--click "<selector>"] [--tap-text "<button text>"] [--key ArrowRight]`.

## File ownership (parallel agents — only edit what you own)
- Content agents: `src/data/cards/<their ids>.ts`.
- Art-base agent: `src/art/Cat.tsx`, `src/art/CardBack.tsx`, `src/art/palette.ts` (optional), `docs/ART.md`.
- Art-scene agents: `src/art/cards/<their ids>.tsx`.
- UI agent: `index.html`, `public/**`, `src/main.tsx`, `src/App.tsx`, `src/screens/**`, `src/components/**`,
  `src/lib/**`, `src/styles/**`.
- Shared/fixed (nobody edits during the build): `src/data/types.ts`, `src/data/deck.ts`, `src/data/index.ts`,
  `src/art/CardArt.tsx`, `package.json`, configs, `scripts/**`.
