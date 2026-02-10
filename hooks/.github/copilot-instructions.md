# Copilot Instructions for React Hooks Learning Project

## Project Overview
A minimal React 19 + Vite starter project focused on learning React hooks and state management. The project demonstrates functional components with emphasis on proper hook usage patterns.

## Architecture & Key Patterns

### Component Structure
- **Location**: `src/` directory
- **File Type**: `.jsx` (JSX syntax)
- **Pattern**: Functional components only (never use class components)
- **Naming**: PascalCase for component files (e.g., `App.jsx`)

**Example from codebase**:
```jsx
// src/App.jsx - Simple functional component structure
function App() {
  // Use hooks here for state management
  return <></> // JSX content
}
export default App
```

### State Management with React Hooks
- **Required pattern**: Use `useState()` for component state, never mutate variables directly
- **Anti-pattern**: Direct variable mutation (e.g., `counter = counter + 1`) won't trigger re-renders
- **Correct pattern**: Always use `const [value, setValue] = useState(initialValue)`

**Current issue to fix**: App.jsx has incomplete hook implementation - imports `use` but doesn't properly use `useState` for the counter.

### Build & Development Workflows
- **Dev server**: `npm run dev` (runs Vite dev server on local host)
- **Production build**: `npm run build` (outputs to `dist/` directory)
- **Linting**: `npm run lint` (runs ESLint)
- **Preview build**: `npm run preview` (preview production build locally)

### ESLint Configuration
- **Config file**: `eslint.config.js` (new flat config format)
- **Rules to follow**:
  - Enabled: `eslint-plugin-react-hooks` rules (enforce hook rules of hooks)
  - Enabled: `eslint-plugin-react-refresh` (Vite fast refresh compatibility)
  - Variables starting with uppercase or underscore are ignored in `no-unused-vars` rule
- **Scope**: All `.js` and `.jsx` files except `dist/` directory

### Entry Point & Rendering
- **Entry HTML**: `index.html` (loads `<div id="root"></div>`)
- **Entry JS**: `src/main.jsx` (bootstraps React app using `createRoot()`)
- **Pattern**: Always export default component from individual files

## Common Tasks & Examples

### Adding a Hook-based Component
```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
```

### Using useEffect (for side effects)
```jsx
import { useEffect, useState } from 'react'

function Example() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    // Side effect code here
    return () => { /* cleanup */ }
  }, []) // Dependency array
}
```

## Dependencies
- **React**: ^19.2.0 (modern React with automatic JSX transform)
- **React-DOM**: ^19.2.0 (DOM rendering)
- **Vite**: ^8.0.0-beta.13 (dev server & build tool)
- **Build Tool**: Babel/oxc via Vite (Fast Refresh support)

## File Organization
```
src/
├── App.jsx          (Main component)
├── main.jsx         (React bootstrap entry point)
├── App.css          (Component styling)
└── index.css        (Global styles)
```

## Critical Notes for AI Agents
1. **Always fix missing imports**: The `use` import in App.jsx is incomplete - expand to `useState` when implementing state
2. **No TypeScript yet**: Write plain JSX with comments for clarity - no `.ts` or `.tsx` extensions
3. **Fast Refresh enabled**: Changes to component files auto-reload in browser without full refresh
4. **No CSS framework**: Plain CSS only in `App.css` and `index.css`
5. **React 19 features**: Can use modern hooks, automatic JSX transform, and latest APIs
