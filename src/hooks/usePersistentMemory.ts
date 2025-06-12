import { useEffect } from 'react'
import { useUserMemoryStore } from '../store/userMemoryStore'

export const usePersistentMemory = () => {
  const { activityLog, setFromStorage } = useUserMemoryStore()

  useEffect(() => {
    const stored = localStorage.getItem('activityLog')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setFromStorage(parsed)
      } catch {
        console.error('Failed to parse activity log from localStorage')
      }
    }
  }, [setFromStorage])

  useEffect(() => {
    // Only save if activityLog is not empty
    if (activityLog && Object.keys(activityLog).length > 0) {
      localStorage.setItem('activityLog', JSON.stringify(activityLog))
    }
  }, [activityLog])
}
