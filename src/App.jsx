import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './css/App.css'
import Home from "./pages/Home"
import NavBar from './components/NavBar';

function App() {
  return (
    <main className="main-content">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
