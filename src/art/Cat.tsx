// Parametric cat used by every tarot scene. Draws in the scene's 240×300 space: a sitting cat centred on
// x=120 with its feet on y=275 (GROUND). See docs/ART.md for the API, anchors and examples.
import { useId, type ReactNode } from 'react'

/* ───────────────────────── types ───────────────────────── */

export type CatPattern =
  | 'solid' | 'tabby' | 'mackerel' | 'tuxedo' | 'bicolor' | 'calico'
  | 'tortie' | 'cow' | 'pointed' | 'spotted' | 'ticked'
export type CatExpression =
  | 'happy' | 'smile' | 'wink' | 'sleepy' | 'surprised' | 'smug' | 'determined' | 'serene'
export type CatPose = 'sit' | 'paw-up' | 'paws-up'
export type CatTail = 'curl' | 'up' | 'down'
export type CatEars = 'normal' | 'folded' | 'tufted'

export interface CatProps {
  /** Prefix for the cat's internal SVG ids. Optional — a unique one is generated with useId(). */
  uid?: string
  /** Main coat colour. */
  fur?: string
  /** Darker tone for shading (default: fur darkened). */
  furShade?: string
  /** Chest/belly colour (default depends on pattern: lighter fur, or white for tuxedo/bicolor). */
  belly?: string
  pattern?: CatPattern
  /** Secondary coat colour: stripes (tabby), white (tuxedo/bicolor), orange (calico/tortie), black (cow), points. */
  patternColor?: string
  /** Tertiary coat colour: black patches (calico), light mottling (tortie), rosette centres (spotted). */
  patternColor2?: string
  /** Iris colour of both eyes (or the screen-left eye when eyeColor2 is set). */
  eyeColor?: string
  /** Iris colour of the screen-right eye (odd eyes). */
  eyeColor2?: string
  expression?: CatExpression
  /** 'paw-up' raises the screen-right front paw; 'paws-up' raises both. */
  pose?: CatPose
  tail?: CatTail
  ears?: CatEars
  longHair?: boolean
  /** Kitten proportions: bigger head, smaller body (anchors change — use getCatAnchors). */
  kitten?: boolean
  /** White (true) or coloured front paws. */
  socks?: boolean | string
  /** Collar colour; omitted = no collar. */
  collar?: string
  /** Gold bell on the collar (needs collar). */
  bell?: boolean
  noseColor?: string
  /** Cheek blush colour, or false to hide. */
  blush?: string | false
  /** Soft halo around the silhouette — use for dark cats on dark backgrounds, e.g. rim="#b9a4f5". */
  rim?: string
  /** Soft ground shadow under the cat (default true). */
  shadow?: boolean
  /** Head tilt in degrees (positive = clockwise), pivoting on the neck. */
  headTilt?: number
  /** Rendered in cat space right before the raised paw(s), so the paw overlaps it ("holding"). */
  held?: ReactNode
  /** Rendered in cat space behind everything (wings, cushions…). Follows x/y/scale/flip. */
  behind?: ReactNode
  /** Rendered in cat space on top of everything (hats, glasses…). Follows x/y/scale/flip. */
  front?: ReactNode
  /** Where the cat's feet centre lands in the scene. Default 120 / 275 (canonical placement). */
  x?: number
  y?: number
  /** Uniform scale around the feet centre. */
  scale?: number
  /** Mirror horizontally (raised paw and tail move to the left). */
  flip?: boolean
  /** Rotation in degrees around the feet centre. */
  rotate?: number
}

/* ───────────────────────── colour helpers ───────────────────────── */

export const CAT_INK = '#2b2140'
const WHITE = '#fffaf3'
const PINK = '#ff9fb8'
const INNER_EAR = '#ffb3c6'

