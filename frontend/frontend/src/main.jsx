import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {WorkoutProvider} from './context/WorkoutContext.jsx'
import {AuthContextProvider} from './context/AuthContext.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <WorkoutProvider>
      <App />
    </WorkoutProvider>
    </AuthContextProvider>
    
  </StrictMode>,
)
