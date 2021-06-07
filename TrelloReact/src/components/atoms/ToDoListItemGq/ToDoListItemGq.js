import {Link} from 'react-router-dom'
import styled from 'styled-components';

const StyledToDoListItemGq = styled.li(
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

const ToDoListItemGq = (props) => {
    const {children, id, checked} = props;
    return (
        <div>
            <StyledToDoListItemGq checked={checked}>
                <Link to={`/gq/${id}`}>
                    {children}
                </Link>
            </StyledToDoListItemGq>
        </div>

    )
}

export default ToDoListItemGq;