import { useUserActivity } from '../hooks/useUserActivity'
import { usePersistentMemory } from '../hooks/usePersistentMemory'
import { AdaptiveSection } from '../components/AdaptiveSection'

function Home() {
  useUserActivity()
  usePersistentMemory()

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧠 Adaptive UX Memory</h1>
      <p className="mb-6 text-gray-600">
        Click sections below. The UI will remember and prioritize based on your
        interaction.
      </p>
      <AdaptiveSection />
    </main>
  )
}

export default Home
