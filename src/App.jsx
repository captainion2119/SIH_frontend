import { useState } from 'react'
import Home from './pages/home'
import Tests from './pages/Tests';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import TakeTest from './pages/TakeTest';
import anxiety from './assets/anxiety.jpg'
import Diagnosis from './pages/Diagnosis';
import BipolarForm from './components/BipolarForm';
import EatingForm from './components/EatingForm';

function App() {
  const icons = [
    {
      icon: '',
      name:'depression',
      testTypes: ['audio', 'image','text'],
      apiEndpoint: 'https://api.example.com/test1',
    },
    {
      icon: anxiety,
      name:'anxiety',
      testTypes: ['audio','image','text'],
      apiEndpoint: 'https://api.example.com/test2',
    },
    {
        name:'bipolar',
        testTypes:['questionair'],
    },
    {
        name:'eating_disorder',
        testTypes:['questionair'],
    },
    {
      name:"parkinson's_disease",
      testTypes:['video','audio'],
      apiEndpoint:''
    }
   
  ];
  return (
    <div style={{height:'100vh'}}>
    <Router>
    <Navbar/>
    <div style={{width:'75%',margin:'auto',height:'80%'}}>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/tests' element={<Tests icons={icons}/>}/>
      <Route exact path='/tests/depression' element={<TakeTest data={icons[0]}/>}/>
      <Route path='/tests/anxiety' element={<TakeTest data={icons[1]}/>}/>
      <Route path="/tests/parkinson's_disease" element={<TakeTest data={icons[4]}/>}/>
      <Route path='/tests/bipolar' element={<BipolarForm/>}/>
      <Route path='/tests/eating_disorder' element={<EatingForm/>}/>
      <Route path= "/tests/:testName/diagnosis" element={<Diagnosis/>}/>
    </Routes>
    </div>
    </Router>
    </div>
  )
}

export default App
