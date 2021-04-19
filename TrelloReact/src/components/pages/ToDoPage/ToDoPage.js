import {useState, useEffect} from 'react';
import ToDoList from '../../molecules/ToDoList';
import ToDoForm from '../../molecules/ToDoForm';
import Button from "../../atoms/Button";
import list from "../../../resoucers/list";
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultChangeValue = false;

let defaultList = list;


const ToDoPage = (props) => {
    const [list, setList] = useState(defaultList);
    const [hasChanged, changed] = useState(defaultChangeValue);
    const onAddNewListItem = (value) => {
        setList([...list, {text: value, id: list.length + 1}]);
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

    const saveList = () => {
        defaultList = list;
        changed(false);
    }

    const remove = (i) => {
        setList(list.filter((elem, index) => i !== index));
    }

    return (
        <>
            <ToDoList list={list} onRemove={remove} hasChanged={hasChanged}/>
            <ToDoForm onSubmit={onAddNewListItem}/>
            <Button onClick={resetList} class={"btn btn-outline-danger my-lg-3"}>Reset</Button>
            <Button onClick={saveList} class={"btn btn-outline-success my-lg-3"}>Save</Button>
        </>
    );
};

export default ToDoPage;
