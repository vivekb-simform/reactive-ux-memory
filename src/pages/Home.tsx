import { AdaptiveSection } from '../components/AdaptiveSection'
import { AdaptiveSelect } from '../components/AdaptiveSelect'

function Home() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧠 Adaptive UX Memory</h1>
      <p className="mb-6 text-gray-600">
        Click sections below. The UI will remember and prioritize based on your
        interaction.
      </p>
      <div className="flex w-full justify-between items-center mb-6">
        <AdaptiveSection />

        <AdaptiveSelect />
      </div>
    </main>
  )
}

export default Home
