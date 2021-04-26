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

    const handleCheck = (ev, i) => {
        const {
            target: { checked },
        } = ev;
        setList((currentList) => currentList.map((listItem, index) => (i === index ? { ...listItem, checked } : listItem)));
    };


    return (
        <>
            <ToDoList list={list} remove={remove} hasChanged={hasChanged}/>
            <ToDoForm onSubmit={onAddNewListItem}/>
            <div class={"d-flex align-items-center"}>
                <a onClick={saveList} class={"btn btn-outline-success my-lg-3 m-lg-3"}>Save</a>
                <a onClick={resetList} class={"btn btn-outline-danger my-lg-3 m-lg-3"}>Reset</a>
            </div>
        </>
    );
};

export default ToDoPage;
