
import { Button, Container, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  footerStyle = {
    // backgroundColor: "#333",
    // color: "white",
    textAlign: "center",
    padding: "10px",
    position: "relative",
    bottom: "0",
    width: "100%",
    borderTop: '1px solid rgb(128, 10, 196)',


  };

  navDivStyle = {
    textAlign: 'center',
    borderBottom: '1px solid rgb(128, 10, 196)',
  };


  contentDivStyle = {
    content: 'flex',
    flex: '1'
  };
  

  pageWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };



  render() {
    return (
      <div className='app-conten' style={this.pageWrapperStyle}>
        <div className='header' style={this.navDivStyle}>
          <Navbar>
            <Container>
              <Navbar.Brand href="#">Pas Vault</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        
        <div className="page-content" style={this.contentDivStyle}>
          <h1>Page Content</h1>
        </div>


        <div className="footer" style={this.footerStyle}>
          <h1>this is my footer</h1>
        </div>
      </div>
    );
  }



}

export default App;
