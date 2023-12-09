import { useState } from 'react'
import Home from './pages/home'
import Tests from './pages/Tests';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
    <Navbar/>

    <div style={{width:'75%',margin:'auto'}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tests' element={<Tests/>}/>
    </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
