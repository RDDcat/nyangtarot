// Reusable SVG props for the tarot scenes, in the same flat style as <Cat>.
// Every prop draws around its own local origin and takes x / y / scale / rotate (+ colours).
// See docs/ART.md for each prop's origin and size. No fixed ids, no Math.random.
import type { ReactNode } from 'react'

/** Palette — mirrors src/styles/tokens.css (+ a few art-only tones). */
export const PAL = {
  ink: '#2b2140',
  inkSoft: '#5d5078',
  night950: '#0e0a1c',
  night900: '#140f26',
  night800: '#1e1638',
  night700: '#2a1f4d',
  night600: '#3a2c66',
  violet500: '#7b5cd6',
  violet300: '#b9a4f5',
  gold500: '#e0ac4a',
  gold400: '#f2c66d',
  gold300: '#f7dc9c',
  paper: '#fff7ea',
  paper2: '#f6ead3',
  pink400: '#ff7c9c',
  pink300: '#ff9fb8',
  mint300: '#8fe3cf',
  sky300: '#9cd3ff',
  white: '#fffaf3',
  // art-only helpers
  grass: '#7fcf8e',
  grassDark: '#4fa77a',
  wood: '#b07a4f',
  stone: '#d9d0e8',
  cardboard: '#d9a066',
} as const

const INK = PAL.ink

export interface PlaceProps {
  x?: number
  y?: number
  scale?: number
  rotate?: number
  opacity?: number
}

function Place({ x = 0, y = 0, scale = 1, rotate = 0, opacity, children }: PlaceProps & { children: ReactNode }) {
  const t = [`translate(${x} ${y})`, rotate ? `rotate(${rotate})` : '', scale !== 1 ? `scale(${scale})` : ''].join(' ').trim()
  return (
    <g transform={t} opacity={opacity}>
      {children}
    </g>
  )
}

const line = (w = 2.5, color: string = INK) => ({
  stroke: color, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
})
const ol = (on: boolean, w = 2.5) => (on ? line(w) : {})

/** Deterministic PRNG (mulberry32). Use instead of Math.random. */
export function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Smooth closed blob path around (cx, cy) — bushes, patches, puddles. Deterministic per seed. */
export function blobPath(cx: number, cy: number, rx: number, ry: number, seed = 1, wobble = 0.18, n = 8): string {
  const r = rng(seed)
  const pts = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2
    const k = 1 - wobble + r() * wobble * 2
    return [cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]
  })
  let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n]
    d += ` C${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(1)} ${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(1)} ${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(1)} ${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`
  }
  return d + 'Z'
}

/* ───────────── sky ───────────── */

/** 4-point twinkle. Origin = centre, `size` = half the span. */
export function Sparkle({ size = 8, color = PAL.gold300, outline = false, ...p }: PlaceProps & { size?: number; color?: string; outline?: boolean }) {
  const s = size
  const k = s * 0.16
  return (
    <Place {...p}>
      <path d={`M0 ${-s} C${k} ${-k} ${k} ${-k} ${s} 0 C${k} ${k} ${k} ${k} 0 ${s} C${-k} ${k} ${-k} ${k} ${-s} 0 C${-k} ${-k} ${-k} ${-k} 0 ${-s} Z`} fill={color} {...ol(outline, 1.8)} />
    </Place>
  )
}

/** n-point star with rounded joins. Origin = centre, `r` = outer radius. */
export function Star({ r = 12, points = 5, inner = 0.48, color = PAL.gold400, outline = true, ...p }: PlaceProps & { r?: number; points?: number; inner?: number; color?: string; outline?: boolean }) {
  const pts: string[] = []
  for (let i = 0; i < points * 2; i++) {
    const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2
    const rr = i % 2 ? r * inner : r
    pts.push(`${(Math.cos(a) * rr).toFixed(2)},${(Math.sin(a) * rr).toFixed(2)}`)
  }
  return (
    <Place {...p}>
      <polygon points={pts.join(' ')} fill={color} {...ol(outline, r > 10 ? 2.5 : 2)} />
      {r >= 10 && <circle cx={-r * 0.18} cy={-r * 0.22} r={r * 0.12} fill="#fff" opacity={0.6} />}
    </Place>
  )
}

