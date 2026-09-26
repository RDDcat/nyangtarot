import { useMemo, useSyncExternalStore } from 'react'
import { CARD_BY_ID, type CardId } from '../data/index.ts'

export const QUESTION_COUNT = 10

export type Route =
  | { name: 'draw' }
  | { name: 'result'; id: CardId }
  | { name: 'deck'; id: CardId; n: number }
  | { name: 'done'; id: CardId }

function isCardId(value: string): value is CardId {
  return Object.hasOwn(CARD_BY_ID, value)
}

function safeDecode(part: string): string {
  try {
    return decodeURIComponent(part)
  } catch {
    return part
  }
}

/** Parses a location hash into a route. Unknown ids fall back to Draw; question numbers are clamped to 1..10. */
export function parseHash(hash: string): Route {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(safeDecode)
  const [section, id, sub, num] = parts
  if (section !== 'card' || !id || !isCardId(id)) return { name: 'draw' }
  if (sub === 'q') {
    const n = Number.parseInt(num ?? '', 10)
    return { name: 'deck', id, n: Number.isFinite(n) ? Math.min(Math.max(n, 1), QUESTION_COUNT) : 1 }
  }
  if (sub === 'done') return { name: 'done', id }
  return { name: 'result', id }
}

export function routeToHash(route: Route): string {
  switch (route.name) {
    case 'draw':
      return '#/'
    case 'result':
      return `#/card/${route.id}`
    case 'deck':
      return `#/card/${route.id}/q/${route.n}`
    case 'done':
      return `#/card/${route.id}/done`
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

const getHash = () => window.location.hash

export function useRoute(): Route {
  const hash = useSyncExternalStore(subscribe, getHash)
  return useMemo(() => parseHash(hash), [hash])
}

/** Navigates to a route. `replace` swaps the current history entry (used when stepping through questions). */
export function navigate(route: Route, { replace = false }: { replace?: boolean } = {}) {
  const hash = routeToHash(route)
  if (window.location.hash === hash) return
  if (replace) {
    window.history.replaceState(window.history.state, '', hash)
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  } else {
    window.location.hash = hash
  }
}

/** Absolute, shareable link to a card's 검사표. */
export function cardUrl(id: CardId): string {
  const { origin, pathname } = window.location
  return `${origin}${pathname}${routeToHash({ name: 'result', id })}`
}