function rgb(hex: string): [number, number, number] {
  let h = hex.replace('#', '')
  if (h.length === 3) h = h.split('').map((c) => c + c).join('')
  const n = parseInt(h.slice(0, 6), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}
/** Linear mix of two hex colours (t=0 → a, t=1 → b). */
export function mix(a: string, b: string, t: number): string {
  const x = rgb(a)
  const y = rgb(b)
  const c = x.map((v, i) => Math.round(v + (y[i] - v) * t))
  return '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('')
}
function luminance(hex: string): number {
  const [r, g, b] = rgb(hex).map((v) => {
    const s = v / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/* ───────────────────────── affine helpers (anchors) ───────────────────────── */

type Mat = [number, number, number, number, number, number]
const I: Mat = [1, 0, 0, 1, 0, 0]
const mul = (m: Mat, n: Mat): Mat => [
  m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1],
  m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3],
  m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5],
]
const T = (x: number, y: number): Mat => [1, 0, 0, 1, x, y]
const S = (sx: number, sy = sx): Mat => [sx, 0, 0, sy, 0, 0]
const R = (deg: number): Mat => {
  const r = (deg * Math.PI) / 180
  return [Math.cos(r), Math.sin(r), -Math.sin(r), Math.cos(r), 0, 0]
}
const chain = (...ms: Mat[]) => ms.reduce(mul, I)
const apply = (m: Mat, p: Pt): Pt => ({ x: +(m[0] * p.x + m[2] * p.y + m[4]).toFixed(1), y: +(m[1] * p.x + m[3] * p.y + m[5]).toFixed(1) })
const css = (m: Mat) => `matrix(${m.map((v) => +v.toFixed(4)).join(' ')})`

export interface Pt { x: number; y: number }

/* ───────────────────────── geometry (canonical adult, sit) ───────────────────────── */

export const CAT_GROUND = 275
const NECK: Pt = { x: 120, y: 170 }

const HEAD = 'M120 80 C151 80 172 93 178 116 C184 139 175 160 155 168 C144 173 132 175 120 175 C108 175 96 173 85 168 C65 160 56 139 62 116 C68 93 89 80 120 80 Z'
const HEAD_LONG = 'M120 79 C151 79 172 92 178 115 C181 125 182 133 181 140 C187 143 191 148 192 154 C187 154 183 155 181 157 C185 161 187 166 185 171 C177 169 169 168 162 169 C148 175 134 177 120 177 C106 177 92 175 78 169 C71 168 63 169 55 171 C53 166 55 161 59 157 C57 155 53 154 48 154 C49 148 53 143 59 140 C58 133 59 125 62 115 C68 92 89 79 120 79 Z'

const BODY = 'M96 158 C80 170 74 190 75 210 C61 222 55 246 60 262 C63 271 75 275 90 275 L150 275 C165 275 177 271 180 262 C185 246 179 222 165 210 C166 190 160 170 144 158 Z'
const BODY_LONG = 'M94 158 C76 169 69 188 70 206 C63 211 59 218 60 224 C53 234 50 248 55 258 C51 262 51 268 55 271 C63 276 76 276 90 276 L150 276 C164 276 177 276 185 271 C189 268 189 262 185 258 C190 248 187 234 180 224 C181 218 177 211 170 206 C171 188 164 169 146 158 Z'

const EAR = 'M68 110 C61 92 58 72 62 60 C64 53 70 51 76 55 C88 64 100 75 112 86 Z'
const EAR_INNER = 'M74 101 C69 88 68 76 70 67 C71 63 74 63 77 66 C85 73 92 80 99 88 C89 90 81 95 74 101 Z'
const EAR_FOLD = 'M76 104 C71 92 76 82 88 79 C97 77 105 80 109 85 C103 94 92 101 80 106 Z'
const EAR_TUFT = 'M63.5 61 C61 53 61 46 63 39 C66 46 69 52 71 58 Z'
const MIRROR: Mat = [-1, 0, 0, 1, 240, 0]

const TAILS: Record<CatTail, { d: string; tip: Pt }> = {
  curl: { d: 'M158 262 C196 274 218 258 213 236 C210 222 196 218 190 228', tip: { x: 190, y: 228 } },
  up: { d: 'M160 250 C196 248 209 216 203 188 C199 170 207 155 219 158', tip: { x: 219, y: 158 } },
  down: { d: 'M156 268 C182 279 203 278 215 265', tip: { x: 215, y: 265 } },
}

const ARM_R = 'M158 212 Q174 210 182 188'
const ARM_L = 'M82 212 Q66 210 58 188'
const RAISED_R: Pt = { x: 184, y: 180 }
const RAISED_L: Pt = { x: 56, y: 180 }
const EYE_L: Pt = { x: 96, y: 133 }
const EYE_R: Pt = { x: 144, y: 133 }

/** Anchor points of the canonical cat (adult, x=120, y=275, scale 1, no flip), in scene coordinates. */
export const CAT_ANCHORS = {
  headTop: { x: 120, y: 80 },
  headCenter: { x: 120, y: 128 },
  earL: { x: 63, y: 56 },
  earR: { x: 177, y: 56 },
  eyeL: EYE_L,
  eyeR: EYE_R,
  nose: { x: 120, y: 148 },
  mouth: { x: 120, y: 158 },
  neck: { x: 120, y: 182 },
  chest: { x: 120, y: 214 },
  pawL: { x: 105, y: 267 },
  pawR: { x: 135, y: 267 },
  raisedPaw: RAISED_R,
  raisedPawL: RAISED_L,
  raisedPawR: RAISED_R,
  tailTip: TAILS.curl.tip,
  groundY: CAT_GROUND,
} as const
export type CatAnchorName = Exclude<keyof typeof CAT_ANCHORS, 'groundY'>

const HEAD_ANCHORS: CatAnchorName[] = ['headTop', 'headCenter', 'earL', 'earR', 'eyeL', 'eyeR', 'nose', 'mouth']

type Placement = Pick<CatProps, 'x' | 'y' | 'scale' | 'flip' | 'rotate' | 'kitten' | 'headTilt' | 'tail'>

function matrices(p: Placement) {
  const s = p.scale ?? 1
  const outer = chain(T(p.x ?? 120, p.y ?? CAT_GROUND), R(p.rotate ?? 0), S(p.flip ? -s : s, s), T(-120, -CAT_GROUND))
  const body = p.kitten ? chain(T(120, CAT_GROUND), S(0.86), T(-120, -CAT_GROUND)) : I
  const hs = p.kitten ? 1.12 : 1
  const dy = p.kitten ? 14 : 0
  const head = chain(T(NECK.x, NECK.y + dy), S(hs), R(p.headTilt ?? 0), T(-NECK.x, -NECK.y))
  return { outer, body, head }
}

/**
 * Anchor points in scene coordinates for a cat with the given placement props
 * (x/y/scale/flip/rotate/kitten/headTilt/tail). With no args this equals CAT_ANCHORS.
 * Note: with flip, "raisedPaw"/"eyeR"… keep their names but move to the mirrored side.
 */
export function getCatAnchors(p: Placement = {}): Record<CatAnchorName, Pt> & { groundY: number } {
  const m = matrices(p)
  const out = {} as Record<CatAnchorName, Pt>
  for (const key of Object.keys(CAT_ANCHORS) as (keyof typeof CAT_ANCHORS)[]) {
    if (key === 'groundY') continue
    const base = key === 'tailTip' ? TAILS[p.tail ?? 'curl'].tip : CAT_ANCHORS[key]
    const local = HEAD_ANCHORS.includes(key) ? m.head : m.body
    out[key] = apply(mul(m.outer, local), base)
  }
  return { ...out, groundY: apply(m.outer, { x: 120, y: CAT_GROUND }).y }
}

/** Transforms any canonical cat-space point into scene space for the given placement. */
export function catPoint(pt: Pt, p: Placement = {}): Pt {
  return apply(matrices(p).outer, pt)
}

/* ───────────────────────── small drawing helpers ───────────────────────── */

const stroke = (w: number, color = CAT_INK) => ({
  stroke: color, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
})

function Tube({ d, w, color, outline = true }: { d: string; w: number; color: string; outline?: boolean }) {
  return (
    <>
      {outline && <path d={d} fill="none" {...stroke(w + 6)} />}
      <path d={d} fill="none" {...stroke(w, color)} />
    </>
  )
}

/** Smooth deterministic blob (for patches). */
function blob(cx: number, cy: number, rx: number, ry: number, seed: number, rot = 0): string {
  const n = 7
  let s = seed * 9301 + 49297
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
  const pts: Pt[] = []
  const rr = (rot * Math.PI) / 180
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2
    const k = 0.78 + rnd() * 0.36
    const px = Math.cos(a) * rx * k
    const py = Math.sin(a) * ry * k
    pts.push({ x: cx + px * Math.cos(rr) - py * Math.sin(rr), y: cy + px * Math.sin(rr) + py * Math.cos(rr) })
  }
  let d = `M${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n]
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 }
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 }
    d += ` C${c1.x.toFixed(1)} ${c1.y.toFixed(1)} ${c2.x.toFixed(1)} ${c2.y.toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`
  }
  return d + 'Z'
}
const mirrorX = (d: string) =>
  d.replace(/([MLQCT ])\s*([\d.-]+)[ ,]([\d.-]+)/g, (_m, c: string, x: string, y: string) => `${c}${+(240 - +x).toFixed(1)} ${y}`)

/* ───────────────────────── pattern resolution ───────────────────────── */

interface Look {
  fur: string
  shade: string
  belly: string
  pc: string
  pc2: string
  earL: string
  earR: string
  paw: string
  muzzle: string | null
  line: string // face-feature line colour
  whisker: string
}

function resolveLook(p: CatProps): Look {
  const fur = p.fur ?? '#f4a950'
  const pat = p.pattern ?? 'solid'
  const shade = p.furShade ?? mix(fur, CAT_INK, 0.2)
  const pcDefault: Record<CatPattern, string> = {
    solid: shade,
    tabby: mix(fur, CAT_INK, 0.38),
    mackerel: mix(fur, CAT_INK, 0.42),
    ticked: mix(fur, CAT_INK, 0.3),
    tuxedo: WHITE,
    bicolor: WHITE,
    calico: '#f09a45',
    tortie: '#e0843a',
    cow: '#3a3148',
    pointed: '#5b3f35',
    spotted: mix(fur, CAT_INK, 0.62),
  }
  const pc2Default: Record<CatPattern, string> = {
    solid: shade, tabby: shade, mackerel: shade, ticked: shade, tuxedo: shade, bicolor: shade,
    calico: '#3d3448',
    tortie: '#f5b56a',
    cow: shade,
    pointed: shade,
    spotted: mix(fur, '#a0521d', 0.45),
  }
  const pc = p.patternColor ?? pcDefault[pat]
  const pc2 = p.patternColor2 ?? pc2Default[pat]
  const whiteish = pat === 'tuxedo' || pat === 'bicolor'
  const belly =
    p.belly ??
    (whiteish ? pc : pat === 'calico' || pat === 'cow' ? fur : pat === 'tortie' ? fur : mix(fur, WHITE, pat === 'pointed' ? 0.35 : 0.5))
  const sockColor = typeof p.socks === 'string' ? p.socks : p.socks ? WHITE : null
  const paw = sockColor ?? (whiteish || pat === 'cow' ? (pat === 'cow' ? fur : pc) : pat === 'pointed' ? pc : fur)
  const earL = pat === 'pointed' ? pc : pat === 'calico' ? pc : fur
  const earR = pat === 'pointed' ? pc : pat === 'calico' ? pc2 : pat === 'cow' ? pc : fur
  const muzzle = whiteish ? pc : pat === 'pointed' ? pc : pat === 'tortie' ? pc2 : null
  const faceBase = muzzle ?? fur
  const line = luminance(faceBase) < 0.12 ? '#efe7fb' : CAT_INK
  const whisker = luminance(fur) < 0.12 ? '#efe7fb' : CAT_INK
  return { fur, shade, belly, pc, pc2, earL, earR, paw, muzzle, line, whisker }
}

/* ───────────────────────── pattern layers ───────────────────────── */

function headMarks(pat: CatPattern, L: Look, uid: string): ReactNode {
  const sw = stroke(5.5, L.pc)
  switch (pat) {
    case 'tabby':
      return (
        <g {...sw} fill="none">
          <path d="M110 86 Q111 97 112 105 M120 82 L120 103 M130 86 Q129 97 128 105" />
          <path d="M58 128 Q67 131 76 131 M59 141 Q68 142 77 141 M182 128 Q173 131 164 131 M181 141 Q172 142 163 141" strokeWidth={4.5} />
          <path d="M82 96 Q88 100 92 106 M158 96 Q152 100 148 106" strokeWidth={4} />
        </g>
      )
    case 'mackerel':
      return (
        <g {...stroke(3.4, L.pc)} fill="none">
          <path d="M106 84 Q108 94 108 102 M113 81 Q114 93 114 104 M120 80 L120 105 M127 81 Q126 93 126 104 M134 84 Q132 94 132 102" />
          <path d="M58 126 Q67 129 77 129 M57 136 Q67 138 78 138 M59 146 Q68 147 77 147 M182 126 Q173 129 163 129 M183 136 Q173 138 162 138 M181 146 Q172 147 163 147" />
          <path d="M80 94 Q87 98 92 104 M160 94 Q153 98 148 104 M86 90 Q92 94 96 100 M154 90 Q148 94 144 100" />
        </g>
      )
    case 'ticked':
      return (
        <g {...stroke(3, L.pc)} fill="none" opacity={0.8}>
          <path d="M111 88 Q112 96 113 103 M120 85 L120 102 M129 88 Q128 96 127 103" />
          <path d="M80 138 Q72 139 64 136 M160 138 Q168 139 176 136" />
        </g>
      )
    case 'spotted':
      return (
        <g>
          <g {...stroke(3.5, L.pc)} fill="none">
            <path d="M110 86 Q111 96 112 104 M120 82 L120 102 M130 86 Q129 96 128 104" />
            <path d="M80 138 Q72 140 63 137 M160 138 Q168 140 177 137" />
          </g>
          <g fill={L.pc}>
            <circle cx="92" cy="100" r="3.2" /><circle cx="148" cy="100" r="3.2" />
            <circle cx="70" cy="122" r="2.8" /><circle cx="170" cy="122" r="2.8" />
            <circle cx="102" cy="92" r="2.4" /><circle cx="138" cy="92" r="2.4" />
          </g>
        </g>
      )
    case 'tuxedo':
      return (
        <g>
          <path d="M120 124 C113 136 101 143 93 156 C95 174 145 174 147 156 C139 143 127 136 120 124 Z" fill={L.pc} />
          <path d="M92 166 Q120 186 148 166 L148 180 L92 180 Z" fill={L.pc} />
        </g>
      )
    case 'bicolor':
      return (
        <path d="M120 106 C114 124 96 136 74 150 C72 170 90 180 120 180 C150 180 168 170 166 150 C144 136 126 124 120 106 Z" fill={L.pc} />
      )
    case 'calico':
      return (
        <g>
          <path d={blob(76, 96, 38, 30, 3, -20)} fill={L.pc} />
          <path d={blob(162, 94, 32, 24, 7, 15)} fill={L.pc2} />
          <path d={blob(170, 146, 12, 9, 11)} fill={L.pc} />
        </g>
      )
    case 'tortie':
      return (
        <g>
          <path d="M120 78 L120 180 L50 180 L50 78 Z" fill={L.pc} />
          <path d={blob(84, 108, 10, 7, 2)} fill={L.fur} />
          <path d={blob(70, 146, 9, 7, 4)} fill={L.fur} opacity={0.9} />
          <path d={blob(152, 98, 9, 6, 5)} fill={L.pc} />
          <path d={blob(170, 130, 7, 9, 6)} fill={L.pc2} />
          <path d={blob(104, 94, 6, 5, 8)} fill={L.pc2} />
          <ellipse cx="120" cy="160" rx="20" ry="13" fill={L.pc2} />
        </g>
      )
    case 'cow':
      return (
        <g>
          <path d={blob(154, 106, 34, 30, 9, 10)} fill={L.pc} />
          <path d={blob(86, 90, 12, 9, 13)} fill={L.pc} />
        </g>
      )
    case 'pointed':
      return (
        <g>
          <defs>
            <radialGradient id={`${uid}-mask`} cx="120" cy="150" r="54" gradientUnits="userSpaceOnUse" gradientTransform="translate(120 150) scale(1 0.78) translate(-120 -150)">
              <stop offset="0" stopColor={L.pc} stopOpacity="1" />
              <stop offset="0.5" stopColor={L.pc} stopOpacity="0.97" />
              <stop offset="0.72" stopColor={L.pc} stopOpacity="0.55" />
              <stop offset="1" stopColor={L.pc} stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="50" y="90" width="140" height="100" fill={`url(#${uid}-mask)`} />
        </g>
      )
    default:
      return null
  }
}

