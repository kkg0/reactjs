import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message,type) =>{
    setalert({
      msg : message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#131440';
      document.body.style.color = 'white';
      showAlert('Dark mode has been Enabled !','success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been Enabled !','success');
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert= {alert}/>
        <Routes>
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode = {mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
