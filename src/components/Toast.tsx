import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { Icon } from './Icon.tsx'

type ShowToast = (message: string) => void

const ToastContext = createContext<ShowToast>(() => {})

/** Provides a single polite live-region toast ("링크를 복사했어요" etc.). */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{ id: number; message: string } | null>(null)
  const timer = useRef<number | undefined>(undefined)

  const show = useCallback<ShowToast>((message) => {
    window.clearTimeout(timer.current)
    setToast({ id: Date.now(), message })
    timer.current = window.setTimeout(() => setToast(null), 2400)
  }, [])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div className="toast-region" role="status" aria-live="polite">
        {toast && (
          <div className="toast" key={toast.id}>
            <Icon name="paw" />
            {toast.message}
          </div>
        )}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast(): ShowToast {
  return useContext(ToastContext)
}
