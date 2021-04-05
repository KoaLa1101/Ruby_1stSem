import styled from 'styled-components';

const StyledListItem = styled.li`
  min-width: 300px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const ToDoListItem = (props) => {
  const { children } = props;
  return <li>{children}</li>;
};

export default ToDoListItem;
