import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { fetchCredSubCategory, createSubCredCat, deleteCredSubCategory } from '../service/passVaultService';
import '../css/CredSubCategory.css';
import { FaEdit, FaTrash } from "react-icons/fa";
import TableComponent from "./TableComponent";
import CustomFormInput from "./CustomFormInput";

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

    tableHeader = [
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

    handleDelete = async (data) => {
        console.log('Deleting : ' + data.id)
        await deleteCredSubCategory(data.id)
        const scdata = await fetchCredSubCategory();
        this.setState({ credSubCategory: scdata });
    }

    render() {
        return (
            <div className="container mt-5" >
                {
                    this.state.showModal && (
                        <div className="modal-content">
                            <Row>
                                <Col md={6}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'Sub category'} inputName={'scid'} stateVal={this.state.credSubCategoryReq.scid} onChangeHandler={this.handleInputChange} />
                                </Col>
                               
                                <Col md={6}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'Description'} inputName={'description'} stateVal={this.state.credSubCategoryReq.description} onChangeHandler={this.handleInputChange} />
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


                        </div>

                    )}

            </div>
        )
    }
}

export default CredSubCategory