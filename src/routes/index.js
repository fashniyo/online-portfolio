import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../pages/About'
import Games from '../pages/Games'
import Home from '../pages/Home'

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/game" element={<Games />} />
    </Routes>
  )
}

export default PageRoutes
