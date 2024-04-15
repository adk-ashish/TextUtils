import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import About from './components/About';

function App() {
  return (
    <>  
    <Navbar title="TextUtils" aboutUs="About TextUtils" />
    <div className='container'>
    <TextForm heading='Enter a text to change'/>
    </div>
    <About/>
    </>
    

  );
}

export default App;
