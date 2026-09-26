import { useEffect, useLayoutEffect, useRef, useSyncExternalStore } from 'react'

/** Live `matchMedia` result; reads synchronously on first render so layouts don't jump. */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}

export function useDocumentTitle(title: string): void {
  useEffect(() => {
    document.title = title
  }, [title])
}

/** Ref that always holds the latest value — for stable event listeners that call fresh callbacks. */
export function useLatest<T>(value: T) {
  const ref = useRef(value)
  useLayoutEffect(() => {
    ref.current = value
  })
  return ref
}
