import React from "react";
import AuthContext from "./AuthContext";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { decryptAes } from "../service/aesUtil";

class LoginPage extends React.Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props)

        this.state = {
            loginReq: {
                userId: '',
                pass1: ''
            },
            error: ''
        }
    }

    loginHandler = async (e) => {
        console.log('loginHandler')
        const aeskey = 'B459FA90B8E908B83156BB0254609A2E0E5C3D844ABC987524A6123BFAC89543'
        const aesEnc = 'ccc0dfecd7744ac46becfb42786f090e113dafd9ab8fd08b40bea5ac1551ff7675eb706177b69a40b492a98d2595e71d05ac2d158f1cdcf61dc609f654109f0dbafb169903a51ddaaeac8221eaf9751e'
        const data = decryptAes(aesEnc, aeskey)
        console.log('decrypted data : ' + data)
        e.preventDefault();
        const { userId, pass1 } = this.state.loginReq;

        if (!userId || !pass1) {
            this.setState({ error: 'User Id & Password required' });
        } else {
            this.setState({ error: '' });
            console.log('Form submitted:', { userId, pass1 });
            const errorMsg = await this.context.login(this.state.loginReq)
            this.setState({ error: errorMsg });
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            loginReq: {
                ...prevState.loginReq,
                [name]: value
            }
        }));
    };



    render() {
        const { userId, password } = this.state.loginReq;
        const { error } = this.state;

        return (
            <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <Row className="w-100">
                    <Col md={6} lg={4} className="mx-auto">
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Login</h2>
                                {error && <div className="alert alert-danger">{error}</div>}
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="userId">
                                        <Form.Label>User ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your userid"
                                            name="userId"
                                            value={userId}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="pass1" className="mt-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter your password"
                                            name="pass1"
                                            value={password}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>

                                    <Button variant="primary" onClick={this.loginHandler} className="w-100 mt-4">
                                        Login
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LoginPage;