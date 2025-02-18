import { Form } from "react-bootstrap";

const CustomFormInput = ({ inputType, placeholderVal, inputName, stateVal, onChangeHandler,isReadOnly }) => {
    return (
        <Form.Group controlId={inputName}>
            <Form.Label>{placeholderVal}</Form.Label>
            <Form.Control
                type={inputType}
                placeholder={placeholderVal}
                name={inputName}
                value={stateVal}
                onChange={onChangeHandler}
                readOnly={isReadOnly}
            />
        </Form.Group>
    )
}

export default CustomFormInput;