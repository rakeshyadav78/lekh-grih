import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { fetchCredentials, fetchCredCategory, fetchCredSubCategory, fetchCredLoginTypes, createCred } from '../service/passVaultService';
import { FaEdit, FaTrash } from "react-icons/fa";
import '../css/ManageCred.css';
import { data } from "react-router-dom";
import TableComponent from "./TableComponent";

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
        { label: 'Created', key: 'created' }, 
        { label: 'Updated', key: 'updated' }, 
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

    getCredLoginTypes = async ()=>{
        const loginTypesData = await fetchCredLoginTypes();
        this.setState({loginTypes:loginTypesData})
    }

    credCategoryContentStyle = {
        margin: '10px'
    }
    handleSelectChange = (e) => {
        console.log('selected value : ' + e.target.value + ' ,name : ' + e.target.name)
    }

    tableHeader=[
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'price', label: 'Price' },
        { key: 'category', label: 'Category' },
        { key: 'quantity', label: 'Quantity' },
        { key: 'rating', label: 'Rating' },
      ]

    render() {
        return (
            <div className="credvault-content">

                {
                    this.state.showModal && (
                        <div className="modal-content">
                            <Row>
                                <Col md={3}>
                                    <Form.Group controlId="userName">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Username"
                                            name="userName"
                                            value={this.state.credVault.userName}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select aria-label="Default select example" name="ccid" onChange={this.handleInputChange}>
                                        <option value={''}>Select</option>
                                        {this.state.credCategory.map((option) => (
                                            <option key={option.cid} value={option.cid}>
                                                {option.cid}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Col md={3}>
                                    {/* <Form.Group controlId="cscid"> */}
                                    <Form.Label>Sub-Category</Form.Label>
                                    <Form.Select aria-label="Default select example" name="cscid" onChange={this.handleInputChange}>
                                        <option value={''}>Select</option>
                                        {this.state.credSubCategory.map((option) => (

                                            <option key={option.scid} value={option.scid}>
                                                {option.scid}
                                            </option>
                                        ))}
                                    </Form.Select>
                                    {/* </Form.Group> */}
                                </Col>
                                <Col md={3}>

                                <Form.Label>Sub-Category</Form.Label>
                                    <Form.Select aria-label="Default select example" name="type" onChange={this.handleInputChange}>
                                        <option value={''}>Select</option>
                                        {this.state.loginTypes.map((option) => (

                                            <option key={option.type} value={option.type}>
                                                {option.type}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Form.Group controlId="orgName">
                                        <Form.Label>Institution</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Institution"
                                            name="orgName"
                                            value={this.state.credVault.orgName}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group controlId="mobNum">
                                        <Form.Label>Mobile No</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Mobile No"
                                            name="mobNum"
                                            value={this.state.credVault.mobNum}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Email"
                                            name="email"
                                            value={this.state.credVault.email}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group controlId="pass1">
                                        <Form.Label>Pass1</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Pass1"
                                            name="pass1"
                                            value={this.state.credVault.pass1}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Form.Group controlId="pass2">
                                        <Form.Label>Pass2</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Pass2"
                                            name="pass2"
                                            value={this.state.credVault.pass2}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group controlId="pin">
                                        <Form.Label>Pin</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Pin"
                                            name="pin"
                                            value={this.state.credVault.pin}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group controlId="mpin">
                                        <Form.Label>M-Pin</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="M-Pin"
                                            name="mpin"
                                            value={this.state.credVault.mpin}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group controlId="otp">
                                        <Form.Label>OTP</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="OTP"
                                            name="otp"
                                            value={this.state.credVault.otp}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>

                                <Col md={3}>
                                    <Form.Group controlId="totp">
                                        <Form.Label>T-OTP</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="T-OTP"
                                            name="totp"
                                            value={this.state.credVault.totp}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group controlId="info1">
                                        <Form.Label>Info1</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Info1"
                                            name="info1"
                                            value={this.state.credVault.info1}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group controlId="info2">
                                        <Form.Label>Info2</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Info2"
                                            name="info2"
                                            value={this.state.credVault.info2}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>

                                </Col>
                                <Col md={3}>
                                    <Form.Group controlId="info3">
                                        <Form.Label>Info3</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Info3"
                                            name="info3"
                                            value={this.state.credVault.info3}
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

                                {/* <Table bordered responsive className="text-center">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>ID</th>
                                            <th>Vault User ID</th>
                                            <th>Category</th>
                                            <th>Sub-Category</th>

                                            <th>Login Type</th>
                                            <th>Institution Name</th>
                                            <th>Mobile No</th>
                                            <th>Email</th>

                                            <th>Pass1</th>
                                            <th>Pass2</th>
                                            <th>Pin</th>
                                            <th>Mpin</th>

                                            <th>OTP</th>
                                            <th>T-OTP</th>
                                            <th>Info1</th>
                                            <th>Info2</th>

                                            <th>Info3</th>
                                            <th>Created</th>
                                            <th>Updated</th>
                                            <th>Action</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.credData.map((cred, index) => (
                                            <tr key={cred.id}>
                                                <td>{index + 1}</td>
                                                <td>{cred.id}</td>
                                                <td>{cred.userName}</td>
                                                <td>{cred.ccid}</td>
                                                <td>{cred.cscid}</td>

                                                <td>{cred.type}</td>
                                                <td>{cred.orgName}</td>
                                                <td>{cred.mobNum}</td>
                                                <td>{cred.email}</td>

                                                <td>{cred.pass1}</td>
                                                <td>{cred.pass2}</td>
                                                <td>{cred.pin}</td>
                                                <td>{cred.mpin}</td>

                                                <td>{cred.otp}</td>
                                                <td>{cred.totp}</td>
                                                <td>{cred.info1}</td>
                                                <td>{cred.info2}</td>

                                                <td>{cred.info3}</td>
                                                <td>{cred.createdTime}</td>
                                                <td>{cred.updatedTime}</td>
                                                <td><span
                                                    onClick={() => this.handleEdit(cred.id)}
                                                    className="me-2 text-warning"
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <FaEdit size={16} />
                                                </span>
                                                    <span
                                                        onClick={() => this.handleDelete(cred.id)}

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
                                {/* <TableComponent data={this.state.credData}, columns/> */}
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