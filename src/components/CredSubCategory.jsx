import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { fetchCredSubCategory, createSubCredCat } from '../service/passVaultService';
import '../css/CredSubCategory.css';
import { FaEdit, FaTrash } from "react-icons/fa";
import TableComponent from "./TableComponent";

class CredSubCategory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            credSubCategory: [],
            showModal: false,
            credSubCategoryReq: {
                scid: '',
                description: ''
            },
        }
    }

    tableHeader=[
        { key: 'id', label: 'ID' },
        { key: 'scid', label: 'Credential Sub-Category' },
        { key: 'description', label: 'Description' },
        { key: 'action', label: 'Action' }
      ]

    async componentDidMount() {
        const data = await fetchCredSubCategory();
        console.log('component did mount : ', data)
        this.setState({ credSubCategory: data }); 
    }

    openModal = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal,
            credSubCategoryReq: {
                scid: '',
                description: ''
            }
        }));
    };

    viewData = async () => {
        const data = await fetchCredSubCategory();
        this.setState({ credSubCategory: data });
        this.openModal()
    }

    createSubCategory = async () => {
        console.log('callinga api')
        const resp = await createSubCredCat(this.state.credSubCategoryReq.scid, this.state.credSubCategoryReq.description);
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
            credSubCategoryReq: {
                ...prevState.credSubCategoryReq,
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
            <div className="container mt-5" >
                {
                    this.state.showModal && (
                        <div className="modal-content">
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="formInput1">
                                        <Form.Label>Sub category</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Sub category"
                                            name="scid"
                                            value={this.state.credSubCategoryReq.scid}
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
                                            value={this.state.credSubCategoryReq.description}
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
                                    <Button variant="success" className="mx-2" onClick={this.createSubCategory}>Submit</Button>
                                </Col>
                            </Row>
                        </div>
                    )}



                {
                    !this.state.showModal && (
                        <div>
                            <div className="modelbtn" style={this.credCategoryContentStyle}>
                                <Button variant="primary" onClick={this.openModal}>
                                    Add Sub-Category
                                </Button>
                            </div>

                            <TableComponent onEdit={this.handleEdit} onDelete={this.handleDelete} columns={this.tableHeader} data={this.state.credSubCategory} />

                            {/* <Table bordered responsive className="text-center">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Credential Sub-Category</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.credSubCategory.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.scid}</td>
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
                            </Table> */}
                        </div>

                    )}

            </div>
        )
    }
}

export default CredSubCategory