/** Crescent moon opening to the right (rotate to orient). Origin = centre of the full disc, `r` = radius. */
export function Crescent({ r = 20, cut = 0.55, color = PAL.gold300, outline = true, ...p }: PlaceProps & { r?: number; cut?: number; color?: string; outline?: boolean }) {
  const d = r * cut * 1.1
  const h = Math.sqrt(r * r - (d / 2) ** 2)
  return (
    <Place {...p}>
      <path d={`M${d / 2} ${-h} A${r} ${r} 0 1 0 ${d / 2} ${h} A${r} ${r} 0 0 1 ${d / 2} ${-h} Z`} fill={color} {...ol(outline)} />
      <circle cx={-r * 0.55} cy={r * 0.1} r={r * 0.09} fill={INK} opacity={0.12} />
      <circle cx={-r * 0.35} cy={-r * 0.45} r={r * 0.06} fill={INK} opacity={0.12} />
    </Place>
  )
}

/** Sun disc with rounded rays. Origin = centre, `r` = disc radius (rays reach ≈ 1.6r). */
export function Sun({ r = 22, rays = 12, color = PAL.gold400, rayColor = PAL.gold300, face = false, ...p }: PlaceProps & { r?: number; rays?: number; color?: string; rayColor?: string; face?: boolean }) {
  return (
    <Place {...p}>
      {Array.from({ length: rays }, (_, i) => {
        const a = (i / rays) * 360
        const long = i % 2 === 0
        return (
          <path key={i} transform={`rotate(${a})`} d={`M${-r * 0.16} ${-r * 1.12} L0 ${-(long ? r * 1.62 : r * 1.4)} L${r * 0.16} ${-r * 1.12} Z`} fill={rayColor} {...line(2)} />
        )
      })}
      <circle r={r} fill={color} {...line(2.5)} />
      <circle cx={-r * 0.35} cy={-r * 0.4} r={r * 0.22} fill="#fff" opacity={0.35} />
      {face && (
        <g>
          <path d={`M${-r * 0.45} ${-r * 0.05} q${r * 0.13} ${-r * 0.2} ${r * 0.26} 0 M${r * 0.19} ${-r * 0.05} q${r * 0.13} ${-r * 0.2} ${r * 0.26} 0`} fill="none" {...line(2)} />
          <path d={`M${-r * 0.2} ${r * 0.25} q${r * 0.2} ${r * 0.22} ${r * 0.4} 0`} fill="none" {...line(2)} />
          <circle cx={-r * 0.55} cy={r * 0.22} r={r * 0.13} fill={PAL.pink300} opacity={0.7} />
          <circle cx={r * 0.55} cy={r * 0.22} r={r * 0.13} fill={PAL.pink300} opacity={0.7} />
        </g>
      )}
    </Place>
  )
}

/** Puffy cloud, ≈100×46 at scale 1. Origin = bottom centre. */
export function Cloud({ color = PAL.white, shade = '#e6def5', outline = true, ...p }: PlaceProps & { color?: string; shade?: string; outline?: boolean }) {
  const d = 'M-40 0 C-56 0 -58 -20 -42 -23 C-44 -38 -24 -44 -14 -34 C-10 -50 16 -52 22 -34 C34 -42 52 -32 46 -18 C58 -16 58 0 44 0 Z'
  return (
    <Place {...p}>
      <path d={d} fill={color} />
      <path d="M-44 -2 C-30 -8 -10 -4 0 -8 C12 -3 30 -8 44 -3 L44 0 L-44 0 Z" fill={shade} />
      <path d={d} fill="none" {...ol(outline)} />
    </Place>
  )
}

