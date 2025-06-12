import { create } from 'zustand'

type ActivityLog = { [key: string]: { [key: string]: number } }

interface StoreState {
  activityLog: ActivityLog
  recordActivity: (name: string, target: string) => void
  setFromStorage: (log: ActivityLog) => void
}

export const useUserMemoryStore = create<StoreState>((set) => ({
  activityLog: {},
  recordActivity: (name, target) =>
    set((state) => ({
      activityLog: {
        ...state.activityLog,
        [name]: {
          ...state.activityLog[name],
          [target]: (state.activityLog[name]?.[target] || 0) + 1
        }
      }
    })),
  setFromStorage: (log) => set({ activityLog: log })
}))
