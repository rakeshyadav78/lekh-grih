import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


class TopNavBar extends React.Component {
    navDivStyle = {
        // textAlign: 'center',
        borderBottom: '1px solid rgb(128, 10, 196)',
    };

    render() {
        return (
            <div className='header' style={this.navDivStyle}>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="#">Pas Vault</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/passvault">
                                        Pas Vault
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/docvault">
                                        Doc Vault
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
        )
    }
}

export default TopNavBar;