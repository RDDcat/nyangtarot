import { useEffect, useLayoutEffect } from 'react'
import { CARD_BY_ID } from './data/index.ts'
import { routeToHash, useRoute, type Route } from './lib/router.ts'
import { Starfield } from './components/Starfield.tsx'
import { ToastProvider } from './components/Toast.tsx'
import { DrawScreen } from './screens/DrawScreen.tsx'
import { ResultScreen } from './screens/ResultScreen.tsx'
import { DeckScreen } from './screens/DeckScreen.tsx'
import { DoneScreen } from './screens/DoneScreen.tsx'

/** Identity of the screen (not the question number) — changing it scrolls to top and replays the entrance. */
function screenKey(route: Route): string {
  return route.name === 'draw' ? 'draw' : `${route.name}:${route.id}`
}

function Screen({ route }: { route: Route }) {
  switch (route.name) {
    case 'draw':
      return <DrawScreen />
    case 'result':
      return <ResultScreen card={CARD_BY_ID[route.id]} />
    case 'deck':
      return <DeckScreen card={CARD_BY_ID[route.id]} n={route.n} />
    case 'done':
      return <DoneScreen card={CARD_BY_ID[route.id]} />
  }
}

export function App() {
  const route = useRoute()
  const key = screenKey(route)

  // Normalise bad/legacy hashes (unknown id, q/99, empty) to the canonical one without adding history.
  useEffect(() => {
    const canonical = routeToHash(route)
    if (window.location.hash !== canonical) window.history.replaceState(window.history.state, '', canonical)
  }, [route])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [key])

  return (
    <ToastProvider>
      <Starfield />
      <Screen key={key} route={route} />
    </ToastProvider>
  )
}
