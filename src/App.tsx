import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './sections/contact';
import Home from './sections/home';
import AboutMe from './sections/aboutme';
import Projects from './sections/projects';

export default class App extends Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    );
  }
}
