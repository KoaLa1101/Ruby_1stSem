import styled from 'styled-components';
import Button from '../../atoms/Button';
import ToDoListItem from '../../atoms/ToDoListItem/ToDoListItem';
import Header from "../../atoms/Header";
/*
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
`;*/

const ToDoList = (props) => {
    const { list, onRemove, hasChanged } = props;
    return (
        <>
            <Header hasChanged={hasChanged}>List of tasks</Header>
            <ul>
                {list.map((listItem, i) => (
                    <ToDoListItem>
                        {listItem.text}
                        <Button onClick={() => onRemove(i)}>
                            [X]
                        </Button>
                    </ToDoListItem>
                ))}
            </ul>
        </>
    );
}

export default ToDoList;