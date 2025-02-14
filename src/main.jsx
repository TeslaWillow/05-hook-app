import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { SimpleWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultipleCustomHooks />
  </StrictMode>,
)
