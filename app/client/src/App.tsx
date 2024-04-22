import { useState } from 'react'
import './App.css'
import Main from './pages/main'
import LogIn from './pages/log-in'
import Deals from './pages/deals'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/deals" element={<Deals/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
