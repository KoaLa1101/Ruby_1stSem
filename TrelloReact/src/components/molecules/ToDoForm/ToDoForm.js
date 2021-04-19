import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import React, {useState} from 'react';

const defaultValue = "";
const ToDoForm = ({disabled, onSubmit}) => {
    const [value, setValue] = useState(defaultValue);

    const handleSubmit = () => {
        onSubmit(value);
        setValue(defaultValue);
    };


    return (
        <>
            <div class={"d-flex align-items-center"}>
                <Input disable={disabled} onChange={setValue} value={value} class={"form-control"} placeholder={"Input task"}/>
                <Button primary disabled={disabled || !value} onClick={handleSubmit}
                        class={"btn btn-outline-success btn-success"}>Add!</Button>
                <br/>
            </div>
        </>
    );
}
export default ToDoForm;