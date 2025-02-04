import React from "react";
import { Button, Container, Form, Nav, Navbar, Offcanvas, Table } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import '../css/PassVault.css';  // Import CSS from the css folder

class PassVault extends React.Component {


 
    // getNavLinkStyles = (isActive) => ({
    //     color: isActive ? 'rgb(128, 10, 196)' : 'rgb(0, 0, 0)'
    // });

    render() {
        return (
            <div className="app-container">


                <div className="passvalut-navbar">
                    <Navbar className="passvault-navbar-custom">
                        <Container>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <ul className="navbar-nav passvault-navbar-custom-link">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="credCategory" >
                                            Credential Category
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="credSubCategory">
                                            Credential Sub Category
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="loginType">
                                           Login Types
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="manageCred">
                                            Manage Credential
                                        </NavLink>
                                    </li>
                                </ul>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div className="main-content">
                    {/* <Container fluid> */}
                        <Outlet />
                    {/* </Container> */}
                </div>
            </div>
        )
    }
}

export default PassVault;