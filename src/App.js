import React, { Component } from "react";
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './Projects';


class App extends Component {
  render() {
    return (
      <div className="App">

        <NavBar />

      
      <About className='About'/>
      

        <Projects
          title="Projects"
          subtitle= {Projects}
          id="Projects"
        />
      </div>

    );
  }
}

export default App;

