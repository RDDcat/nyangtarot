// XX Judgement — lilac-gray angel cat on a cloud blowing a trumpet with a paw-print banner; happy cats pop out of boxes below.
import { Cat } from '../Cat.tsx'
import { PAL, Cloud, Wings, Halo, Box, PawPrint, Sparkle } from '../props.tsx'

const INK = PAL.ink
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })
const FUR = '#c9bfd8'

/** Trumpet + paw-print banner, in the angel cat's canonical space: mouthpiece at the mouth (120,158),
 *  the tube passes the raised paw (184,180) and the bell flares out to the right. */
function Trumpet() {
  return (
    <g>
      {/* banner hanging from the outer part of the tube */}
      <path d="M196 184 L238 198 L236 262 L220 250 L204 264 L196 240 Z" fill={PAL.white} {...ln(3)} />
      <PawPrint x={217} y={226} scale={0.95} rotate={8} color={PAL.pink400} />
      {/* tube */}
      <path d="M124 160 L236 197" {...ln(10)} />
      <path d="M124 160 L236 197" {...ln(4.5, PAL.gold400)} />
      <circle cx="122" cy="159" r="5" fill={PAL.gold500} {...ln(2.5)} />
      {/* bell */}
      <path d="M230 192 L264 176 C271 192 268 212 258 222 L226 204 Z" fill={PAL.gold400} {...ln(3)} />
      <ellipse cx="263" cy="199" rx="5.5" ry="23" transform="rotate(-20 263 199)" fill={PAL.gold300} {...ln(2.5)} />
      {/* the angel's paw gripping the tube (same look as the Cat's raised paw) */}
      <circle cx="184" cy="180" r="12.5" fill={FUR} {...ln(3)} />
      <g fill={PAL.pink300}>
        <ellipse cx="184" cy="183.2" rx="5.2" ry="4.2" />
        <circle cx="178.4" cy="176.4" r="2.3" />
        <circle cx="184" cy="173.8" r="2.3" />
        <circle cx="189.6" cy="176.4" r="2.3" />
      </g>
      {/* sound */}
      <path d="M280 186 C287 193 288 204 283 212 M292 174 C304 187 305 210 296 224" fill="none" {...ln(3, PAL.gold500)} />
    </g>
  )
}

export default function JudgementArt() {
  const boxCats = [
    { x: 44, fur: '#9aa0ad', pattern: 'mackerel' as const, eye: '#f0a23a', color: PAL.cardboard, paw: '#9aa0ad', toe: INK },
    { x: 120, fur: PAL.white, pattern: 'calico' as const, eye: '#8fd16a', color: '#e3b27a', paw: PAL.white, toe: INK },
    { x: 196, fur: '#3b3448', pattern: 'solid' as const, eye: '#f5d04a', color: PAL.cardboard, paw: '#3b3448', toe: PAL.violet300 },
  ]
  return (
    <g>
      <defs>
        <linearGradient id="judgement-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7cc0f5" />
          <stop offset="0.6" stopColor={PAL.sky300} />
          <stop offset="1" stopColor="#e4f3ff" />
        </linearGradient>
        <radialGradient id="judgement-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.2" stopColor="#fffbe8" stopOpacity="0.7" />
          <stop offset="1" stopColor="#fffbe8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="300" fill="url(#judgement-sky)" />
      {/* light rays */}
      <path d="M110 110 L0 20 L0 70 Z M110 110 L40 0 L90 0 Z M130 110 L240 20 L240 70 Z M130 110 L200 0 L150 0 Z" fill="#fff" opacity={0.28} />
      <circle cx="110" cy="92" r="74" fill="url(#judgement-glow)" />

      {/* soft distant hills */}
      <path d="M0 236 C40 222 80 226 120 234 C160 222 200 222 240 232 L240 300 L0 300 Z" fill={PAL.mint300} {...ln(3)} />

      {/* angel cat on its cloud */}
      <Cloud x={30} y={84} scale={0.55} opacity={0.9} />
      <Cloud x={214} y={124} scale={0.5} opacity={0.9} />
      <Cat
        uid="judgement-angel"
        x={110}
        y={198}
        scale={0.64}
        fur={FUR}
        eyeColor="#6fb6ff"
        expression="serene"
        pose="paw-up"
        tail="up"
        shadow={false}
        behind={<Wings x={120} y={205} span={92} color={PAL.white} shade="#cfc3ea" />}
        front={<g><Halo x={120} y={64} /><Trumpet /></g>}
      />
      <g transform="translate(112 224) scale(1.7 0.95)"><Cloud /></g>
      <Sparkle x={28} y={140} size={6} color={PAL.gold400} outline />
      <Sparkle x={222} y={40} size={5} color={PAL.gold400} outline />

      {/* cats popping out of boxes, front paws on the rim */}
      {boxCats.map((b, i) => (
        <g key={i}>
          <Cat
            uid={`judgement-box${i}`}
            x={b.x}
            y={283}
            scale={0.36}
            kitten
            fur={b.fur}
            pattern={b.pattern}
            eyeColor={b.eye}
            expression={i === 1 ? 'happy' : 'smile'}
            rim={i === 2 ? PAL.violet300 : undefined}
            shadow={false}
          />
          <Box x={b.x} y={298} w={60} h={34} color={b.color} />
          {[-9, 9].map((dx) => (
            <g key={dx}>
              <ellipse cx={b.x + dx} cy={264} rx={6} ry={4.6} fill={b.paw} {...ln(2)} />
              <path d={`M${b.x + dx - 2} ${262} l0 3 M${b.x + dx + 2} ${262} l0 3`} {...ln(1.3, b.toe)} />
            </g>
          ))}
        </g>
      ))}
    </g>
  )
}
