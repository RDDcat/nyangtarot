// XXI The World — gray tuxedo cat dancing inside a laurel wreath with two ribbon wands; four cat-themed corner symbols.
import type { ReactNode } from 'react'
import { Cat } from '../Cat.tsx'
import { PAL, Leaf, Cloud, Fish, YarnBall, PawPrint, MilkCup, Starfield, Sparkle } from '../props.tsx'

const INK = PAL.ink
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })
const CX = 120
const CY = 158
const RX = 86
const RY = 115
const RIBBON = '#e0567a'

/** Ribbon wand in canonical cat space: grip at (gx, gy), leaning by `dir` (-1 left, 1 right). */
function RibbonWand({ gx, gy, dir, color }: { gx: number; gy: number; dir: 1 | -1; color: string }) {
  const tx = gx + dir * 22
  const ty = gy - 86
  const rib = `M${tx} ${ty} C${tx + dir * 34} ${ty - 16} ${tx + dir * 40} ${ty + 30} ${tx + dir * 14} ${ty + 34} C${tx - dir * 8} ${ty + 38} ${tx - dir * 4} ${ty + 66} ${tx + dir * 26} ${ty + 76}`
  return (
    <g>
      <path d={rib} fill="none" {...ln(11)} />
      <path d={rib} fill="none" {...ln(6.5, color)} />
      <path d={`M${gx - dir * 3} ${gy + 12} L${tx} ${ty}`} {...ln(8)} />
      <path d={`M${gx - dir * 3} ${gy + 12} L${tx} ${ty}`} {...ln(3.5, PAL.gold400)} />
      <circle cx={tx} cy={ty} r="5.5" fill={PAL.gold300} {...ln(2.5)} />
    </g>
  )
}

export default function WorldArt() {
  // laurel leaves around the oval, pointing along it (two rows)
  const leaves = Array.from({ length: 30 }, (_, i) => {
    const t = (i / 30) * Math.PI * 2
    const x = CX + Math.cos(t) * RX
    const y = CY + Math.sin(t) * RY
    const tan = (Math.atan2(Math.cos(t) * RY, -Math.sin(t) * RX) * 180) / Math.PI + 90
    return { x: +x.toFixed(1), y: +y.toFixed(1), rot: +(tan + (i % 2 ? 28 : -28)).toFixed(1), c: i % 2 ? PAL.grass : '#68bd7c' }
  }).filter((l) => Math.abs(l.x - CX) > 14)
  const corner = (x: number, y: number, icon: ReactNode) => (
    <g>
      <Cloud x={x} y={y + 16} scale={0.5} />
      {icon}
    </g>
  )
  return (
    <g>
      <defs>
        <linearGradient id="world-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#134a4d" />
          <stop offset="1" stopColor="#2f8a78" />
        </linearGradient>
        <radialGradient id="world-inner" cx="0.5" cy="0.45" r="0.6">
          <stop offset="0" stopColor="#fffaf0" />
          <stop offset="0.7" stopColor="#d6efff" />
          <stop offset="1" stopColor={PAL.sky300} />
        </radialGradient>
      </defs>
      <rect width="240" height="300" fill="url(#world-sky)" />
      <Starfield seed={21} count={40} sparkles={4} />

      {/* wreath */}
      <ellipse cx={CX} cy={CY} rx={RX} ry={RY} fill="url(#world-inner)" {...ln(3)} />
      <ellipse cx={CX} cy={CY} rx={RX} ry={RY} fill="none" {...ln(12)} />
      <ellipse cx={CX} cy={CY} rx={RX} ry={RY} fill="none" {...ln(7, PAL.grassDark)} />
      {leaves.map((l, i) => (
        <Leaf key={i} x={l.x} y={l.y} rotate={l.rot} scale={0.62} color={l.c} />
      ))}
      {/* ribbon ties top & bottom */}
      {[CY - RY, CY + RY].map((y, i) => (
        <g key={i}>
          <path d={`M${CX} ${y} C${CX - 20} ${y - 14} ${CX - 22} ${y + 10} ${CX} ${y} C${CX + 22} ${y + 10} ${CX + 20} ${y - 14} ${CX} ${y} Z`} fill={RIBBON} {...ln(2.5)} />
          <path d={`M${CX - 3} ${y + 2} L${CX - 10} ${y + 14} M${CX + 3} ${y + 2} L${CX + 10} ${y + 14}`} {...ln(6)} />
          <path d={`M${CX - 3} ${y + 2} L${CX - 10} ${y + 14} M${CX + 3} ${y + 2} L${CX + 10} ${y + 14}`} {...ln(2.5, RIBBON)} />
          <circle cx={CX} cy={y} r="4" fill={RIBBON} {...ln(2.2)} />
        </g>
      ))}

      <Sparkle x={72} y={84} size={6} color={PAL.gold400} />
      <Sparkle x={170} y={96} size={5} color={PAL.gold400} />

      <Cat
        uid="world-cat"
        x={120}
        y={246}
        scale={0.64}
        rotate={6}
        fur="#8a8f9c"
        pattern="tuxedo"
        eyeColor="#8fd16a"
        expression="smile"
        pose="paws-up"
        tail="up"
        collar="#7b5cd6"
        headTilt={-8}
        held={
          <g>
            <RibbonWand gx={56} gy={180} dir={-1} color={PAL.violet300} />
            <RibbonWand gx={184} gy={180} dir={1} color={PAL.pink300} />
          </g>
        }
      />

      {/* four corner symbols */}
      {corner(30, 22, <Fish x={30} y={24} scale={0.62} />)}
      {corner(210, 22, <PawPrint x={210} y={26} scale={0.8} color={PAL.pink400} outline />)}
      {corner(30, 262, <YarnBall x={30} y={262} r={10} thread={false} color={PAL.violet300} />)}
      {corner(210, 262, <MilkCup x={210} y={275} scale={0.62} />)}
    </g>
  )
}
