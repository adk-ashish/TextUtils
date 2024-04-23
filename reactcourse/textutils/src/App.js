import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const removeBodyClasses = () => 
  {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-info')

  }
  const toggleMode = (colorr) => {
    //removeBodyClasses();
    //document.body.classList.add('bg-'+colorr);
    if (mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor='rgb(59 64 170)'
      showAlert('Dark Mode has been set.','success');
      document.title='TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title='Install TextUtils'
      // }, 1000);
      // setInterval(() => {
      //   document.title='It is amazing'
      // }, 1500); /* Used for blinking*/
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  const showAlert = (msg,typ) => 
  {
    setAlert({
      message: msg,
      type:typ
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>  
    <BrowserRouter>
    <Navbar title="TextUtils" aboutUs="About TextUtils" mode= {mode} toggleMode={toggleMode} showAlert={showAlert}/>
    <Alert alert={alert}/>
   
    <Routes>
    <Route exact path='/' element={<TextForm heading='Enter a text to change' mode = {mode} showAlert={showAlert}/>}></Route>
    <Route exact path='/about' element={<About mode={mode}/>}> </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
