import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor='rgb(59 64 170)'
      showAlert('Dark Mode has been set.','success');
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
    <Navbar title="TextUtils" aboutUs="About TextUtils" mode= {mode} toggleMode={toggleMode} showAlert={showAlert}/>
    <Alert alert={alert}/>
    <div className='container'>
    <TextForm heading='Enter a text to change' mode = {mode} showAlert={showAlert}/>
    </div>
    {/* <About/> */}
    </>
  );
}

export default App;