/** Deterministic star sprinkle for a night sky. Covers x..x+w, y..y+h. Same seed → same sky. */
export function Starfield({ w = 240, h = 300, x = 0, y = 0, count = 36, seed = 7, color = PAL.gold300, sparkles = 5, minR = 0.6, maxR = 1.8, opacity = 1 }: {
  w?: number; h?: number; x?: number; y?: number; count?: number; seed?: number; color?: string; sparkles?: number; minR?: number; maxR?: number; opacity?: number
}) {
  const r = rng(seed)
  const dots = Array.from({ length: count }, () => ({ cx: x + r() * w, cy: y + r() * h, rr: minR + r() * (maxR - minR), o: 0.45 + r() * 0.55 }))
  const sp = Array.from({ length: sparkles }, () => ({ cx: x + 8 + r() * (w - 16), cy: y + 8 + r() * (h - 16), s: 3.5 + r() * 3.5 }))
  return (
    <g opacity={opacity}>
      {dots.map((d, i) => <circle key={i} cx={d.cx.toFixed(1)} cy={d.cy.toFixed(1)} r={d.rr.toFixed(2)} fill={color} opacity={d.o.toFixed(2)} />)}
      {sp.map((s, i) => <Sparkle key={`s${i}`} x={+s.cx.toFixed(1)} y={+s.cy.toFixed(1)} size={+s.s.toFixed(1)} color={color} />)}
    </g>
  )
}

/* ───────────── cute motifs ───────────── */

/** Paw print ≈ 24×24 at scale 1. Origin = centre of the main pad. */
export function PawPrint({ color = PAL.pink300, outline = false, ...p }: PlaceProps & { color?: string; outline?: boolean }) {
  const o = ol(outline, 1.6)
  return (
    <Place {...p}>
      <path d="M0 -2 C6 -2 10 4 10 8 C10 12 6 12 0 11 C-6 12 -10 12 -10 8 C-10 4 -6 -2 0 -2 Z" fill={color} {...o} />
      <ellipse cx="-10" cy="-6" rx="3.4" ry="4.2" transform="rotate(-20 -10 -6)" fill={color} {...o} />
      <ellipse cx="-3.8" cy="-11" rx="3.4" ry="4.4" transform="rotate(-6 -3.8 -11)" fill={color} {...o} />
      <ellipse cx="3.8" cy="-11" rx="3.4" ry="4.4" transform="rotate(6 3.8 -11)" fill={color} {...o} />
      <ellipse cx="10" cy="-6" rx="3.4" ry="4.2" transform="rotate(20 10 -6)" fill={color} {...o} />
    </Place>
  )
}

/** Heart ≈ 24×22. Origin = centre. */
export function Heart({ color = PAL.pink400, outline = true, ...p }: PlaceProps & { color?: string; outline?: boolean }) {
  return (
    <Place {...p}>
      <path d="M0 10 C-4 6 -12 1 -12 -5 C-12 -10 -8 -12 -5 -12 C-2 -12 0 -9 0 -7 C0 -9 2 -12 5 -12 C8 -12 12 -10 12 -5 C12 1 4 6 0 10 Z" fill={color} {...ol(outline)} />
      <ellipse cx="-6" cy="-6" rx="2.6" ry="1.8" transform="rotate(-30 -6 -6)" fill="#fff" opacity={0.6} />
    </Place>
  )
}

/** Simple flower. Origin = centre, petals reach ≈ r*1.9. */
export function Flower({ r = 6, petals = 5, color = PAL.pink300, center = PAL.gold400, outline = true, ...p }: PlaceProps & { r?: number; petals?: number; color?: string; center?: string; outline?: boolean }) {
  return (
    <Place {...p}>
      {Array.from({ length: petals }, (_, i) => (
        <ellipse key={i} cx="0" cy={-r} rx={r * 0.72} ry={r} transform={`rotate(${(i / petals) * 360})`} fill={color} {...ol(outline, 1.8)} />
      ))}
      <circle r={r * 0.62} fill={center} {...ol(outline, 1.8)} />
    </Place>
  )
}

