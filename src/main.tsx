import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { TrackProvider } from './Context/context.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TrackProvider>
      <App />
    </TrackProvider>
  </React.StrictMode>,
)
