import ToDoListItem from '../../atoms/ToDoListItem/ToDoListItem';
import Header from "../../atoms/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckBox from "../../atoms/Checkbox";

const ToDoList = (props) => {
    const {list, remove, hasChanged, onCheck} = props;
    return (
        <>
            <Header hasChanged={hasChanged}>List of ToDos</Header>
            <ul>
                <div class={"d-flex flex-column my-lg-3 m-lg-3"}>
                    {list.map((listItem, i) => (
                        <>
                            <div class={"d-flex my-lg-3 m-lg-3"}>
                                <CheckBox changeText={() => onCheck(listItem.id)}/>
                                <ToDoListItem id={listItem.id} checked={listItem.checked}>
                                    {listItem.text}
                                </ToDoListItem>
                                <a onClick={() => remove(i)} class={"btn btn-outline-danger my-lg-3 m-lg-3"}>
                                    remove
                                </a>
                            </div>
                        </>
                    ))}
                </div>
            </ul>
        </>
    );
}

export default ToDoList;