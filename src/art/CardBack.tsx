// PLACEHOLDER — the art-base agent replaces this with the real card back design.
interface CardBackProps {
  className?: string
}

/** Face-down card design, 240×380 viewBox (same aspect as a full tarot card). */
export function CardBack({ className }: CardBackProps) {
  return (
    <svg viewBox="0 0 240 380" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="240" height="380" rx="16" fill="#2a1f4d" />
      <rect x="10" y="10" width="220" height="360" rx="10" fill="none" stroke="#f2c66d" strokeWidth="3" />
      <text x="120" y="200" textAnchor="middle" fontSize="40" fill="#f2c66d">🐾</text>
    </svg>
  )
}
