import { useUserMemoryStore } from '../store/userMemoryStore'

const ITEMS = ['Dashboard', 'Reports', 'Settings', 'Profile', 'Notifications']

export const AdaptiveSection = () => {
  const activityLog = useUserMemoryStore((s) => s.activityLog)

  const sortedItems = [...ITEMS].sort((a, b) => {
    return (activityLog[b] || 0) - (activityLog[a] || 0)
  })

  return (
    <div className="space-y-4">
      {sortedItems.map((item) => (
        <div
          key={item}
          data-track={item}
          className="cursor-pointer p-4 bg-blue-100 rounded shadow hover:bg-blue-200"
        >
          {item}
        </div>
      ))}
    </div>
  )
}
