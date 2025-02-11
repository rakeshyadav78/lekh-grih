import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../css/TopNavBar.css';  // Import your custom CSS file
import { FaUserCircle } from "react-icons/fa";

class TopNavBar extends React.Component {
    render() {
        return (
            <div className='header'>
                <Navbar className="navbar-custom">
                    <Container>
                        <Navbar.Brand className="nav-brand">LekhGrih</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="navbar-nav custom-navbar-links">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/passvault" >
                                        Pas Vault
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/docvault" >
                                        Doc Vault
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about" >
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact" >
                                        Contact
                                    </NavLink>
                                </li>

                            </Nav>

                            <Nav className="ml-auto">
                                <li className="nav-item">
                                    <Dropdown align="end">
                                        <Dropdown.Toggle
                                            variant="link"
                                            id="dropdown-custom-components"
                                            className="profile-link">
                                            <FaUserCircle size={30} /> {/* Profile Icon */}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item as={NavLink} to="/account">Account</Dropdown.Item>
                                            <Dropdown.Item as={NavLink} to="/logout">Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default TopNavBar;
