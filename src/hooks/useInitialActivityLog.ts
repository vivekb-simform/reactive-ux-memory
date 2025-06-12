import { useRef, useEffect, useState } from 'react'
import { useUserMemoryStore } from '../store/userMemoryStore'

export function useInitialActivityLog(name: string) {
  // Get the activity log only on mount
  const initialLog = useRef(useUserMemoryStore.getState().activityLog)
  const [activityLog, setActivityLog] = useState(initialLog.current)

  useEffect(() => {
    setActivityLog(useUserMemoryStore.getState().activityLog)
  }, [])

  return activityLog[name] || {}
}
