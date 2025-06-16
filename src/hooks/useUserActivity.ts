import { useEffect, useRef, useState, useCallback } from 'react'
import { useUserMemoryStore } from '../store/userMemoryStore'

type UseActivityOptions<T extends string = string> = {
  name: string
  isManualTracking?: boolean
  list?: T[]
  selector?: string // Defaults to '[data-track]'
  eventTypes?: Array<'click' | 'change'>
}

export function useUserActivity<
  T extends string = string,
  E extends HTMLElement = HTMLElement
>({
  name,
  isManualTracking = false,
  list,
  selector = '[data-track]',
  eventTypes = ['click', 'change']
}: UseActivityOptions<T>): {
  activityLog: Record<string, number>
  ref: (node: E | null) => void
  recordActivity: (key: T) => void
} {
  const recordActivity = useUserMemoryStore((s) => s.recordActivity)
  const initialLog = useRef(useUserMemoryStore.getState().activityLog)
  const [activityLog, setActivityLog] = useState(initialLog.current)
  const [node, setNode] = useState<E | null>(null)
  const ref = useCallback((n: E | null) => setNode(n), [])

  useEffect(() => {
    if (isManualTracking) return

    const getKey = (e: Event): T | null => {
      // Special handling for <select> change events
      if (e.type === 'change' && e.target instanceof HTMLSelectElement) {
        const selected = e.target.selectedOptions[0]
        return (
          (selected?.getAttribute('data-track') as T) ||
          (selected?.value as T) ||
          null
        )
      }
      // Otherwise, use closest [data-track]
      const target = (e.target as HTMLElement)?.closest(selector)
      const key = target?.getAttribute('data-track') as T
      return key || null
    }

    const handler = (e: Event) => {
      const key = getKey(e)
      if (key && (!list || list.includes(key))) {
        recordActivity(name, key)
      }
    }

    if (node) {
      eventTypes.forEach((type) => node.addEventListener(type, handler))
      return () => {
        eventTypes.forEach((type) => node.removeEventListener(type, handler))
      }
    } else {
      if (
        typeof window !== 'undefined' &&
        import.meta.env?.MODE === 'development'
      ) {
        console.warn(
          '[useUserActivity] ref is not attached to any element. Falling back to global tracking.'
        )
      }
      eventTypes.forEach((type) => window.addEventListener(type, handler))
      return () => {
        eventTypes.forEach((type) => window.removeEventListener(type, handler))
      }
    }
  }, [name, recordActivity, isManualTracking, list, eventTypes, selector, node])
  useEffect(() => {
    // Subscribe to activityLog updates so UI reacts to changes
    const unsub = useUserMemoryStore.subscribe((state) => {
      setActivityLog(state.activityLog)
    })
    return unsub
  }, [])
  return {
    activityLog: activityLog[name] || {},
    ref,
    recordActivity: (key: T) => recordActivity(name, key)
  }
}
