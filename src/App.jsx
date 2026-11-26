import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import CardDemo from './components/ui/cardcom'
import RegisterDemo from "./components/ui/registerpage";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegisterDemo />
      <CardDemo />
    </>
  )
}

export default App
