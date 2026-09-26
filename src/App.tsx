// PLACEHOLDER — the UI agent replaces this.
import { CARDS } from './data/index.ts'
import { CardArt } from './art/CardArt.tsx'

export function App() {
  return (
    <main>
      {CARDS.map((c) => (
        <div key={c.id}>
          <CardArt id={c.id} />
          {c.nameKo}
        </div>
      ))}
    </main>
  )
}
