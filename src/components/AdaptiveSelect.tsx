import { useUserActivity } from '../hooks/useUserActivity'

const ITEMS = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5']
export const AdaptiveSelect = () => {
  const activityLog = useUserActivity('select')

  const sortedItems = [...ITEMS].sort((a, b) => {
    return (activityLog[b] || 0) - (activityLog[a] || 0)
  })

  return (
    <select className="p-2 rounded border border-gray-300 bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
      {sortedItems.map((item) => (
        <option key={item} value={item} data-track={item}>
          {item}
        </option>
      ))}
    </select>
  )
}
