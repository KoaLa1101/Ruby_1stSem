import Button from '../../atoms/Button';
import ToDoListItem from '../../atoms/ToDoListItem/ToDoListItem';
import Header from "../../atoms/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoList = (props) => {
    const { list, onRemove, hasChanged } = props;
    return (
        <>
            <Header hasChanged={hasChanged}>List of tasks</Header>
            <ul>
                {list.map((listItem, i) => (
                    <ToDoListItem id={listItem.id}>
                        {listItem.text}
                        <Button onClick={() => onRemove(i)} class={"btn btn-outline-danger my-lg-3"}>
                            remove
                        </Button>
                    </ToDoListItem>
                ))}
            </ul>
        </>
    );
}

export default ToDoList;