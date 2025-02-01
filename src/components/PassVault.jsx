import React from "react";
import { Button, Container, Form, Nav, Navbar, Offcanvas, Table } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import '../css/PassVault.css';  // Import CSS from the css folder


class PassVault extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [
                { id: 1, name: 'John Doe', age: 28, occupation: 'Engineer' },
                { id: 2, name: 'Jane Smith', age: 34, occupation: 'Doctor' },
                { id: 3, name: 'Sam Brown', age: 45, occupation: 'Teacher' },
                { id: 4, name: 'Sara White', age: 22, occupation: 'Student' },
            ],
            showSidebar: false // State to toggle the sidebar
        }
    }



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
                                        <NavLink className="nav-link" to="/" >
                                            Cred Category
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/passvault">
                                            Manage Credential
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/docvault">
                                            Doc Vault
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about">
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact" >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div className="main-content">
                    <Container fluid>
                        <Outlet />
                    </Container>
                </div>
            </div>
        )
    }
}

export default PassVault;