function bodyUnder(pat: CatPattern, L: Look): ReactNode {
  switch (pat) {
    case 'tabby': {
      const d = 'M60 196 Q78 204 94 194 M56 220 Q76 230 92 220 M56 244 Q72 252 86 246'
      return (
        <g {...stroke(7, L.pc)} fill="none">
          <path d={d} />
          <path d={mirrorX(d)} />
          <path d="M92 168 Q120 180 148 168" strokeWidth={6} />
        </g>
      )
    }
    case 'mackerel': {
      const d = 'M70 180 Q64 196 68 212 M80 176 Q73 196 77 216 M66 222 Q60 238 64 254 M78 226 Q72 242 76 260 M90 170 Q84 188 88 206'
      return (
        <g {...stroke(4.2, L.pc)} fill="none">
          <path d={d} />
          <path d={mirrorX(d)} />
        </g>
      )
    }
    case 'ticked': {
      const pts: [number, number][] = [[70, 196], [66, 214], [72, 232], [64, 248], [80, 184], [78, 252], [86, 176]]
      return (
        <g {...stroke(2.4, L.pc)} opacity={0.55}>
          {pts.flatMap(([x, y], i) => [
            <path key={`a${i}`} d={`M${x} ${y} l3 5`} />,
            <path key={`b${i}`} d={`M${240 - x} ${y} l-3 5`} />,
          ])}
        </g>
      )
    }
    case 'pointed':
      return null
    default:
      return null
  }
}

