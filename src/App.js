import React from 'react'
import Home from './Components/home/Home.js'
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import About from "./Components/about"
function App() {

  React.useEffect(() => {
    AOS.init(
      {
        duration: 1500
      }
    );


  }, [])
  const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <a className="navbar-brand header-font logo-hover" href="#">
          Harsh Joshi
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end" >
            <li className="nav-item mx-2">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#about">Skills</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#about">Projects</a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link " href="#contact">Contact</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>

  );

  return (
    <div className="App">
      <Nav />
      <div className="container h-100">
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
