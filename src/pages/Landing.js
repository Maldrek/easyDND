import React, { Component } from 'react';
import Jumbo1 from '../landingComponents/Jumbotron1';
import NavBar from '../landingComponents/NavBar';
import Parallax1 from '../landingComponents/Parallax1';
import Parallax2 from '../landingComponents/Parallax2';
import Info from '../landingComponents/Info1';
import Jumbo2 from '../landingComponents/Jumbotron2';
import SignUpModal from '../landingComponents/SignUp';
import LoginModal from '../landingComponents/Login';
import '../App.css';
import 'tachyons';

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <SignUpModal />
        <LoginModal />
        <NavBar />
        <Jumbo1 />
        <Parallax1 />
        <Info />
        <Parallax2 />
        <Jumbo2 />
      </div>
    );
  }
}

export default Landing;