/** Leaf pointing up. Origin = stem base, length ≈ 28 at scale 1. */
export function Leaf({ color = PAL.grass, vein = PAL.grassDark, outline = true, ...p }: PlaceProps & { color?: string; vein?: string; outline?: boolean }) {
  return (
    <Place {...p}>
      <path d="M0 0 C-12 -8 -10 -22 0 -28 C10 -22 12 -8 0 0 Z" fill={color} {...ol(outline, 2)} />
      <path d="M0 -2 L0 -22 M0 -10 L-4 -14 M0 -15 L4 -19" fill="none" {...line(1.4, vein)} />
    </Place>
  )
}

/** Yarn ball with trailing thread. Origin = centre, `r` = radius. */
export function YarnBall({ r = 14, color = PAL.pink300, thread = true, ...p }: PlaceProps & { r?: number; color?: string; thread?: boolean }) {
  const dk = 'rgba(43,33,64,0.35)'
  return (
    <Place {...p}>
      {thread && <path d={`M${r * 0.7} ${r * 0.7} C${r * 1.6} ${r * 1.4} ${r * 2.2} ${r * 0.6} ${r * 2.8} ${r * 1.1}`} fill="none" {...line(2.2, color)} />}
      <circle r={r} fill={color} {...line(2.5)} />
      <g fill="none" {...line(1.6, dk)}>
        <path d={`M${-r * 0.8} ${-r * 0.4} Q0 ${-r * 0.1} ${r * 0.6} ${-r * 0.8}`} />
        <path d={`M${-r * 0.9} ${r * 0.1} Q${r * 0.1} ${r * 0.2} ${r * 0.85} ${-r * 0.45}`} />
        <path d={`M${-r * 0.6} ${r * 0.7} Q${r * 0.3} ${r * 0.5} ${r * 0.9} ${r * 0.1}`} />
        <path d={`M${-r * 0.2} ${-r * 0.95} Q${-r * 0.5} 0 ${-r * 0.1} ${r * 0.95}`} />
      </g>
    </Place>
  )
}

/** Fish facing right, ≈ 44×22. Origin = centre. */
export function Fish({ color = PAL.sky300, fin = '#6fb2ec', ...p }: PlaceProps & { color?: string; fin?: string }) {
  return (
    <Place {...p}>
      <path d="M-14 0 L-24 -9 C-25 -3 -25 3 -24 9 Z" fill={fin} {...line(2.2)} />
      <path d="M-16 0 C-10 -12 12 -13 20 0 C12 13 -10 12 -16 0 Z" fill={color} {...line(2.5)} />
      <path d="M2 -6 C0 -2 0 2 2 6" fill="none" {...line(1.8)} />
      <circle cx="11" cy="-2" r="2" fill={INK} />
      <path d="M-8 -3 q2 3 0 6" fill="none" {...line(1.4, 'rgba(43,33,64,0.4)')} />
    </Place>
  )
}

/** Mug of milk with a paw emblem, ≈ 30×30. Origin = bottom centre. */
export function MilkCup({ color = PAL.paper, milk = '#ffffff', emblem = PAL.pink300, ...p }: PlaceProps & { color?: string; milk?: string; emblem?: string }) {
  return (
    <Place {...p}>
      <path d="M11 -22 C20 -22 20 -8 11 -8" fill="none" {...line(6)} />
      <path d="M11 -22 C20 -22 20 -8 11 -8" fill="none" {...line(2.5, color)} />
      <path d="M-13 -28 L13 -28 L11 -3 C11 -1 9 0 7 0 L-7 0 C-9 0 -11 -1 -11 -3 Z" fill={color} {...line(2.5)} />
      <ellipse cx="0" cy="-27" rx="12" ry="3" fill={milk} {...line(2)} />
      <PawPrint x={0} y={-12} scale={0.42} color={emblem} />
    </Place>
  )
}

/** Crown ≈ 44×30. Origin = bottom centre. */
export function Crown({ color = PAL.gold400, gem = PAL.pink400, ...p }: PlaceProps & { color?: string; gem?: string }) {
  return (
    <Place {...p}>
      <path d="M-20 0 L-22 -24 L-10 -12 L0 -30 L10 -12 L22 -24 L20 0 Z" fill={color} {...line(2.5)} />
      <path d="M-20 -6 L20 -6" {...line(2)} />
      <circle cx="0" cy="-15" r="3.2" fill={gem} {...line(1.6)} />
      <circle cx="-22" cy="-25" r="2.6" fill={color} {...line(1.6)} />
      <circle cx="0" cy="-31" r="2.6" fill={color} {...line(1.6)} />
      <circle cx="22" cy="-25" r="2.6" fill={color} {...line(1.6)} />
      <path d="M-14 -3 L-6 -3" {...line(1.6, '#fff')} opacity={0.6} />
    </Place>
  )
}

