import React from "react";
import AuthContext from "./AuthContext";
import { Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";

class LoginPage extends React.Component {
    static contextType = AuthContext;

    loginHandler = () => {
        console.log('loginHandler')
        this.context.login();
       console.log('user : '+this.context.authState.isLoggedIn)
    //    this.props.history.push('/user-dashboard');

        // window.location.href = '/user-dashboard'
    }

    logoutHandler = () => {
        console.log('logoutHandler')
        this.context.logout();
    }

    render() {
        return (
            <div >
                <Button className="primary" onClick={this.loginHandler}>Login</Button>
                <Button className="primary" onClick={this.logoutHandler}>Logout</Button>
            </div>
        );
    }
}

export default LoginPage;