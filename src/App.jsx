import { useState } from 'react'
import './App.css'
import './landingpage'
import LandingPage from './landingpage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LandingPage></LandingPage>
    </>
  )
}

export default App