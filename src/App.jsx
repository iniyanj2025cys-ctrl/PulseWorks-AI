import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import CardDemo from './components/ui/cardcom'

import Navbar from './components/ui/landingpage'
import RegisterDemo from './components/ui/registerpage'
import TaskForms from './components/ui/TaskForms'
import LandingPage2 from './components/ui/LandingPage2'
function App() {


  return (
    <>
      <RegisterDemo />

      <CardDemo />
      <Navbar />
      <LandingPage2 />
      <TaskForms />


    </>
  )
}

export default App