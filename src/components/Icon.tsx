import type { ReactNode } from 'react'

export type IconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'share'
  | 'expand'
  | 'compress'
  | 'shuffle'
  | 'sparkle'
  | 'paw'
  | 'chevron-down'
  | 'redo'
  | 'cards'

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

const PATHS: Record<IconName, ReactNode> = {
  'arrow-left': <path {...stroke} d="M19 12H5m6-6-6 6 6 6" />,
  'arrow-right': <path {...stroke} d="M5 12h14m-6-6 6 6-6 6" />,
  share: (
    <g {...stroke}>
      <path d="M12 3v12M7.5 7.5 12 3l4.5 4.5" />
      <path d="M8 11H6.5A2.5 2.5 0 0 0 4 13.5v4A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5v-4a2.5 2.5 0 0 0-2.5-2.5H16" />
    </g>
  ),
  expand: <path {...stroke} d="M4 9V5a1 1 0 0 1 1-1h4M15 4h4a1 1 0 0 1 1 1v4M20 15v4a1 1 0 0 1-1 1h-4M9 20H5a1 1 0 0 1-1-1v-4" />,
  compress: <path {...stroke} d="M9 4v4a1 1 0 0 1-1 1H4M20 9h-4a1 1 0 0 1-1-1V4M15 20v-4a1 1 0 0 1 1-1h4M4 15h4a1 1 0 0 1 1 1v4" />,
  shuffle: <path {...stroke} d="M4 7h3.5c2 0 3.2 1 4.5 3l1 1.6c1.3 2 2.5 3.4 4.5 3.4H20m0 0-2.5-2.5M20 15l-2.5 2.5M4 17h3.5c1.4 0 2.4-.5 3.3-1.4M20 7h-2.5c-1.4 0-2.4.5-3.3 1.4M20 7l-2.5-2.5M20 7l-2.5 2.5" />,
  sparkle: (
    <path
      fill="currentColor"
      d="M12 2.5c.5 4.6 2.9 7 7.5 7.5-4.6.5-7 2.9-7.5 7.5-.5-4.6-2.9-7-7.5-7.5 4.6-.5 7-2.9 7.5-7.5Zm6.5 12c.25 2 1.25 3 3.25 3.25-2 .25-3 1.25-3.25 3.25-.25-2-1.25-3-3.25-3.25 2-.25 3-1.25 3.25-3.25Z"
    />
  ),
  paw: (
    <g fill="currentColor">
      <path d="M12 11.2c-3.1 0-6.2 3.3-6.2 6.1 0 1.8 1.4 2.7 3 2.7 1.3 0 2.1-.6 3.2-.6s1.9.6 3.2.6c1.6 0 3-.9 3-2.7 0-2.8-3.1-6.1-6.2-6.1Z" />
      <ellipse cx="5.6" cy="9.4" rx="2" ry="2.5" transform="rotate(-18 5.6 9.4)" />
      <ellipse cx="9.3" cy="5.6" rx="2.1" ry="2.7" transform="rotate(-6 9.3 5.6)" />
      <ellipse cx="14.7" cy="5.6" rx="2.1" ry="2.7" transform="rotate(6 14.7 5.6)" />
      <ellipse cx="18.4" cy="9.4" rx="2" ry="2.5" transform="rotate(18 18.4 9.4)" />
    </g>
  ),
  'chevron-down': <path {...stroke} d="m6 9 6 6 6-6" />,
  redo: <path {...stroke} d="M20 11a8 8 0 1 0-2.3 5.7M20 5v6h-6" />,
  cards: (
    <g {...stroke}>
      <rect x="8" y="3.5" width="11" height="15" rx="2" transform="rotate(10 13.5 11)" />
      <path d="M6.2 6.6 5 7a2 2 0 0 0-1.3 2.5l3.2 9.8A2 2 0 0 0 9.4 20.6l1.7-.5" />
    </g>
  ),
}

interface IconProps {
  name: IconName
  className?: string
}

/** Small inline UI icon (24×24, currentColor). Always decorative — label the parent control instead. */
export function Icon({ name, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      {PATHS[name]}
    </svg>
  )
}
