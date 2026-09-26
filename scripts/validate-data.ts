// Checks every card file against the content rules in src/data/types.ts.
// Usage: npm run validate            (all cards)
//        npm run validate -- fool sun (only these ids; cross-deck checks still run on all)
import { CARDS } from '../src/data/index.ts'
import { DECK } from '../src/data/deck.ts'
import { STAT_LABELS } from '../src/data/types.ts'

const only = new Set(process.argv.slice(2))
const errors: string[] = []
const warnings: string[] = []
const ids = new Set(DECK.map((d) => d.id))

const len = (s: string) => [...s].length
function max(where: string, s: string, n: number) {
  if (typeof s !== 'string' || !s.trim()) errors.push(`${where}: empty`)
  else if (len(s) > n) errors.push(`${where}: ${len(s)} chars > ${n} — "${s}"`)
}

if (CARDS.length !== 22) errors.push(`expected 22 cards, got ${CARDS.length}`)

CARDS.forEach((c, i) => {
  if (only.size && !only.has(c.id)) return
  const d = DECK[i]
  const at = (k: string) => `[${c.id}] ${k}`
  if (c.id !== d.id || c.number !== d.number || c.roman !== d.roman || c.nameKo !== d.nameKo || c.nameEn !== d.nameEn)
    errors.push(at('identity fields must match src/data/deck.ts'))
  if (JSON.stringify(c).includes('준비 중')) errors.push(at('still contains placeholder text "준비 중"'))
  max(at('catName'), c.catName, 10)
  if (c.keywords.length !== 3) errors.push(at('keywords must be exactly 3'))
  c.keywords.forEach((k, j) => max(at(`keywords[${j}]`), k, 6))
  max(at('theme.title'), c.theme.title, 14)
  max(at('theme.subtitle'), c.theme.subtitle, 40)
  if (!c.theme.emoji || len(c.theme.emoji) > 3) errors.push(at('theme.emoji must be one emoji'))

  const r = c.reading
  max(at('reading.headline'), r.headline, 30)
  max(at('reading.summary'), r.summary, 140)
  max(at('reading.networkerType'), r.networkerType, 14)
  if (r.stats.length !== 4) errors.push(at('reading.stats must be exactly 4'))
  r.stats.forEach((s, j) => {
    if (s.label !== STAT_LABELS[j]) errors.push(at(`reading.stats[${j}].label must be ${STAT_LABELS[j]}`))
    if (!Number.isInteger(s.score) || s.score < 0 || s.score > 100) errors.push(at(`reading.stats[${j}].score must be int 0–100`))
    max(at(`reading.stats[${j}].comment`), s.comment, 18)
  })
  max(at('reading.luckyTopic'), r.luckyTopic, 20)
  max(at('reading.luckyItem'), r.luckyItem, 16)
  max(at('reading.caution'), r.caution, 50)
  if (r.checklist.length !== 3) errors.push(at('reading.checklist must be exactly 3'))
  r.checklist.forEach((s, j) => max(at(`reading.checklist[${j}]`), s, 28))
  max(at('reading.catAdvice'), r.catAdvice, 50)
  if (!/냥[.!~?♡♥]*\s*$/.test(r.catAdvice.replace(/[\p{Extended_Pictographic}️]/gu, '').trim()))
    warnings.push(at(`reading.catAdvice should end with ~냥 — "${r.catAdvice}"`))
  if (!ids.has(r.bestMatch) || r.bestMatch === c.id) errors.push(at(`reading.bestMatch invalid: ${r.bestMatch}`))

  if (c.questions.length !== 10) errors.push(at(`questions must be exactly 10, got ${c.questions.length}`))
  c.questions.forEach((q, j) => {
    const want = j < 4 ? 1 : j < 8 ? 2 : 3
    if (q.level !== want) errors.push(at(`questions[${j}].level must be ${want}`))
    max(at(`questions[${j}].q`), q.q, 60)
    max(at(`questions[${j}].followUp`), q.followUp, 40)
    if (!/[?？]\s*$/.test(q.q.trim())) warnings.push(at(`questions[${j}].q should end with "?" — "${q.q}"`))
  })
})

// Cross-deck: exact / near-duplicate questions.
const norm = (s: string) => s.replace(/[\s?？!.,~'"“”‘’·…]/g, '')
const seen = new Map<string, string>()
for (const c of CARDS)
  c.questions.forEach((q, j) => {
    const k = norm(q.q)
    const prev = seen.get(k)
    if (prev) errors.push(`duplicate question: [${c.id}] questions[${j}] == ${prev} — "${q.q}"`)
    else seen.set(k, `[${c.id}] questions[${j}]`)
  })

for (const w of warnings) console.warn('WARN ', w)
for (const e of errors) console.error('ERROR', e)
console.log(`\n${errors.length} error(s), ${warnings.length} warning(s)${only.size ? ` (checked: ${[...only].join(', ')})` : ''}`)
process.exit(errors.length ? 1 : 0)
