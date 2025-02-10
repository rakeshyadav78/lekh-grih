import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { fetchCredentials, fetchCredCategory, fetchCredSubCategory, fetchCredLoginTypes, createCred } from '../service/passVaultService';
import { FaEdit, FaTrash } from "react-icons/fa";
import '../css/ManageCred.css';
import { data } from "react-router-dom";
import TableComponent from "./TableComponent";
import CustomFormSelect from "./CustomFormSelect";
import CustomFormInput from "./CustomFormInput";

class ManageCred extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            credData: [],
            credCategory: [],
            credSubCategory: [],
            loginTypes: [],
            showModal: false,
            credVault: {
                type: '',
                userName: '',
                ccid: '',
                cscid: '',
                type: '',
                orgName: '',
                mobNum: '',
                email: '',
                pass1: '',
                pass2: '',
                pin: '',
                mpin: '',
                otp: '',
                totp: '',
                info1: '',
                info2: '',
                info3: '',

            }
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log('name : ' + name + ',value : ' + value);

        this.setState(prevState => ({
            credVault: {
                ...prevState.credVault,
                [name]: value
            }
        }));
    }


    async componentDidMount() {
        const resp = await fetchCredentials();
        console.log('credential response : ' + resp)
        this.setState({ credData: resp })
        await this.getCredCategory()
        await this.getSubCredCategory()
        await this.getCredLoginTypes()
    }

    handleEdit = (id) => {
        console.log('Updating : ' + id)
    }

    handleDelete = (id) => {
        console.log('Deleting : ' + id)
    }

    showForm = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal,
            credVault: {
                type: '',
                userName: '',
                ccid: '',
                cscid: '',
                type: '',
                orgName: '',
                mobNum: '',
                email: '',
                pass1: '',
                pass2: '',
                pin: '',
                mpin: '',
                otp: '',
                totp: '',
                info1: '',
                info2: '',
                info3: '',

            }
        }))
    }

    tableColumns = [
        { label: 'ID', key: 'id' },
        { label: 'Vault User ID', key: 'userName' },
        { label: 'Category', key: 'ccid' },
        { label: 'Sub-Category', key: 'cscid' },
        { label: 'Login Type', key: 'type' },
        { label: 'Institution Name', key: 'orgName' },
        { label: 'Mobile No', key: 'mobNum' },
        { label: 'Email', key: 'email' },
        { label: 'Pass1', key: 'pass1' },
        { label: 'Pass2', key: 'pass2' },
        { label: 'Pin', key: 'pin' },
        { label: 'Mpin', key: 'mpin' },
        { label: 'OTP', key: 'otp' },
        { label: 'T-OTP', key: 'totp' },
        { label: 'Info1', key: 'info1' },
        { label: 'Info2', key: 'info2' },
        { label: 'Info3', key: 'info3' },
        { label: 'Created', key: 'createdTime' },
        { label: 'Updated', key: 'updatedTime' },
        { label: 'Action', key: 'action' },
    ]


    viewData = async () => {
        const data = await fetchCredentials();
        this.setState({ credData: data })
        this.showForm()
    }

    createCreds = async () => {
        const credVaultReq = JSON.stringify(this.state.credVault);
        console.log('cred data : ' + credVaultReq)
        await createCred(credVaultReq)
        this.viewData()
    }

    getCredCategory = async () => {
        const category = await fetchCredCategory();
        this.setState({ credCategory: category })
    }

    getSubCredCategory = async () => {
        const subCategory = await fetchCredSubCategory();
        console.log('cred category data ' + JSON.stringify(subCategory))
        this.setState({ credSubCategory: subCategory })
    }

    getCredLoginTypes = async () => {
        const loginTypesData = await fetchCredLoginTypes();
        this.setState({ loginTypes: loginTypesData })
    }

    credCategoryContentStyle = {
        margin: '10px'
    }
    handleSelectChange = (e) => {
        console.log('selected value : ' + e.target.value + ' ,name : ' + e.target.name)
    }

    tableHeader = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'price', label: 'Price' },
        { key: 'category', label: 'Category' },
        { key: 'quantity', label: 'Quantity' },
        { key: 'rating', label: 'Rating' },
    ]

    render() {

        const loginTypeData = this.state.loginTypes.map(option => option.type)
        const catData = this.state.credCategory.map(option => option.cid)
        const subCatData = this.state.credSubCategory.map(option => option.scid)


        return (
            <div className="credvault-content">

                {
                    this.state.showModal && (
                        <div className="modal-content">
                            <Row>

                                <Col md={3}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'Username'} inputName={'userName'} stateVal={this.state.credVault.userName} onChangeHandler={this.handleInputChange} />
                                </Col>

                                <Col md={3}>
                                    <CustomFormSelect data={catData} inputName={'ccid'} onChangeHandler={this.handleInputChange} placeholderVal={'Category'} />
                                </Col>

                                <Col md={3}>
                                    <CustomFormSelect data={subCatData} inputName={'cscid'} onChangeHandler={this.handleInputChange} placeholderVal={'Sub-Category'} />
                                </Col>

                                <Col md={3}>
                                    <CustomFormSelect data={loginTypeData} inputName={'type'} onChangeHandler={this.handleInputChange} placeholderVal={'Login Type'} />
                                </Col>
                            </Row>

                            <Row>
                                <Col md={3}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'Institution'} inputName={'orgName'} stateVal={this.state.credVault.orgName} onChangeHandler={this.handleInputChange} />
                                </Col>

                                <Col md={3}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'Mobile No'} inputName={'mobNum'} stateVal={this.state.credVault.mobNum} onChangeHandler={this.handleInputChange} />
                                </Col>

                                <Col md={3}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'Email'} inputName={'email'} stateVal={this.state.credVault.email} onChangeHandler={this.handleInputChange} />
                                </Col>

                                <Col md={3}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'Pass1'} inputName={'pass1'} stateVal={this.state.credVault.pass1} onChangeHandler={this.handleInputChange} />
                                </Col>
                            </Row>

                            <Row>
                                <Col md={3}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'Pass2'} inputName={'pass2'} stateVal={this.state.credVault.pass2} onChangeHandler={this.handleInputChange} />
                                </Col>

                                <Col md={3}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'Pin'} inputName={'pin'} stateVal={this.state.credVault.pin} onChangeHandler={this.handleInputChange} />
                                </Col>

                                <Col md={3}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'M-Pin'} inputName={'mpin'} stateVal={this.state.credVault.mpin} onChangeHandler={this.handleInputChange} />
                                </Col>

                                <Col md={3}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'OTP'} inputName={'otp'} stateVal={this.state.credVault.otp} onChangeHandler={this.handleInputChange} />
                                </Col>
                            </Row>

                            <Row>

                                <Col md={3}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'T-OTP'} inputName={'totp'} stateVal={this.state.credVault.totp} onChangeHandler={this.handleInputChange} />
                                </Col>

                                <Col md={3}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'Info1'} inputName={'info1'} stateVal={this.state.credVault.info1} onChangeHandler={this.handleInputChange} />
                                </Col>

                                <Col md={3}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'Info2'} inputName={'info2'} stateVal={this.state.credVault.info2} onChangeHandler={this.handleInputChange} />
                                </Col>

                                <Col md={3}>
                                    <CustomFormInput inputType={'text'} placeholderVal={'Info3'} inputName={'info3'} stateVal={this.state.credVault.info3} onChangeHandler={this.handleInputChange} />
                                </Col>
                            </Row>

                            <Row className="d-flex justify-content-center mt-3">
                                <Col xs="auto">
                                    <Button variant="info" className="mx-2" onClick={this.viewData}>View Data</Button>
                                </Col>
                                <Col xs="auto">
                                    <Button variant="success" className="mx-2" onClick={this.createCreds}>Submit</Button>
                                </Col>
                            </Row>
                        </div>
                    )}

                {
                    !this.state.showModal && (
                        <div>
                            <div className="modelbtn" style={this.credCategoryContentStyle}>
                                <Button variant="primary" onClick={this.showForm}>
                                    Add Credential
                                </Button>
                            </div>
                            <div className="cred-data">
                                <TableComponent onEdit={this.handleEdit} onDelete={this.handleDelete} columns={this.tableColumns} data={this.state.credData} />

                            </div>
                        </div>
                    )
                }

            </div>

        )
    }
}

export default ManageCred