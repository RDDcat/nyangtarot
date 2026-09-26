import { Mascot } from './Mascot.tsx'

interface CatSaysProps {
  children: string
}

/** Small cat with a speech bubble — 고양이의 한마디. */
export function CatSays({ children }: CatSaysProps) {
  return (
    <figure className="cat-says">
      <Mascot className="cat-says__cat" />
      <blockquote className="cat-says__bubble">
        <p>{children}</p>
      </blockquote>
    </figure>
  )
}
