import { useState } from 'react'
import "./styles/global.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx"
import Audichecker from './components/Audichecker.jsx';


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>

          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="audichecker" element={<Audichecker />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
