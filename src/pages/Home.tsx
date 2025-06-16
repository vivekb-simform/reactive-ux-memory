import { AdaptiveSection } from '../components/AdaptiveSection'
import { AdaptiveSectionWithExclude } from '../components/AdaptiveSectionWithExclude'
import { AdaptiveSelect } from '../components/AdaptiveSelect'
import { AdaptiveSelectWithManualTracking } from '../components/AdaptiveSelectWithManualTracking'
import { usePersistentMemory } from '../hooks/usePersistentMemory'

function Home() {
  usePersistentMemory()
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧠 Adaptive UX Memory</h1>
      <p className="mb-6 text-gray-200">
        Click sections below. The UI will remember and prioritize based on your
        interaction.
      </p>
      <div className="bg-gray-50 p-4 rounded shadow mb-6">
        <AdaptiveSection />
      </div>
      <p className="mb-6 text-gray-200">
        Click sections below. The UI will remember and prioritize based on your
        interaction. This section excludes 'Dashboard' from adaptive sorting,
      </p>
      <div className="bg-gray-50 p-4 rounded shadow mb-6">
        <AdaptiveSectionWithExclude />
      </div>
      <p className="mb-6 text-gray-200">
        Select options below. The UI will remember and prioritize based on your
        interaction.
      </p>
      <div className="bg-gray-50 p-4 rounded shadow mb-6">
        <AdaptiveSelect />
      </div>
      <p className="mb-6 text-gray-200">
        Select options below. The UI will remember and prioritize based on your
        interaction. This section allows manual tracking of interactions.
      </p>
      <div className="bg-gray-50 p-4 rounded shadow mb-6">
        <AdaptiveSelectWithManualTracking />
      </div>
    </main>
  )
}

export default Home
