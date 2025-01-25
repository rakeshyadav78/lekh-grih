
import { Button, Container, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import Content from './Content';

class App extends React.Component {

  pageWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };



  render() {
    return (
      <div className='app-content' style={this.pageWrapperStyle}>
        <TopNavBar />
        <Content />
        <Footer />
      </div>
    );
  }



}

export default App;
