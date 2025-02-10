import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { fetchCredLoginTypes, createCredLoginType } from '../service/passVaultService';
import '../css/CredSubCategory.css';
import { FaEdit, FaTrash } from "react-icons/fa";
import TableComponent from "./TableComponent";
import CustomFormInput from "./CustomFormInput";

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

    tableHeader = [
        { key: 'id', label: 'ID' },
        { key: 'type', label: 'Login Type' },
        { key: 'description', label: 'Description' },
        { key: 'action', label: 'Action' }
    ]

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
            <div className="container" >
                {
                    this.state.showModal && (
                        <div className="modal-content">
                            <Row>
                                <Col md={6}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'Login Type'} inputName={'type'} stateVal={this.state.loginTypeReq.type} onChangeHandler={this.handleInputChange} />
                                </Col>
                                <Col md={6}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'Description'} inputName={'description'} stateVal={this.state.loginTypeReq.description} onChangeHandler={this.handleInputChange} />
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
                            <TableComponent onEdit={this.handleEdit} onDelete={this.handleDelete} columns={this.tableHeader} data={this.state.loginType} />


                        </div>

                    )}

            </div>
        )
    }
}

export default LoginType