function bodyOver(pat: CatPattern, L: Look, uid: string, pose: CatPose): ReactNode {
  const legBars = (w: number) => (
    <g {...stroke(w, L.pc)} fill="none">
      <path d="M96 238 Q102 240 110 238 M95 251 Q102 253 110 251" />
      {pose === 'sit' && <path d="M130 238 Q138 240 144 238 M130 251 Q138 253 145 251" />}
    </g>
  )
  switch (pat) {
    case 'tabby':
      return legBars(4.5)
    case 'mackerel':
      return legBars(3.4)
    case 'spotted': {
      const ros: [number, number, number][] = [
        [74, 204, 7], [68, 234, 8], [86, 222, 5], [166, 204, 7], [172, 234, 8], [154, 222, 5],
        [80, 186, 5], [160, 186, 5], [106, 248, 4], [134, 248, 4], [120, 200, 4], [110, 226, 3.5], [130, 226, 3.5], [74, 258, 5], [166, 258, 5],
      ]
      return (
        <g>
          {ros.map(([x, y, r], i) => (
            <ellipse key={i} cx={x} cy={y} rx={r + 1} ry={r} fill={L.pc2} stroke={L.pc} strokeWidth={r > 4.5 ? 3 : 2.5} strokeDasharray={r > 4.5 ? '9 3' : undefined} />
          ))}
        </g>
      )
    }
    case 'calico':
      return (
        <g>
          <path d={blob(74, 214, 26, 36, 21, 8)} fill={L.pc} />
          <path d={blob(170, 238, 22, 30, 22, -6)} fill={L.pc2} />
          <path d={blob(152, 186, 13, 9, 23)} fill={L.pc} />
          <path d={blob(96, 262, 9, 6, 24)} fill={L.pc2} />
        </g>
      )
    case 'tortie':
      return (
        <g>
          <path d={blob(84, 198, 16, 22, 31)} fill={L.pc} />
          <path d={blob(150, 222, 18, 14, 32)} fill={L.pc} />
          <path d={blob(102, 246, 13, 9, 33)} fill={L.pc2} />
          <path d={blob(172, 250, 10, 15, 34)} fill={L.pc} />
          <path d={blob(124, 196, 8, 6, 35)} fill={L.pc2} />
          <path d={blob(70, 244, 8, 12, 36)} fill={L.pc2} />
          <g fill={L.pc2}>
            <circle cx="138" cy="206" r="2.5" /><circle cx="96" cy="222" r="2" /><circle cx="160" cy="194" r="2.2" />
          </g>
        </g>
      )
    case 'cow':
      return (
        <g>
          <path d={blob(76, 234, 28, 34, 41, 10)} fill={L.pc} />
          <path d={blob(150, 194, 15, 12, 42)} fill={L.pc} />
          <path d={blob(166, 258, 16, 12, 43)} fill={L.pc} />
        </g>
      )
    case 'pointed':
      return (
        <g>
          <defs>
            <linearGradient id={`${uid}-legs`} x1="0" y1="228" x2="0" y2="258" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor={L.pc} stopOpacity="0" />
              <stop offset="1" stopColor={L.pc} stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <rect x="50" y="222" width="140" height="56" fill={`url(#${uid}-legs)`} />
        </g>
      )
    default:
      return null
  }
}

