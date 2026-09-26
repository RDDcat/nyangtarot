// PLACEHOLDER — the art-base agent replaces this with the real parametric cat.
export interface CatProps {
  fur?: string
}

export function Cat({ fur = '#f4a950' }: CatProps) {
  return (
    <g>
      <ellipse cx="120" cy="210" rx="50" ry="60" fill={fur} stroke="#2b2140" strokeWidth="3" />
      <circle cx="120" cy="130" r="42" fill={fur} stroke="#2b2140" strokeWidth="3" />
    </g>
  )
}
