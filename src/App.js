import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import Faltu from './Faltu';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light") // Whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  function showAlert(type, message) {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  function toggleModes() {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(4 20 32)";
      document.body.style.color = "white";
      showAlert("success", " Dark Mode has been Enabled")
      
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("success", " Light Mode has been Enabled")
      document.getElementById("cardShadow").classList.add("shadow p-3 mb-5 my-4 bg-body rounded")
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Text-Manipulator" mode={mode} toggleMode={toggleModes} />
        <Alert alert={alert}></Alert>
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter text to analyze:" mode={mode} showAlert={showAlert} alert={alert} />}></Route>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>

        </Routes>
      </BrowserRouter>




      {/* <Faltu name = "Pranav" middle = "Pramod" surname="Shinde"/> */}


    </>
  );

}

// npm run start
// port -3000
export default App;