function TailDecor({ pat, L, d, w }: { pat: CatPattern; L: Look; d: string; w: number }) {
  const band = (color: string, dash: string, cap: 'butt' | 'round' = 'butt') => (
    <path d={d} pathLength={100} fill="none" stroke={color} strokeWidth={w} strokeDasharray={dash} strokeLinecap={cap} />
  )
  switch (pat) {
    case 'tabby':
    case 'spotted':
      return <>{band(L.pc, '0 14 7 8 7 8 7 8 7 8 7 8 7 100')}{band(L.pc, '0 94 6', 'round')}</>
    case 'mackerel':
      return <>{band(L.pc, '0 12 4 6 4 6 4 6 4 6 4 6 4 6 4 6 4 100')}{band(L.pc, '0 94 6', 'round')}</>
    case 'ticked':
      return band(L.pc, '0 88 12', 'round')
    case 'calico':
      return <>{band(L.pc, '0 20 34 100')}{band(L.pc2, '0 54 46', 'round')}</>
    case 'tortie':
      return <>{band(L.pc, '0 22 14 18 10 100')}{band(L.pc2, '0 74 6 100')}</>
    case 'cow':
      return <>{band(L.pc, '0 18 72 100')}</>
    case 'pointed':
      return <>{band(mix(L.fur, L.pc, 0.5), '0 14 12 100')}{band(L.pc, '0 26 74', 'round')}</>
    default:
      return null
  }
}

/* ───────────────────────── face ───────────────────────── */

