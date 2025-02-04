import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { fetchCredLoginTypes, createCredLoginType } from '../service/passVaultService';
import '../css/CredSubCategory.css';
import { FaEdit, FaTrash } from "react-icons/fa";

class LoginType extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loginType: [],
            showModal: false,
            loginTypeReq: {
                type: '',
                description: ''
            },
        }
    }

    async componentDidMount() {
        const data = await fetchCredLoginTypes();
        console.log('component did mount : ', data)
        this.setState({ loginType: data }); 
    }

    openModal = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal,
            loginTypeReq: {
                type: '',
                description: ''
            }
        }));
    };

    viewData = async () => {
        const data = await fetchCredLoginTypes();
        this.setState({ loginType: data });
        this.openModal()
    }

    createLoginType = async () => {
        console.log('callinga api')
        const resp = await createCredLoginType(this.state.loginTypeReq.type, this.state.loginTypeReq.description);
        console.log('response-errorCode : ' + resp.errorCode);
    }

    credCategoryContentStyle = {
        margin: '10px'
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'cid' && value.length > 10) {
            console.log('cid input exceeds max length!');
            return;
        }

        if (name === 'description' && value.length > 50) {
            console.log('description input exceeds max length!');
            return;
        }


        this.setState(prevState => ({
            loginTypeReq: {
                ...prevState.loginTypeReq,
                [name]: value
            }
        }));
    }

    handleEdit = (cid) => {
        console.log('Updating : ' + cid)
    }

    handleDelete = (cid) => {
        console.log('Deleting : ' + cid)
    }

    render() {
        return (
            <div className="cred-category-content" >
                {
                    this.state.showModal && (
                        <div className="modal-content">
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="formInput1">
                                        <Form.Label>Login Type</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Login type"
                                            name="type"
                                            value={this.state.loginTypeReq.type}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formInput1">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Description"
                                            name="description"
                                            value={this.state.loginTypeReq.description}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="d-flex justify-content-center mt-3">
                                <Col xs="auto">
                                    <Button variant="info" className="mx-2" onClick={this.viewData}>View Data</Button>
                                </Col>
                                <Col xs="auto">
                                    <Button variant="success" className="mx-2" onClick={this.createLoginType}>Submit</Button>
                                </Col>
                            </Row>
                        </div>
                    )}



                {
                    !this.state.showModal && (
                        <div>
                            <div className="modelbtn" style={this.credCategoryContentStyle}>
                                <Button variant="primary" onClick={this.openModal}>
                                    Add Login Type
                                </Button>
                            </div>
                            <Table bordered responsive className="text-center">
                                <thead>
                                    <tr>
                                        {/* <th>#</th> */}
                                        <th>ID</th>
                                        <th>Login Type</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.loginType.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.type}</td>
                                            <td>{item.description}</td>
                                            <td>

                                                <span
                                                    onClick={() => this.handleEdit(item.id)}
                                                    className="me-2 text-warning"
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <FaEdit size={16} />
                                                </span>
                                                <span
                                                    onClick={() => this.handleDelete(item.id)}

                                                    className="text-danger"
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <FaTrash size={16} />
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>

                    )}

            </div>
        )
    }
}

export default LoginType