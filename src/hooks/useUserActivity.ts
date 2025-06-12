import { useEffect, useRef, useState } from 'react'
import { useUserMemoryStore } from '../store/userMemoryStore'
import { usePersistentMemory } from './usePersistentMemory'

export const useUserActivity = (name: string) => {
  usePersistentMemory()
  const recordActivity = useUserMemoryStore((s) => s.recordActivity)
  const initialLog = useRef(useUserMemoryStore.getState().activityLog)
  const [activityLog, setActivityLog] = useState(initialLog.current)

  useEffect(() => {
    // Listen for both click and change events
    const clickHandler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-track]')
      const key = target?.getAttribute('data-track')
      if (key) recordActivity(name, key)
    }
    const changeHandler = (e: Event) => {
      if (e.target instanceof HTMLSelectElement) {
        const selected = e.target.selectedOptions[0]
        const key = selected?.getAttribute('data-track') || selected?.value
        if (key) recordActivity(name, key)
      }
    }
    window.addEventListener('click', clickHandler)
    window.addEventListener('change', changeHandler)
    return () => {
      window.removeEventListener('click', clickHandler)
      window.removeEventListener('change', changeHandler)
    }
  }, [name, recordActivity])

  useEffect(() => {
    setActivityLog(useUserMemoryStore.getState().activityLog)
  }, [])

  return activityLog[name] || {}
}
