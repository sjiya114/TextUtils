/*import logo from './logo.svg';*/
import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  Routes,
  Route
} from "react-router-dom";


function App() {
const [mode,setMode]=useState('light');
const[alert,setalert]=useState(null);
const showAlert=(message,type)=>
  {
  setalert(
    {
      msg:message,
      type:type
    }
  );
    setTimeout(()=>
    {
      setalert(null)
    },3000);
  };
const toggleMode=()=>
  {
    if(mode==='light')
      {
        setMode('dark');
        document.body.style.backgroundColor="#131337";
        showAlert("Dark mode has been enabled","success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor="white";
        showAlert("Light mode has been enabled","success");
      }
  }
return (
<>
<Navbar mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container'>
<Routes>
          <Route exact path="/about" element={
            <About mode={mode}/>}/>
          <Route exact path="/" element={
          <TextForm showAlert={showAlert} mode={mode}/>}/>
 </Routes>
</div>
</>
);
}

export default App;
