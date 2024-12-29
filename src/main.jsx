import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Slam from './slam'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Slam />
  </StrictMode>,
)
