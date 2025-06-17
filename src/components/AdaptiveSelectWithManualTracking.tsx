import { useUserActivity } from '../hooks/useUserActivity'

const ITEMS = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5']
export const AdaptiveSelectWithManualTracking = () => {
  const { activityLog, recordActivity } = useUserActivity({
    isManualTracking: true,
    name: 'select',
    list: ITEMS
  })

  const sortedItems = [...ITEMS].sort((a, b) => {
    return (activityLog[b] || 0) - (activityLog[a] || 0)
  })

  return (
    <select
      onChange={(e) => recordActivity(e.target.value)}
      className="p-2 rounded border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-800"
    >
      {sortedItems.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  )
}
