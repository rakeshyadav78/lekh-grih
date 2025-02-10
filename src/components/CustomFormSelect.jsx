import { Form } from "react-bootstrap";

const CustomFormSelect = ({ data, placeholderVal, inputName, onChangeHandler }) => {
    return (
        <Form.Group controlId={inputName}>
            <Form.Label>{placeholderVal}</Form.Label>
            <Form.Select aria-label="Default select example" name={inputName} onChange={onChangeHandler}>
                <option value={''}>Select</option>
                {data.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
    )
}

export default CustomFormSelect;