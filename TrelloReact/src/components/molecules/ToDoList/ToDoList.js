import Button from '../../atoms/Button';
import ToDoListItem from '../../atoms/ToDoListItem/ToDoListItem';
import Header from "../../atoms/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoList = (props) => {
    const {list, remove, hasChanged, checked} = props;
    return (
        <>
            <Header hasChanged={hasChanged}>List of tasks</Header>
            <ul>
                <div class={"d-flex flex-column my-lg-3 m-lg-3"}>
                    {list.map((listItem, i) => (
                        <>
                            <div class={"d-flex my-lg-3 m-lg-3"}>
                                <ToDoListItem id={listItem.id} checked={checked}>
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