/** Magic wand with a star tip, pointing up. Origin = grip (put it at a raised paw), length ≈ 62. */
export function Wand({ color = PAL.night700, tip = PAL.gold400, ...p }: PlaceProps & { color?: string; tip?: string }) {
  return (
    <Place {...p}>
      <path d="M0 10 L0 -44" {...line(9)} />
      <path d="M0 10 L0 -44" {...line(4, color)} />
      <path d="M0 -36 L0 -44" {...line(4, PAL.white)} />
      <Star y={-52} r={11} color={tip} />
      <Sparkle x={-14} y={-64} size={4} color={PAL.gold300} />
      <Sparkle x={13} y={-40} size={3} color={PAL.gold300} />
    </Place>
  )
}

/** Rolling hill with grass tufts. Origin = crest centre; fills down to y+depth. `w` = width. */
export function Hill({ w = 300, depth = 80, color = PAL.grass, tufts = PAL.grassDark, outline = true, flowers = 0, seed = 3, ...p }: PlaceProps & { w?: number; depth?: number; color?: string; tufts?: string; outline?: boolean; flowers?: number; seed?: number }) {
  const hw = w / 2
  const r = rng(seed)
  return (
    <Place {...p}>
      <path d={`M${-hw} ${depth * 0.35} C${-hw * 0.5} ${-depth * 0.04} ${hw * 0.5} ${-depth * 0.04} ${hw} ${depth * 0.35} L${hw} ${depth} L${-hw} ${depth} Z`} fill={color} {...ol(outline)} />
      {Array.from({ length: 7 }, (_, i) => {
        const tx = -hw * 0.75 + (i / 6) * hw * 1.5 + (r() - 0.5) * 14
        const ty = depth * 0.12 + Math.abs(tx / hw) ** 2 * depth * 0.24 + 6 + r() * 10
        return <path key={i} d={`M${(tx - 5).toFixed(1)} ${ty.toFixed(1)} l2.5 -6 l2.5 5 l2.5 -7 l2.5 8`} fill="none" {...line(1.8, tufts)} />
      })}
      {Array.from({ length: flowers }, (_, i) => {
        const fx = -hw * 0.8 + r() * hw * 1.6
        const fy = depth * 0.2 + Math.abs(fx / hw) ** 2 * depth * 0.22 + 10 + r() * 16
        return <Flower key={`f${i}`} x={+fx.toFixed(1)} y={+fy.toFixed(1)} r={3.2} color={i % 2 ? PAL.white : PAL.pink300} />
      })}
    </Place>
  )
}

/** Classical pillar. Origin = bottom centre; `h` = total height, `w` = shaft width. */
export function Pillar({ h = 170, w = 26, color = PAL.stone, shade = '#b8acd0', ...p }: PlaceProps & { h?: number; w?: number; color?: string; shade?: string }) {
  const hw = w / 2
  const cap = 12
  return (
    <Place {...p}>
      <rect x={-hw} y={-h + cap} width={w} height={h - cap * 2} fill={color} {...line(2.5)} />
      {[-hw / 2, 0, hw / 2].map((fx) => <path key={fx} d={`M${fx} ${-h + cap + 6} L${fx} ${-cap - 6}`} {...line(1.6, shade)} />)}
      <rect x={-hw - 7} y={-h} width={w + 14} height={cap} rx="3" fill={color} {...line(2.5)} />
      <rect x={-hw - 7} y={-cap} width={w + 14} height={cap} rx="3" fill={color} {...line(2.5)} />
      <path d={`M${-hw - 4} ${-h + 4} L${hw + 4} ${-h + 4}`} {...line(1.4, shade)} />
    </Place>
  )
}

