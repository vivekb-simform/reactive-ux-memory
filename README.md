# Reactive UX Memory PoC

This project demonstrates a novel UX approach in React: **Adaptive UI Rendering Based on User Interaction Memory**. The interface evolves based on user behavior, remembering what they interact with most and surfacing it more prominently over time.

## 💡 Concept

> "What if your UI remembered you?"

Users often repeat actions or focus on certain parts of an interface. By tracking interaction frequency (like button clicks), we create a memory map of importance. This map then reorders or prioritizes elements in the UI for a more personalized experience.

## 🔧 Features

- **User Interaction Tracking**: Detects clicks on `data-track` elements.
- **Persistent Memory**: Stores interaction counts in `localStorage`.
- **Adaptive Rendering**: Reorders or highlights components based on tracked usage.
- **Zustand Store**: Lightweight global store for tracking and updating activity.

## 📦 Stack

- React + TypeScript
- Zustand (state management)
- TailwindCSS (styling)

## 🧪 Demo Components

### 1. `useUserActivity`

A custom hook that listens for `click` events on elements with `data-track` attributes and updates memory.

### 2. `usePersistentMemory`

Loads memory from `localStorage` and syncs it on changes.

### 3. `AdaptiveSection`

Displays sections based on the priority from the activity log, showing the most interacted items first.

### 4. Zustand Store (`userMemoryStore.ts`)

Maintains and updates the `activityLog` globally.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 🧠 Example Use Case

Imagine a dashboard where users constantly toggle between different filters. Over time, those filters will automatically bubble up to the top based on frequency — like having a smart assistant embedded in your UI.

## 📈 Future Improvements

- Time-decayed memory (forget older interactions)
- Cross-device memory sync
- Visual feedback of memory influence
- Heatmaps or analytics

## 📝 Blog Inspiration Title Ideas

- "Your Interface Remembers You: Building Adaptive UX in React"
- "Smarter UIs with User Interaction Memory"
- "Personalized Dashboards in React Using Zustand + Hooks"

## 📂 Project Structure

```
├── components
│   └── AdaptiveSection.tsx
├── hooks
│   ├── useUserActivity.ts
│   └── usePersistentMemory.ts
├── store
│   └── userMemoryStore.ts
├── App.tsx
└── README.md
```

---