function Eye({ c, color, kind, side, uid, line }: { c: Pt; color: string; kind: 'open' | 'wide' | 'lid-smug' | 'lid-sleepy' | 'lid-det' | 'closed-happy' | 'closed-serene'; side: 'L' | 'R'; uid: string; line: string }) {
  const { x, y } = c
  if (kind === 'closed-happy') return <path d={`M${x - 11} ${y + 4} Q${x} ${y - 9} ${x + 11} ${y + 4}`} fill="none" {...stroke(3.5, line)} />
  if (kind === 'closed-serene')
    return (
      <g fill="none" {...stroke(3.2, line)}>
        <path d={`M${x - 11} ${y} Q${x} ${y + 9} ${x + 11} ${y}`} />
        <path d={side === 'L' ? `M${x - 11} ${y} l-4 -3` : `M${x + 11} ${y} l4 -3`} strokeWidth={2.4} />
      </g>
    )
  const wide = kind === 'wide'
  const rx = wide ? 13 : 12.5
  const ry = wide ? 14.5 : 14
  const iris = (
    <>
      <ellipse cx={x} cy={y} rx={rx} ry={ry} fill={color} />
      <ellipse cx={x} cy={y + 5} rx={rx - 3.5} ry={ry - 7} fill={mix(color, '#ffffff', 0.45)} opacity={0.7} />
      {wide ? <ellipse cx={x} cy={y + 1} rx={4} ry={5.5} fill={CAT_INK} /> : <ellipse cx={x} cy={y + 1} rx={7} ry={10} fill={CAT_INK} />}
      <circle cx={x - 4} cy={y - 5} r={wide ? 4.6 : 4.4} fill="#fff" />
      <circle cx={x + 4.5} cy={y + 5.5} r={2} fill="#fff" />
    </>
  )
  if (kind === 'open' || wide)
    return (
      <g>
        {iris}
        <ellipse cx={x} cy={y} rx={rx} ry={ry} fill="none" stroke={CAT_INK} strokeWidth={2.6} />
      </g>
    )
  // lidded eyes: clip the iris below a lid line (outer/inner heights relative to eye centre)
  const inner = side === 'L' ? 1 : -1 // direction towards the face centre
  const [outerY, innerY, bulge] =
    kind === 'lid-smug' ? [y - 5, y - 3.5, 1.5] : kind === 'lid-sleepy' ? [y + 4, y + 4, -2.5] : /* det */ [y - 12, y - 3, 0]
  const xo = x - inner * 15
  const xi = x + inner * 15
  const cy = (outerY + innerY) / 2 + bulge * 2
  const clipId = `${uid}-lid${side}`
  const k = 13.5 / 15
  const lo = { x: x - inner * 13.5, y: cy + (outerY - cy) * k * k }
  const li = { x: x + inner * 13.5, y: cy + (innerY - cy) * k * k }
  return (
    <g>
      <defs>
        <clipPath id={clipId}>
          <path d={`M${xo} ${outerY} Q${x} ${cy} ${xi} ${innerY} L${xi} ${y + 20} L${xo} ${y + 20} Z`} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        {iris}
        <ellipse cx={x} cy={y} rx={rx} ry={ry} fill="none" stroke={CAT_INK} strokeWidth={2.6} />
      </g>
      <path d={`M${lo.x} ${lo.y} Q${x} ${cy} ${li.x} ${li.y}`} fill="none" {...stroke(3.2)} />
      {kind === 'lid-sleepy' && <path d={side === 'L' ? `M${lo.x} ${lo.y} l-3.5 2.5` : `M${lo.x} ${lo.y} l3.5 2.5`} {...stroke(2.4)} />}
    </g>
  )
}

