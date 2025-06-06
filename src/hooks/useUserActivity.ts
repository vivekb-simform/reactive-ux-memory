import { useEffect } from 'react'
import { useUserMemoryStore } from '../store/userMemoryStore'

export const useUserActivity = () => {
  const recordActivity = useUserMemoryStore((s) => s.recordActivity)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-track]')
      const key = target?.getAttribute('data-track')
      if (key) recordActivity(key)
    }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [recordActivity])
}
