# 냥타로 Art Guide (for scene illustrators)

Your scene lives in `src/art/cards/<id>.tsx` and default-exports a component returning a `<g>`.
`CardArt` wraps it in `<svg viewBox="0 0 240 300" preserveAspectRatio="xMidYMid slice">`.

```tsx
import { Cat, getCatAnchors } from '../Cat.tsx'
import { PAL, Starfield, Crescent, Hill, Wand } from '../props.tsx'

export default function MagicianArt() {
  const cat = { pose: 'paw-up' as const }            // placement props shared by Cat + anchors
  const a = getCatAnchors(cat)
  return (
    <g>
      <defs>
        <linearGradient id="magician-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={PAL.night800} /><stop offset="1" stopColor={PAL.violet500} />
        </linearGradient>
      </defs>
      <rect width="240" height="300" fill="url(#magician-sky)" />
      <Starfield seed={1} count={30} h={200} />
      <Hill x={120} y={262} w={320} depth={50} color={PAL.night600} tufts={PAL.violet300} />
      <Cat {...cat} fur="#3a3148" pattern="tuxedo" eyeColor="#f5d04a"
           held={<Wand x={a.raisedPaw.x} y={a.raisedPaw.y} />} />
    </g>
  )
}
```

Check your work with `npm run art -- <id>` and read `qa-shots/art/<id>.png`.

## Style rules

- **Flat vector, soft rounded shapes.** Outline `#2b2140` (`PAL.ink`): stroke **3** on main shapes, **2** (1.5–2.5) on
  details. `strokeLinecap/Linejoin="round"` everywhere.
- **Background is full-bleed**: first element is a `240×300` rect (or gradient). Horizon/ground usually y≈240–265.
- **Keep the cat large**: ≈ 55–70% of the height. Canonical cat (scale 1) spans y≈52 (ear tips) → 275 (feet), which is
  74%; scale 0.8–0.95 leaves headroom for props. Keep important things inside **x 12–228, y 12–288** (the UI may
  crop a few px; `slice` scaling crops more on odd aspect ratios).
- Limited palette: tokens below + one or two per-card accents. Light-on-dark or dark-on-light — make the cat pop
  against the background (dark cats on night skies: use `rim`, a moon/halo behind, or a lighter backdrop).
- Must read at **90px wide** thumbnails: big simple shapes, few tiny details, strong silhouette.
- **SVG ids** (gradients, clipPaths, filters, masks) **must start with your card id**: `id="moon-glow"`, `url(#moon-glow)`.
  `<Cat>` makes its own unique ids (via `useId`, or pass `uid="moon-cat2"`). Props have no ids.
- **No `<text>`** with Korean (and avoid text in general — numerals/names are drawn by the UI).
- **Deterministic**: no `Math.random()`, no `Date`. Use `rng(seed)` / `blobPath(..., seed)` / `<Starfield seed>` from props.
- No external images, no `<foreignObject>`, no CSS animations in scenes (the UI animates the card as a whole).

## `<Cat>` API

Returns a `<g>` drawn in scene space. The canonical cat sits centred on **x=120** with feet on **y=275**.

