import { useUserActivity } from '../hooks/useUserActivity'

const ITEMS = ['Dashboard', 'Reports', 'Settings', 'Profile', 'Notifications']
// Exclude 'Dashboard' from adaptive sorting, but still render it (not sorted adaptively)
const EXCLUDE = ['Dashboard']
export const AdaptiveSectionWithExclude = () => {
  const { activityLog } = useUserActivity({ name: 'tabs', list: ITEMS })

  // Items to sort adaptively (excluding EXCLUDE)
  const adaptiveItems = ITEMS.filter((item) => !EXCLUDE.includes(item))
  const sortedAdaptiveItems = [...adaptiveItems].sort((a, b) => {
    return (activityLog[b] || 0) - (activityLog[a] || 0)
  })

  // Final list: excluded items first (static), then adaptively sorted items
  const finalItems = [...EXCLUDE, ...sortedAdaptiveItems]

  return (
    <div className="space-y-4">
      {finalItems.map((item) => (
        <div
          key={item}
          data-track={item}
          className="cursor-pointer p-4 bg-blue-800 rounded shadow hover:bg-blue-400"
        >
          {item}
        </div>
      ))}
    </div>
  )
}
