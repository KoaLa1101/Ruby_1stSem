import {Link} from 'react-router-dom'
import styled from 'styled-components';

const StyledToDoListItem = styled.li(
    ({checked}) => `
  min-width: 300px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  
  a {
    text-decoration: ${checked ? 'line-through' : 'none'};
    color: ${checked ? 'grey' : 'inherit'};
  }
`,
);

const ToDoListItem = (props) => {
    const {children, id, checked} = props;
    return (
        <div>
            <StyledToDoListItem checked={checked}>
                <Link to={`/tasks/${id}`}>
                    {children}
                </Link>
            </StyledToDoListItem>
        </div>

    )
}

export default ToDoListItem;