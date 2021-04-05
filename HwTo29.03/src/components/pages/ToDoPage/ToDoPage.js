import {useState, useEffect} from 'react';
import styled from 'styled-components';
import ToDoList from '../../molecules/ToDoList';
import ToDoForm from '../../molecules/ToDoForm';
import Button from "../../atoms/Button";

const defaultChangeValue = false;

let defaultList = [
    {text: 'do h/w'},
    {text: 'sleeeeeep'}
]

/*const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
`;*/

const ToDoPage = () => {
    const [list, setList] = useState(defaultList);
    const [hasChanged, changed] = useState(defaultChangeValue);
    const onAddNewListItem = (value) => {
        setList([...list, {text: value}]);
    };

    useEffect(() => {
        if (JSON.stringify(list) === JSON.stringify(defaultList)) {
            changed(false);
        } else {
            changed(true);
        }
    });

    const resetList = () => {
        setList(defaultList);
    }

    const onSaveList = () => {
        defaultList = list;
        changed(false);
    }

    const onRemove = (i) => {
        setList(list.filter((elem, index) => i !== index));
    }

    return (
        <>
            <ToDoList list={list} onRemove={onRemove} hasChanged={hasChanged}/>
            <ToDoForm onSubmit={onAddNewListItem}/>
            <Button onClick={resetList}>Reset</Button>
            <Button onClick={onSaveList}>Save</Button>
        </>
    );
};

export default ToDoPage;
