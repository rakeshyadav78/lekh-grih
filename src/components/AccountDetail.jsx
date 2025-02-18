import { Col, Container, Form, Row } from "react-bootstrap";
import { useMyContext } from "./AuthContext";

const AccountDetail = () => {
    const { authState } = useMyContext();
    return (
        <div>
            <Container className="mt-5">
                <h3>Account Data</h3>
                <Form>
                    {/* First Row: First Name, Middle Name, Last Name */}
                    <Row className="mb-3">
                        <Col md={4}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" value={authState.user.firstName} readOnly />
                        </Col>
                        <Col md={4}>
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control type="text" value={authState.user.midName} readOnly />
                        </Col>
                        <Col md={4}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" value={authState.user.lastName} readOnly />
                        </Col>
                    </Row>

                    {/* Second Row: Mobile Number 1, Mobile Number 2, Email 1 */}
                    <Row className="mb-3">
                        <Col md={4}>
                            <Form.Label>Mobile Number 1</Form.Label>
                            <Form.Control type="text" value={authState.user.mobNum1} readOnly />
                        </Col>
                        <Col md={4}>
                            <Form.Label>Mobile Number 2</Form.Label>
                            <Form.Control type="text" value={authState.user.mobNum2} readOnly />
                        </Col>
                        <Col md={4}>
                            <Form.Label>Email 1</Form.Label>
                            <Form.Control type="email" value={authState.user.email1} readOnly />
                        </Col>
                    </Row>

                    {/* Third Row: Email 2, User ID, Password 1 */}
                    <Row className="mb-3">
                        <Col md={4}>
                            <Form.Label>Email 2</Form.Label>
                            <Form.Control type="email" value={authState.user.email2} readOnly />
                        </Col>
                        <Col md={4}>
                            <Form.Label>User ID</Form.Label>
                            <Form.Control type="text" value={authState.user.userId} readOnly />
                        </Col>
                        <Col md={4}>
                            <Form.Label>Password 1</Form.Label>
                            <Form.Control type="text" value={authState.user.pass1} readOnly />
                        </Col>
                    </Row>

                    {/* Fourth Row: Password 2, Info 1, Info 2 */}
                    <Row className="mb-3">
                        <Col md={4}>
                            <Form.Label>Password 2</Form.Label>
                            <Form.Control type="text" value={authState.user.pass2} readOnly />
                        </Col>
                        <Col md={4}>
                            <Form.Label>Info 1</Form.Label>
                            <Form.Control type="text" value={authState.user.info1} readOnly />
                        </Col>
                        <Col md={4}>
                            <Form.Label>Info 2</Form.Label>
                            <Form.Control type="text" value={authState.user.info2} readOnly />
                        </Col>
                    </Row>

                    {/* Fifth Row: Info 3, Created Time, Updated Time */}
                    <Row className="mb-3">
                        <Col md={4}>
                            <Form.Label>Info 3</Form.Label>
                            <Form.Control type="text" value={authState.user.info3} readOnly />
                        </Col>
                        <Col md={4}>
                            <Form.Label>Created Time</Form.Label>
                            <Form.Control type="text" value={authState.user.createdTime} readOnly />
                        </Col>
                        <Col md={4}>
                            <Form.Label>Updated Time</Form.Label>
                            <Form.Control type="text" value={authState.user.updatedTime} readOnly />
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default AccountDetail;
