import { Cat, type CatProps } from '../art/Cat.tsx'

/** 냥타로's host cat: a cheese tabby with a pink collar and bell. */
const HOST: CatProps = {
  fur: '#f4a950',
  pattern: 'tabby',
  eyeColor: '#7bc67a',
  expression: 'happy',
  collar: '#ff7c9c',
  bell: true,
  socks: true,
}

interface MascotProps extends Omit<CatProps, 'x' | 'y' | 'scale'> {
  className?: string
}

/** The shared <Cat> drawn standalone (outside a card scene), cropped to the cat. Decorative. */
export function Mascot({ className = '', ...cat }: MascotProps) {
  return (
    <svg className={`mascot ${className}`} viewBox="28 36 200 250" aria-hidden="true" focusable="false">
      <Cat {...HOST} {...cat} />
    </svg>
  )
}
