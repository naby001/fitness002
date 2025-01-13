import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {WorkoutProvider} from './context/WorkoutContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WorkoutProvider>
      <App />
    </WorkoutProvider>
  </StrictMode>,
)
