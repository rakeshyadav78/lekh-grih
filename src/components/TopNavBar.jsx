import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import '../css/TopNavBar.css';  // Import CSS from the css folder



class TopNavBar extends React.Component {
    navDivStyle = {
        // textAlign: 'center',
        borderBottom: '1px solid rgb(128, 10, 196)',
    };

    getNavLinkStyles = (isActive) => ({
        color: isActive ? 'rgb(128, 10, 196)' : ' #000000'
    });

    render() {
        return (
            <div className='header' style={this.navDivStyle}>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="#" className="nav-brand">LekhGrih</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/" style={({ isActive }) => this.getNavLinkStyles(isActive)}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/passvault" style={({ isActive }) => this.getNavLinkStyles(isActive)}>
                                        Pas Vault
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/docvault" style={({ isActive }) => this.getNavLinkStyles(isActive)}>
                                        Doc Vault
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about" style={({ isActive }) => this.getNavLinkStyles(isActive)}>
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact" style={({ isActive }) => this.getNavLinkStyles(isActive)}>
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default TopNavBar;