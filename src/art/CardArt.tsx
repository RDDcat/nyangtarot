import type { ComponentType } from 'react'
import type { CardId } from '../data/types.ts'
import FoolArt from './cards/fool.tsx'
import MagicianArt from './cards/magician.tsx'
import HighPriestessArt from './cards/high-priestess.tsx'
import EmpressArt from './cards/empress.tsx'
import EmperorArt from './cards/emperor.tsx'
import HierophantArt from './cards/hierophant.tsx'
import LoversArt from './cards/lovers.tsx'
import ChariotArt from './cards/chariot.tsx'
import StrengthArt from './cards/strength.tsx'
import HermitArt from './cards/hermit.tsx'
import WheelOfFortuneArt from './cards/wheel-of-fortune.tsx'
import JusticeArt from './cards/justice.tsx'
import HangedManArt from './cards/hanged-man.tsx'
import DeathArt from './cards/death.tsx'
import TemperanceArt from './cards/temperance.tsx'
import DevilArt from './cards/devil.tsx'
import TowerArt from './cards/tower.tsx'
import StarArt from './cards/star.tsx'
import MoonArt from './cards/moon.tsx'
import SunArt from './cards/sun.tsx'
import JudgementArt from './cards/judgement.tsx'
import WorldArt from './cards/world.tsx'

/** Illustration coordinate space shared by every card scene. */
export const ART_W = 240
export const ART_H = 300

const SCENES: Record<CardId, ComponentType> = {
  'fool': FoolArt,
  'magician': MagicianArt,
  'high-priestess': HighPriestessArt,
  'empress': EmpressArt,
  'emperor': EmperorArt,
  'hierophant': HierophantArt,
  'lovers': LoversArt,
  'chariot': ChariotArt,
  'strength': StrengthArt,
  'hermit': HermitArt,
  'wheel-of-fortune': WheelOfFortuneArt,
  'justice': JusticeArt,
  'hanged-man': HangedManArt,
  'death': DeathArt,
  'temperance': TemperanceArt,
  'devil': DevilArt,
  'tower': TowerArt,
  'star': StarArt,
  'moon': MoonArt,
  'sun': SunArt,
  'judgement': JudgementArt,
  'world': WorldArt,
}

interface CardArtProps {
  id: CardId
  className?: string
  /** Accessible label; omit when the art is decorative. */
  label?: string
}

/** Renders one card's illustration as a self-contained <svg> (240×300 viewBox, scales to its box). */
export function CardArt({ id, className, label }: CardArtProps) {
  const Scene = SCENES[id]
  return (
    <svg
      viewBox={`0 0 ${ART_W} ${ART_H}`}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Scene />
    </svg>
  )
}
