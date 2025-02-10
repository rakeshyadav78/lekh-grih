import { Form } from "react-bootstrap";

const CustomFormInput = ({ inputType, placeholderVal, inputName, stateVal, onChangeHandler }) => {
    return (
        <Form.Group controlId={inputName}>
            <Form.Label>Credential Description</Form.Label>
            <Form.Control
                type={inputType}
                placeholder={placeholderVal}
                name={inputName}
                value={stateVal}
                onChange={onChangeHandler}
            />
        </Form.Group>
    )
}

export default CustomFormInput;