| prop | type / values | default | notes |
| --- | --- | --- | --- |
| `fur` | color | `#f4a950` | main coat |
| `furShade` | color | fur darkened 20% | neck shadow |
| `belly` | color | lighter fur (white for tuxedo/bicolor; = fur for calico/cow/tortie) | chest patch |
| `pattern` | `'solid' 'tabby' 'mackerel' 'tuxedo' 'bicolor' 'calico' 'tortie' 'cow' 'pointed' 'spotted' 'ticked'` | `solid` | clipped inside head/body; tail gets matching rings/tip |
| `patternColor` | color | per pattern | stripes / white (tuxedo, bicolor) / orange (calico, tortie) / black (cow) / points (pointed) / rosette ring (spotted) |
| `patternColor2` | color | per pattern | black patches (calico) / light mottling (tortie) / rosette centres (spotted) |
| `eyeColor`, `eyeColor2` | color | `#8fd16a` green | `eyeColor2` = screen-right eye (odd eyes) |
| `expression` | `'smile' 'happy' 'wink' 'sleepy' 'surprised' 'smug' 'determined' 'serene'` | `smile` | happy/serene = closed eyes, wink = screen-right eye closed, determined has brows + tiny fang |
| `pose` | `'sit' 'paw-up' 'paws-up'` | `sit` | `paw-up` raises the **screen-right** paw (flip to mirror) |
| `tail` | `'curl' 'up' 'down'` | `curl` | curl hooks on the right side; up rises beside the body; down lies on the ground |
| `ears` | `'normal' 'folded' 'tufted'` | `normal` | tufted = lynx tips (Maine Coon) |
| `longHair` | boolean | false | cheek fluff, chest ruff, fluffy haunches, thicker tail |
| `kitten` | boolean | false | bigger head, smaller body — anchors change, use `getCatAnchors({ kitten: true })` |
| `socks` | boolean \| color | false | white (or coloured) front paws |
| `collar`, `bell` | color, boolean | – | collar band under the chin, gold bell |
| `noseColor`, `blush` | color, color \| false | pink | |
| `rim` | color | – | soft halo around the silhouette (dark cat on dark bg: `rim={PAL.violet300}`) |
| `shadow` | boolean | true | ground shadow ellipse at y=277 (turn off when not standing on ground) |
| `headTilt` | degrees | 0 | + = clockwise, pivots on the neck |
| `held` | ReactNode | – | drawn in cat space **just before the raised paw(s)** → the paw overlaps it = holding |
| `behind` / `front` | ReactNode | – | drawn in cat space behind everything / on top (wings, halo, hat…) |
| `x`, `y` | number | 120, 275 | where the **feet centre** lands in the scene |
| `scale`, `rotate` | number | 1, 0 | around the feet centre |
| `flip` | boolean | false | mirror horizontally (tail + raised paw go left) |
| `uid` | string | auto (`useId`) | id prefix for the cat's clip paths/gradients |

`held`/`behind`/`front` use the **canonical coordinates** (CAT_ANCHORS values) because they are inside the cat's
transform — e.g. `behind={<Wings x={120} y={205} span={90} />}` works at any x/y/scale/flip. (For kittens, `held` is
in body space — canonical raisedPaw still works; `behind`/`front` are not kitten-adjusted, so use kitten head values.)

### Anchors

`CAT_ANCHORS` — canonical adult, before any transform (scene coordinates when x=120,y=275,scale=1):

| anchor | adult (x, y) | kitten (x, y) |
| --- | --- | --- |
| `headTop` | 120, 80 | 120, 83 |
| `headCenter` | 120, 128 | 120, 137 |
| `earL` / `earR` (tips) | 63, 56 / 177, 56 | 56, 56 / 184, 56 |
| `eyeL` / `eyeR` | 96, 133 / 144, 133 | 93, 143 / 147, 143 |
| `nose` | 120, 148 | 120, 159 |
| `mouth` | 120, 158 | 120, 171 |
| `neck` (collar) | 120, 182 | 120, 195 |
| `chest` | 120, 214 | 120, 222 |
| `pawL` / `pawR` (ground paws) | 105, 267 / 135, 267 | 107, 268 / 133, 268 |
| `raisedPaw` (= `raisedPawR`) | 184, 180 | 175, 193 |
| `raisedPawL` (paws-up) | 56, 180 | 65, 193 |
| `tailTip` | curl 190, 228 · up 219, 158 · down 215, 265 | curl 180, 235 |
| `groundY` | 275 | 275 |

Head width ≈ 62–178 (x), ears reach y≈52; body ≈ 58–182 wide at the haunches.

**With transforms** use the helpers instead of doing the maths yourself:

```tsx
const place = { x: 80, y: 262, scale: 0.6, flip: true, pose: 'paw-up' as const }
const a = getCatAnchors(place)          // every anchor in scene coordinates (flip mirrors x)
<Cat {...place} fur="#9aa0ad" pattern="mackerel" />
<Lantern x={a.raisedPaw.x} y={a.raisedPaw.y} scale={0.6} />   // drawn by you, in scene space
catPoint({ x: 120, y: 60 }, place)      // any canonical point → scene space
```

Note: with `flip`, names keep their meaning in *canonical* space (`raisedPaw` ends up on the left, `eyeL` on the right).

### The 22 cats (recipes)

