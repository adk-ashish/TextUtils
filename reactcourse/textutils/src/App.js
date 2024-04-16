import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const toggleMode = () => {
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
    </BrowserRouter>
  );
}

export default App;
