import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import CardDemo from './components/ui/cardcom'


import RegisterDemo from './components/ui/registerpage'
import TaskForms from './components/ui/TaskForms'
import { Routes, Route } from "react-router-dom"
import LandingPage from "./components/ui/landingpage"
import DashboardPage from './components/ui/Dashboard'
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<CardDemo />} />
        <Route path="/register" element={<RegisterDemo />} />
        <Route path="/dashboard" element={<DashboardPage />} />



      </Routes>




    </>
  )
}

export default App