
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import Alert from './components/Alert';



  function App() {

    const [mode,setMode] = useState('#3FC1C9');

    const [alert,setAlert] = useState(null);

    const showAlert = (message,type) =>{
      setAlert({
        msg: message,
        typ: type
      });

      setTimeout(()=>{
        setAlert(null);
      },1500);

    }

    const toggleMode = () =>{
      if(mode==='#3FC1C9'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark Mode has been enabled", "success");
      }
      else{
        setMode('#3FC1C9');
        document.body.style.backgroundColor = '#F9F7F7';
        showAlert("Light Mode has been enabled", "success");
      }
    }

    return (
      <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
      
        <div className="container my-3">
            <TextForm heading="Try TextUtils - Word counter, Character counter, Remove extra spaces " mode={mode} showAlert={showAlert}/>
        </div>
      
  </>
    );
  }

Navbar.propTypes = {title: PropTypes.string.isRequired};

Navbar.defaultProps = {title: 'Set title here'};

export default App;