function Face({ p, L, uid }: { p: CatProps; L: Look; uid: string }) {
  const ex = p.expression ?? 'smile'
  const eyeL = p.eyeColor ?? '#8fd16a'
  const eyeR = p.eyeColor2 ?? eyeL
  type K = Parameters<typeof Eye>[0]['kind']
  const kinds: Record<CatExpression, [K, K]> = {
    smile: ['open', 'open'],
    happy: ['closed-happy', 'closed-happy'],
    wink: ['open', 'closed-happy'],
    sleepy: ['lid-sleepy', 'lid-sleepy'],
    surprised: ['wide', 'wide'],
    smug: ['lid-smug', 'lid-smug'],
    determined: ['lid-det', 'lid-det'],
    serene: ['closed-serene', 'closed-serene'],
  }
  const [kl, kr] = kinds[ex]
  const ln = L.line
  const omega = 'M109 155 Q114.5 162 120 156 Q125.5 162 131 155'
  let mouth: ReactNode
  switch (ex) {
    case 'happy':
      mouth = (
        <g>
          <path d="M110 156 Q120 159 130 156 C130 170 110 170 110 156 Z" fill="#c9456b" {...stroke(2.2)} />
          <path d="M113.5 163.5 Q120 159 126.5 163.5 Q124 168 120 168 Q116 168 113.5 163.5 Z" fill={PINK} />
          <path d={omega} fill="none" {...stroke(2.2, ln)} />
        </g>
      )
      break
    case 'surprised':
      mouth = <ellipse cx="120" cy="162" rx="4.5" ry="5.5" fill="#c9456b" {...stroke(2.2)} />
      break
    case 'smug':
      mouth = <path d="M108 156 Q114 161 120 156 Q127 159 134 151" fill="none" {...stroke(2.2, ln)} />
      break
    case 'sleepy':
      mouth = <path d="M113 156 Q116.5 160 120 156.5 Q123.5 160 127 156" fill="none" {...stroke(2, ln)} />
      break
    case 'determined':
      mouth = (
        <g>
          <path d="M125 156.5 L127.5 162 L130 156" fill="#fff" {...stroke(1.6)} />
          <path d={omega} fill="none" {...stroke(2.2, ln)} />
        </g>
      )
      break
    case 'wink':
      mouth = (
        <g>
          <path d="M116 157.5 Q120 167 124 157.5 Z" fill={PINK} {...stroke(1.8)} />
          <path d={omega} fill="none" {...stroke(2.2, ln)} />
        </g>
      )
      break
    default:
      mouth = <path d={omega} fill="none" {...stroke(2.2, ln)} />
  }
  const brows =
    ex === 'determined' ? (
      <path d="M87 112 L102 116.5 M153 112 L138 116.5" fill="none" {...stroke(3, ln)} />
    ) : ex === 'surprised' ? (
      <path d="M89 110 Q96 105 103 109 M137 109 Q144 105 151 110" fill="none" {...stroke(2.6, ln)} />
    ) : ex === 'smug' ? (
      <path d="M137 113 Q145 108 153 112" fill="none" {...stroke(2.6, ln)} />
    ) : null
  const blush = p.blush === false ? null : p.blush ?? PINK
  return (
    <g>
      {blush && (
        <g fill={blush} opacity={0.6}>
          <ellipse cx="79" cy="153" rx="9.5" ry="5.5" />
          <ellipse cx="161" cy="153" rx="9.5" ry="5.5" />
        </g>
      )}
      <Eye c={EYE_L} color={eyeL} kind={kl} side="L" uid={uid} line={ln} />
      <Eye c={EYE_R} color={eyeR} kind={kr} side="R" uid={uid} line={ln} />
      {brows}
      <g fill="none" {...stroke(1.7, L.whisker)} opacity={0.9}>
        <path d="M80 151 Q68 148 54 149 M80 156 Q68 157 53 160 M81 161 Q71 165 58 170" />
        <path d="M160 151 Q172 148 186 149 M160 156 Q172 157 187 160 M159 161 Q169 165 182 170" />
      </g>
      {mouth}
      <path d="M113 146 Q120 142 127 146 Q126 151 120 153 Q114 151 113 146 Z" fill={p.noseColor ?? '#ff8fae'} {...stroke(2)} />
      <path d="M116.5 146 Q118 145 119.5 145.3" fill="none" stroke="#fff" strokeWidth={1.4} strokeLinecap="round" opacity={0.8} />
      <path d="M120 153 L120 156" {...stroke(2.2, ln)} />
    </g>
  )
}

/* ───────────────────────── paws ───────────────────────── */

function GroundPaw({ x, color }: { x: number; color: string }) {
  return (
    <g>
      <ellipse cx={x} cy="267" rx="14.5" ry="8.5" fill={color} {...stroke(3)} />
      <path d={`M${x - 4.5} 263 L${x - 4.5} 268.5 M${x + 4.5} 263 L${x + 4.5} 268.5`} {...stroke(2)} />
    </g>
  )
}

function RaisedPaw({ c, color }: { c: Pt; color: string }) {
  return (
    <g>
      <circle cx={c.x} cy={c.y} r="12.5" fill={color} {...stroke(3)} />
      <g fill={PINK}>
        <ellipse cx={c.x} cy={c.y + 3.2} rx="5.2" ry="4.2" />
        <circle cx={c.x - 5.6} cy={c.y - 3.6} r="2.3" />
        <circle cx={c.x} cy={c.y - 6.2} r="2.3" />
        <circle cx={c.x + 5.6} cy={c.y - 3.6} r="2.3" />
      </g>
    </g>
  )
}

/* ───────────────────────── the cat ───────────────────────── */