| card | cat | props |
| --- | --- | --- |
| fool | 치즈 태비 | `fur="#f4a24c" pattern="tabby" eyeColor="#8fd16a"` |
| magician | 턱시도 | `fur="#3a3148" pattern="tuxedo" eyeColor="#f5d04a"` (+ `pose="paw-up"` + Wand) |
| high-priestess | 러시안 블루 | `fur="#8a9bb8" eyeColor="#7fd67a"` |
| empress | 크림 페르시안 | `fur="#f6e3c3" longHair eyeColor="#e0894a"` |
| emperor | 갈색 태비 메인쿤 | `fur="#9a6a44" pattern="tabby" patternColor="#4e3322" ears="tufted" longHair eyeColor="#f0a23a" scale={1.05}` |
| hierophant | 하얀 오드아이 | `fur="#fbf7f0" eyeColor="#6fb6ff" eyeColor2="#f5d04a"` |
| lovers | 삼색이 + 고등어 | `pattern="calico" fur={PAL.white} eyeColor="#f0a23a"` and `fur="#9aa0ad" pattern="mackerel" flip` (two cats at scale ≈0.62, x≈72 / 168) |
| chariot | 벵갈 | `fur="#e8a94f" pattern="spotted" eyeColor="#8fd16a"` |
| strength | 아비시니안 | `fur="#c9793f" pattern="ticked" eyeColor="#f0a23a"` |
| hermit | 스모키 그레이 장모 | `fur="#6f6a7c" furShade="#4d4859" longHair eyeColor="#f5d04a"` |
| wheel-of-fortune | 카오스 | `fur="#3b3040" pattern="tortie" eyeColor="#f0a23a"` |
| justice | 젖소냥 | `fur={PAL.white} pattern="cow" eyeColor="#8fd16a"` |
| hanged-man | 스코티시 폴드 | `fur="#b4b8c4" ears="folded" eyeColor="#e0894a"` (hang it upside down: `rotate={180} y={24} scale={0.9} shadow={false}` → feet at the top, head ≈ y 200) |
| death | 검은 고양이 흰 양말 | `fur="#352d42" belly={PAL.white} socks eyeColor="#f5d04a" rim={PAL.violet300}` |
| temperance | 랙돌 | `fur="#f5e9d6" pattern="pointed" patternColor="#8a6650" longHair eyeColor="#6fb6ff"` |
| devil | 초콜릿 브라운 | `fur="#6b4032" eyeColor="#8fd16a" expression="smug" tail="up"` |
| tower | 실버 태비 | `fur="#c9ccd6" pattern="tabby" patternColor="#3d3a4a" eyeColor="#8fd16a" expression="surprised"` |
| star | 크림 태비 | `fur="#f3d7a8" pattern="tabby" eyeColor="#6fb6ff"` |
| moon | 샴 | `fur="#f3e6d2" pattern="pointed" eyeColor="#6fb6ff"` (default seal point) |
| sun | 치즈&흰색 아기 | `fur="#f4a24c" pattern="bicolor" kitten eyeColor="#8fd16a" expression="happy"` |
| judgement | 연보라 회색 천사 | `fur="#c9bfd8" eyeColor="#6fb6ff" pose="paw-up" behind={<Wings x={120} y={205} span={90} />}` on a Cloud; small `kitten` cats at scale ≈0.4 with a `Box` drawn **after** them to pop out |
| world | 회색 턱시도 | `fur="#8a8f9c" pattern="tuxedo" eyeColor="#8fd16a"` |

Eye colours: green `#8fd16a`, yellow `#f5d04a`, amber `#f0a23a`, copper `#e0894a`, blue `#6fb6ff`.
Any expression/pose/tail combination works on every cat — choose what fits the card.

## Props (`src/art/props.tsx`)

All take `x`, `y`, `scale`, `rotate`, `opacity` and draw around their **origin**:

