import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import React, { useState } from 'react';

const defaultValue = "";
const ToDoForm = ({disabled, onSubmit}) => {
    const [value, setValue] = useState(defaultValue);

    const handleSubmit = () => {
        onSubmit(value);
        setValue(defaultValue);
    };


    return (
        <>
            <Input onChange={setValue} value={value} />
            <Button onClick={handleSubmit}>Add!</Button>
            <br />
            {/* <Input disabled />
      <Button disabled >Disabled</Button> */}
        </>
    );
}
export default ToDoForm;