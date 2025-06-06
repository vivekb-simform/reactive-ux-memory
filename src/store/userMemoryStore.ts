import { create } from 'zustand'

type ActivityLog = { [key: string]: number }

interface StoreState {
  activityLog: ActivityLog
  recordActivity: (target: string) => void
  setFromStorage: (log: ActivityLog) => void
}

export const useUserMemoryStore = create<StoreState>((set) => ({
  activityLog: {},
  recordActivity: (target) =>
    set((state) => ({
      activityLog: {
        ...state.activityLog,
        [target]: (state.activityLog[target] || 0) + 1
      }
    })),
  setFromStorage: (log) => set({ activityLog: log })
}))
