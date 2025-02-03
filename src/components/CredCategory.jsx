import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { fetchCredCategory, createCredCat } from '../service/passVaultService';
import CredCategoryCreateModal from "./CredCategoryCreateModal";
import '../css/CredCategory.css';
import { FaEdit, FaTrash } from "react-icons/fa";

class CredCategory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            credCategory: [],
            showModal: false,
            credCategoryReq: {
                cid: '',
                description: ''
            },
        }
    }

    async componentDidMount() {
        const data = await fetchCredCategory();
        console.log('component did mount : ', data)
        this.setState({ credCategory: data }); // Update state with fetched data
    }

    openModal = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal,
            credCategoryReq: {
                cid: '',
                description: ''
            }
        }));
    };

    viewData = async () => {
        const data = await fetchCredCategory();
        this.setState({ credCategory: data }); // Update state with fetched data
        this.openModal()
    }

    createCategory = async () => {
        console.log('callinga api')
        const resp = await createCredCat(this.state.credCategoryReq.cid, this.state.credCategoryReq.description);
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
            credCategoryReq: {
                ...prevState.credCategoryReq,
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
                                        <Form.Label>Credential category</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Credential category"
                                            name="cid"
                                            value={this.state.credCategoryReq.cid}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formInput1">
                                        <Form.Label>Credential Description</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Credential Description"
                                            name="description"
                                            value={this.state.credCategoryReq.description}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="d-flex justify-content-center mt-3">
                                <Col xs="auto">
                                    <Button variant="info" className="mx-2" onClick={this.viewData}>View Category</Button>
                                </Col>
                                <Col xs="auto">
                                    <Button variant="success" className="mx-2" onClick={this.createCategory}>Submit</Button>
                                </Col>
                            </Row>
                        </div>
                    )}



                {
                    !this.state.showModal && (
                        <div>
                            <div className="modelbtn" style={this.credCategoryContentStyle}>
                                <Button variant="primary" onClick={this.openModal}>
                                    Add Category
                                </Button>
                            </div>
                            <Table bordered responsive className="text-center">
                                <thead>
                                    <tr>
                                        {/* <th>#</th> */}
                                        <th>ID</th>
                                        <th>Credential Category</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.credCategory.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.cid}</td>
                                            <td>{item.description}</td>
                                            <td>

                                                {/* <Button variant="warning" className="me-2" size="sm" eonClick={() => this.handleEdit(item.id)}>
                                                    <FaEdit size={8}/>
                                                </Button>
                                            
                                                <Button variant="danger" size="sm" onClick={() => this.handleDelete(item.id)}>
                                                    <FaTrash size={8}/>
                                                </Button> */}

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
                                                    style={{ cursor: 'pointer'}}
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

export default CredCategory