/* ───────────── extras ───────────── */

/** Pair of angel wings. Origin = the point between the wings (put at the cat's neck/back); `span` = half width. */
export function Wings({ span = 58, color = PAL.white, shade = '#e3dcf5', ...p }: PlaceProps & { span?: number; color?: string; shade?: string }) {
  const k = span / 58
  const wing = 'M0 0 C-10 -26 -30 -44 -58 -46 C-54 -38 -52 -32 -54 -26 C-48 -24 -46 -20 -48 -14 C-42 -12 -40 -8 -42 -2 C-34 0 -30 4 -32 10 C-20 12 -8 8 0 0 Z'
  return (
    <Place {...p}>
      {[1, -1].map((sx) => (
        <g key={sx} transform={`scale(${sx * k} ${k})`}>
          <path d={wing} fill={color} {...line(2.5 / k)} />
          <path d="M-12 -6 C-22 -16 -34 -22 -46 -24 M-14 2 C-24 -4 -32 -8 -40 -8" fill="none" {...line(1.6 / k, shade)} />
        </g>
      ))}
    </Place>
  )
}

/** Glowing halo ring, seen from the front. Origin = centre. */
export function Halo({ rx = 24, color = PAL.gold400, ...p }: PlaceProps & { rx?: number; color?: string }) {
  return (
    <Place {...p}>
      <ellipse rx={rx + 4} ry={rx * 0.3 + 4} fill="none" stroke={color} strokeWidth={4} opacity={0.3} />
      <ellipse rx={rx} ry={rx * 0.3} fill="none" {...line(7)} />
      <ellipse rx={rx} ry={rx * 0.3} fill="none" {...line(4, color)} />
    </Place>
  )
}

/** Open cardboard box. Origin = bottom centre; `w`×`h` body. Draw it AFTER a cat to have the cat peek out. */
export function Box({ w = 64, h = 40, color = PAL.cardboard, ...p }: PlaceProps & { w?: number; h?: number; color?: string }) {
  const hw = w / 2
  const dark = '#b57c46'
  return (
    <Place {...p}>
      <path d={`M${-hw} ${-h} L${-hw - 12} ${-h - 12} L${-hw + 8} ${-h - 14} L${-hw + 14} ${-h} Z`} fill={dark} {...line(2.2)} />
      <path d={`M${hw} ${-h} L${hw + 12} ${-h - 12} L${hw - 8} ${-h - 14} L${hw - 14} ${-h} Z`} fill={dark} {...line(2.2)} />
      <rect x={-hw} y={-h} width={w} height={h} rx="2" fill={color} {...line(2.5)} />
      <path d={`M${-hw * 0.3} ${-h + 1} L${-hw * 0.3} ${-h + 10} M${hw * 0.3} ${-h + 1} L${hw * 0.3} ${-h + 10}`} {...line(1.6, dark)} />
      <PawPrint x={0} y={-h / 2 + 2} scale={0.45} color={dark} />
    </Place>
  )
}

/** Hanging lantern. Origin = top of the handle (hang it from a raised paw); ≈ 26×44. */
export function Lantern({ color = PAL.gold400, glow = '#fff3c4', frame = PAL.night700, ...p }: PlaceProps & { color?: string; glow?: string; frame?: string }) {
  return (
    <Place {...p}>
      <circle cx="0" cy="25" r="21" fill={PAL.gold300} opacity={0.16} />
      <path d="M-6 6 C-6 -2 6 -2 6 6" fill="none" {...line(2.2)} />
      <rect x="-10" y="6" width="20" height="6" rx="2" fill={frame} {...line(2.2)} />
      <path d="M-11 12 L11 12 L9 38 L-9 38 Z" fill={glow} {...line(2.5)} />
      <path d="M0 18 C4 23 4 28 0 32 C-4 28 -4 23 0 18 Z" fill={color} {...line(1.6)} />
      <rect x="-12" y="38" width="24" height="6" rx="2" fill={frame} {...line(2.2)} />
    </Place>
  )
}
