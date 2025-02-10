import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { fetchCredCategory, createCredCat } from '../service/passVaultService';
import '../css/CredCategory.css';
import TableComponent from "./TableComponent";
import CustomFormInput from "./CustomFormInput";

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
        this.setState({ credCategory: data });
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
        this.setState({ credCategory: data });
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

    tableHeader = [
        { key: 'id', label: 'ID' },
        { key: 'cid', label: 'Credential Category' },
        { key: 'description', label: 'Description' },
        { key: 'action', label: 'Action' }
    ]


    render() {
        return (
            <div className="container" >
                {
                    this.state.showModal && (
                        <div className="modal-content">
                            <Row>
                                <Col md={6}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'Credential category'} inputName={'cid'} stateVal={this.state.credCategoryReq.cid} onChangeHandler={this.handleInputChange} />
                                </Col>

                                <Col md={6}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'Credential Description'} inputName={'description'} stateVal={this.state.credCategoryReq.description} onChangeHandler={this.handleInputChange} />
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
                            <TableComponent onEdit={this.handleEdit} onDelete={this.handleDelete} columns={this.tableHeader} data={this.state.credCategory} />

                        </div>

                    )}

            </div>
        )
    }
}

export default CredCategory