| prop | origin · size at scale 1 | extra props |
| --- | --- | --- |
| `Sparkle` | centre · 2×size | `size=8 color outline` |
| `Star` | centre · r=12 | `r points=5 inner=0.48 color outline` |
| `Crescent` | disc centre · r=20, opens right | `r cut=0.55 color outline` (rotate to orient) |
| `Sun` | centre · rays ≈1.6r | `r=22 rays=12 color rayColor face` |
| `Cloud` | bottom centre · 100×46 | `color shade outline` |
| `Starfield` | area x..x+w, y..y+h | `w h count seed color sparkles minR maxR opacity` |
| `PawPrint` | main pad · 24×24 | `color outline` |
| `Heart` | centre · 24×22 | `color outline` |
| `Flower` | centre · r=6 | `r petals color center outline` |
| `Leaf` | stem base, points up · 28 long | `color vein outline` |
| `YarnBall` | centre · r=14 | `r color thread` |
| `Fish` | centre, faces right · 44×22 | `color fin` |
| `MilkCup` | bottom centre · 30×30 | `color milk emblem` |
| `Crown` | bottom centre · 44×31 | `color gem` (on a cat: `front={<Crown x={120} y={86} />}`) |
| `Wand` | grip, points up · 62 long | `color tip` (grip at `raisedPaw`) |
| `Hill` | crest centre, fills down to y+depth | `w=300 depth=80 color tufts flowers seed outline` |
| `Pillar` | bottom centre · h=170 | `h w color shade` |
| `Wings` | point between wings · half-span 58 | `span color shade` (cat `behind`, y≈205, span 85–95) |
| `Halo` | centre · rx=24 | `rx color` (cat `front`, y≈66) |
| `Box` | bottom centre · 64×40 | `w h color` (draw after a small cat) |
| `Lantern` | top of handle · 26×44 | `color glow frame` (hang at `raisedPaw`) |

Helpers: `PAL` (palette), `rng(seed)` (deterministic PRNG), `blobPath(cx, cy, rx, ry, seed)` (organic blob `d`), and
from Cat.tsx `mix(a, b, t)` (colour mix), `CAT_INK`.

## Palette (`PAL`, mirrors `src/styles/tokens.css`)

| token | hex | | token | hex |
| --- | --- | --- | --- | --- |
| ink | `#2b2140` | | gold500 / 400 / 300 | `#e0ac4a` / `#f2c66d` / `#f7dc9c` |
| night950 / 900 | `#0e0a1c` / `#140f26` | | paper / paper2 | `#fff7ea` / `#f6ead3` |
| night800 / 700 / 600 | `#1e1638` / `#2a1f4d` / `#3a2c66` | | pink400 / 300 | `#ff7c9c` / `#ff9fb8` |
| violet500 / 300 | `#7b5cd6` / `#b9a4f5` | | mint300 / sky300 | `#8fe3cf` / `#9cd3ff` |
| white (warm) | `#fffaf3` | | art-only: grass / grassDark / wood / stone / cardboard | `#7fcf8e` `#4fa77a` `#b07a4f` `#d9d0e8` `#d9a066` |

Suggested per-card accent (background mood → accent):

| card | mood | accent |
| --- | --- | --- |
| fool | sunny cliff, sky blue | sky300 + `#ffd166` |
| magician | violet night, table | violet500 + gold |
| high-priestess | deep night, moon, pillars | night + sky300 + `#6fb6ff` |
| empress | garden, blush | pink300 + grass |
| emperor | throne room, warm red | `#e06a5a` + gold |
| hierophant | temple, cream | paper + gold + stone |
| lovers | pastel sky, hearts | pink400 + `#ffd6e0` |
| chariot | dusk road, speed | `#ff9f5a` + night |
| strength | golden field | `#ffc36b` + grass |
| hermit | snowy night, lantern | night + `#fff3c4` |
| wheel-of-fortune | cosmic wheel | violet + mint300 + gold |
| justice | scales, balanced | sky300 + gold + paper |
| hanged-man | upside-down tree, calm | mint300 + `#6fcf97` |
| death | new-dawn, butterflies (light) | `#ffb38a` + violet300 |
| temperance | water cups, rainbow | sky300 + mint300 |
| devil | cozy guilty pleasures, red-violet | `#c2417a` + gold |
| tower | playful lightning, block tower | `#ffd166` + night |
| star | starry pond | sky300 + gold300 |
| moon | big moon, night pond | night + gold300 + `#6fb6ff` |
| sun | bright yellow, sunflowers | gold400 + `#ffe08a` |
| judgement | sky, clouds, trumpet | sky300 + white + gold |
| world | globe, wreath | grass + sky300 + gold |

## Card back

`<CardBack className>` (`src/art/CardBack.tsx`) — 240×380, ids `cardback-*`. Owned by the art-base agent.