export function Cat(props: CatProps) {
  const auto = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const uid = props.uid ?? `cat${auto}`
  const pat = props.pattern ?? 'solid'
  const pose = props.pose ?? 'sit'
  const tail = TAILS[props.tail ?? 'curl']
  const ears = props.ears ?? 'normal'
  const long = !!props.longHair
  const L = resolveLook(props)
  const m = matrices(props)
  const head = long ? HEAD_LONG : HEAD
  const body = long ? BODY_LONG : BODY
  const tailW = long ? 21 : 15
  const armW = 18

  const earShape = (fill: string, side: 'L' | 'R') => (
    <g transform={side === 'R' ? css(MIRROR) : undefined}>
      <path d={EAR} fill={fill} {...stroke(3)} />
      {ears === 'tufted' && <path d={EAR_TUFT} fill={pat === 'pointed' ? L.pc : mix(L.fur, CAT_INK, 0.35)} {...stroke(1.8)} />}
      <path d={EAR_INNER} fill={INNER_EAR} />
      {ears === 'tufted' && <path d="M79 99 Q80 90 86 83 M86 100 Q89 93 95 89" fill="none" {...stroke(2, '#fffaf3')} opacity={0.9} />}
    </g>
  )
  const foldShape = (fill: string, side: 'L' | 'R') => (
    <g transform={side === 'R' ? css(MIRROR) : undefined}>
      <path d={EAR_FOLD} fill={fill} {...stroke(2.6)} />
      <path d="M82 99 Q92 94 101 87" fill="none" {...stroke(1.8)} opacity={0.55} />
    </g>
  )
  const arms: { d: string; paw: Pt }[] =
    pose === 'paw-up' ? [{ d: ARM_R, paw: RAISED_R }] : pose === 'paws-up' ? [{ d: ARM_L, paw: RAISED_L }, { d: ARM_R, paw: RAISED_R }] : []
  const groundPaws = pose === 'paws-up' ? [] : pose === 'paw-up' ? [105] : [105, 135]
  const armColor = pat === 'pointed' ? mix(L.fur, L.pc, 0.45) : pat === 'bicolor' ? L.pc : L.fur

  return (
    <g transform={css(m.outer)}>
      {props.behind}
      {props.shadow !== false && <ellipse cx="120" cy={CAT_GROUND + 2} rx={long ? 70 : 64} ry="7" fill="#0e0a1c" opacity={0.22} />}

      {props.rim && (
        <g fill={props.rim} color={props.rim} stroke={props.rim} strokeWidth={9} strokeLinejoin="round" opacity={0.45}>
          <g transform={css(m.body)}>
            <path d={tail.d} fill="none" strokeWidth={tailW + 16} strokeLinecap="round" />
            {arms.map((a, i) => <path key={i} d={a.d} fill="none" strokeWidth={armW + 16} strokeLinecap="round" />)}
            <path d={body} />
          </g>
          <g transform={css(m.head)}>
            <path d={EAR} />
            <path d={EAR} transform={css(MIRROR)} />
            <path d={head} />
          </g>
        </g>
      )}
      {/* ── body space ── */}
      <g transform={css(m.body)}>
        <defs>
          <clipPath id={`${uid}-bc`}>
            <path d={body} />
          </clipPath>
        </defs>
        {/* tail (behind body) */}
        <Tube d={tail.d} w={tailW} color={L.fur} />
        <TailDecor pat={pat} L={L} d={tail.d} w={tailW} />
        {/* arm outlines behind body */}
        {arms.map((a, i) => <path key={i} d={a.d} fill="none" {...stroke(armW + 6)} />)}
        {/* body */}
        <path d={body} fill={L.fur} />
        <g clipPath={`url(#${uid}-bc)`}>
          {bodyUnder(pat, L)}
          <ellipse cx="120" cy={pat === 'bicolor' ? 226 : 222} rx={pat === 'bicolor' ? 40 : pat === 'tuxedo' ? 30 : 29} ry={pat === 'bicolor' ? 58 : 50} fill={L.belly} />
          {bodyOver(pat, L, uid, pose)}
          <ellipse cx="120" cy="170" rx="42" ry="11" fill={L.shade} opacity={0.35} />
        </g>
        <path d={body} fill="none" {...stroke(3)} />
        {/* leg + haunch details */}
        <g fill="none" {...stroke(2)} opacity={0.85}>
          <path d="M77 226 C88 234 93 250 89 268" />
          <path d="M163 226 C152 234 147 250 151 268" />
          {pose === 'sit' && <path d="M120 238 L120 262" />}
        </g>
        {groundPaws.map((x) => <GroundPaw key={x} x={x} color={L.paw} />)}
        {long && (
          <path
            d="M86 164 C88 178 90 186 94 192 C97 188 99 186 101 186 C103 194 106 199 110 202 C113 196 116 194 120 194 C124 194 127 196 130 202 C134 199 137 194 139 186 C141 186 143 188 146 192 C150 186 152 178 154 164 Z"
            fill={mix(L.belly, WHITE, 0.25)}
            {...stroke(2)}
          />
        )}
        {props.collar && (
          <g>
            <path d="M88 176 Q120 196 152 176" fill="none" {...stroke(11)} />
            <path d="M88 176 Q120 196 152 176" fill="none" {...stroke(6, props.collar)} />
            {props.bell && (
              <g>
                <circle cx="120" cy="193" r="7" fill="#f2c66d" {...stroke(2.4)} />
                <path d="M114 192 L126 192 M120 195 L120 199" {...stroke(1.6)} />
                <circle cx="117.5" cy="190" r="1.6" fill="#fff" opacity={0.85} />
              </g>
            )}
          </g>
        )}
        {/* raised arms (fill over body, outline was drawn behind) */}
        {arms.map((a, i) => (
          <g key={i}>
            <path d={a.d} fill="none" {...stroke(armW, armColor)} />
          </g>
        ))}
        {props.held}
        {arms.map((a, i) => <RaisedPaw key={i} c={a.paw} color={L.paw} />)}
      </g>

      {/* ── head space ── */}
      <g transform={css(m.head)}>
        <defs>
          <clipPath id={`${uid}-hc`}>
            <path d={head} />
          </clipPath>
        </defs>
        {ears !== 'folded' && earShape(L.earL, 'L')}
        {ears !== 'folded' && earShape(L.earR, 'R')}
        <path d={head} fill={L.fur} />
        <g clipPath={`url(#${uid}-hc)`}>
          {headMarks(pat, L, uid)}
          <ellipse cx="98" cy="96" rx="18" ry="8" fill="#fff" opacity={0.16} transform="rotate(-18 98 96)" />
        </g>
        <path d={head} fill="none" {...stroke(3)} />
        {ears === 'folded' && foldShape(L.earL, 'L')}
        {ears === 'folded' && foldShape(L.earR, 'R')}
        <Face p={props} L={L} uid={uid} />
      </g>
      {props.front}
    </g>
  )
}

export default Cat
