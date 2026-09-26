import { useRef, type MouseEvent as ReactMouseEvent, type PointerEvent as ReactPointerEvent } from 'react'

export type SwipeDirection = 'left' | 'right'

interface SwipeOptions {
  /** Called when released past the threshold, with the final drag offset in px. */
  onSwipe: (direction: SwipeDirection, dx: number) => void
  /** Return false to make that direction rubber-band back instead of committing. */
  canSwipe: (direction: SwipeDirection) => boolean
}

const START_SLOP = 10

/**
 * Horizontal drag-to-swipe with pointer events. Pair with `touch-action: pan-y` on the element so vertical
 * scrolling stays native. Moves the element directly via style (no re-render per frame).
 */
export function useSwipe<T extends HTMLElement>({ onSwipe, canSwipe }: SwipeOptions) {
  const ref = useRef<T>(null)
  const drag = useRef<{ id: number; x: number; y: number; dx: number; active: boolean } | null>(null)
  const suppressClick = useRef(false)

  function setOffset(dx: number) {
    const el = ref.current
    if (!el) return
    el.style.transform = dx ? `translateX(${dx}px) rotate(${dx * 0.04}deg)` : ''
  }

  function onPointerDown(e: ReactPointerEvent<T>) {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    drag.current = { id: e.pointerId, x: e.clientX, y: e.clientY, dx: 0, active: false }
    suppressClick.current = false
  }

  function onPointerMove(e: ReactPointerEvent<T>) {
    const d = drag.current
    if (!d || d.id !== e.pointerId) return
    const dx = e.clientX - d.x
    const dy = e.clientY - d.y
    if (!d.active) {
      if (Math.abs(dy) > START_SLOP && Math.abs(dy) > Math.abs(dx)) {
        drag.current = null // vertical intent: leave it to the page scroll
        return
      }
      if (Math.abs(dx) < START_SLOP) return
      d.active = true
      ref.current?.setPointerCapture(e.pointerId)
      ref.current?.classList.add('is-dragging')
    }
    const dir: SwipeDirection = dx < 0 ? 'left' : 'right'
    d.dx = canSwipe(dir) ? dx : dx * 0.25
    setOffset(d.dx)
  }

  function end(e: ReactPointerEvent<T>, cancelled: boolean) {
    const d = drag.current
    if (!d || d.id !== e.pointerId) return
    drag.current = null
    if (!d.active) return
    suppressClick.current = true
    ref.current?.classList.remove('is-dragging')
    const width = ref.current?.offsetWidth ?? 300
    const threshold = Math.min(110, width * 0.22)
    const dir: SwipeDirection = d.dx < 0 ? 'left' : 'right'
    if (!cancelled && Math.abs(d.dx) > threshold && canSwipe(dir)) {
      onSwipe(dir, d.dx)
    } else {
      setOffset(0)
    }
  }

  function onClickCapture(e: ReactMouseEvent<T>) {
    if (suppressClick.current) {
      e.preventDefault()
      e.stopPropagation()
      suppressClick.current = false
    }
  }

  return {
    ref,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: (e: ReactPointerEvent<T>) => end(e, false),
      onPointerCancel: (e: ReactPointerEvent<T>) => end(e, true),
      onClickCapture,
    },
  }
}
