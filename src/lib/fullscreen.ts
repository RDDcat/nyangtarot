import { useSyncExternalStore } from 'react'

function subscribe(onChange: () => void) {
  document.addEventListener('fullscreenchange', onChange)
  return () => document.removeEventListener('fullscreenchange', onChange)
}

export const fullscreenSupported = (): boolean =>
  typeof document !== 'undefined' && document.fullscreenEnabled === true && typeof document.documentElement.requestFullscreen === 'function'

export function useIsFullscreen(): boolean {
  return useSyncExternalStore(subscribe, () => document.fullscreenElement !== null)
}

export async function toggleFullscreen(): Promise<void> {
  try {
    if (document.fullscreenElement) await document.exitFullscreen()
    else await document.documentElement.requestFullscreen()
  } catch {
    /* denied by the browser — nothing to do */
  }
}
