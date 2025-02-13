import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
import { SimpleWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleWithCustomHook />
  </StrictMode>,
)
