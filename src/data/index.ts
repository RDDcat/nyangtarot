import type { CardId, TarotCardContent } from './types.ts'
import fool from './cards/fool.ts'
import magician from './cards/magician.ts'
import highPriestess from './cards/high-priestess.ts'
import empress from './cards/empress.ts'
import emperor from './cards/emperor.ts'
import hierophant from './cards/hierophant.ts'
import lovers from './cards/lovers.ts'
import chariot from './cards/chariot.ts'
import strength from './cards/strength.ts'
import hermit from './cards/hermit.ts'
import wheelOfFortune from './cards/wheel-of-fortune.ts'
import justice from './cards/justice.ts'
import hangedMan from './cards/hanged-man.ts'
import death from './cards/death.ts'
import temperance from './cards/temperance.ts'
import devil from './cards/devil.ts'
import tower from './cards/tower.ts'
import star from './cards/star.ts'
import moon from './cards/moon.ts'
import sun from './cards/sun.ts'
import judgement from './cards/judgement.ts'
import world from './cards/world.ts'

/** All 22 cards in Major Arcana order. */
export const CARDS: TarotCardContent[] = [
  fool,
  magician,
  highPriestess,
  empress,
  emperor,
  hierophant,
  lovers,
  chariot,
  strength,
  hermit,
  wheelOfFortune,
  justice,
  hangedMan,
  death,
  temperance,
  devil,
  tower,
  star,
  moon,
  sun,
  judgement,
  world,
]

export const CARD_BY_ID = Object.fromEntries(CARDS.map((c) => [c.id, c])) as Record<CardId, TarotCardContent>

export type { CardId, TarotCardContent, Question, Reading, Stat, Theme, QuestionLevel } from './types.ts'
export { STAT_LABELS } from './types.ts'
