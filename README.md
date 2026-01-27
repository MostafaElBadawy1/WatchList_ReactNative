# 🎥 WatchList (React Native)

A modern React Native app for discovering **Movies and TV Shows**, built with a clean, scalable architecture and production-ready patterns.

The app supports trending content, searching, infinite scrolling, and favorites — with a reusable UI system and well-structured data layer.

---

## ✨ Features

### 🔍 Discover & Search
- Trending **Movies & TV Shows**
- Search by title (debounced)
- Switch content type (Movies / TV)
- Dynamic search placeholder based on content type

### ♾ Pagination
- Infinite scroll using React Query
- Separate pagination state per content type
- Cached results for smooth switching

### ❤️ Favorites
- Add / remove favorites
- Persisted favorites store
- Supports both movies & TV shows

### 🧱 UI & UX
- Reusable `MediaGrid` (2-column layout)
- Reusable `SearchBar` component
- Clean light-mode design
- Consistent spacing & grid math
- Loading & pagination indicators

---

## 🧠 Architecture Highlights

- **Feature-based folder structure**
- **Separation of concerns**
  - UI components
  - Hooks (data & logic)
  - API layer
  - Global stores
- Reusable hooks:
  - `useSearch`
  - `useTrending`
  - `useDiscover`
  - `useSearchInput`
- Server state handled by **React Query**
- Client state handled by **Zustand**

---

## 🛠 Tech Stack

- **React Native (Expo)**
- **TypeScript**
- **React Navigation**
- **@tanstack/react-query**
  - Infinite queries
  - Cache-aware pagination
- **Zustand**
  - Favorites
  - Content type state
- **TMDB API**

---

## 📁 Project Structure

```text
src/
├── features/
│   ├── discover/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── api/
│   │   ├── screens/
│   │   └── types/
│   │
│   ├── search/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── screens/
│   │   └── api/
│
├── shared/
│   ├── api/
│   ├── hooks/
│   ├── store/
│   └── components/
│
└── navigation/
```



## 🚀 Setup & Run

```bash
npm install
npx expo start
Make sure you add your TMDB API key to the API client configuration.
```
🧪 Future Improvements
- Skeleton loaders for grid items
- Search suggestions & recent searches
- Persisted query cache
- Animations on content switch
- Offline favorites support
- Dark mode (system-aware light/dark theme)
- User authentication (registration & account creation)

Accessibility improvements
