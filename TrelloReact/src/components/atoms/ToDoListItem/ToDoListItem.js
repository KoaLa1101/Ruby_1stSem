import { Link } from 'react-router-dom';


const ToDoListItem = (props) => {
  const { children, id } = props;
  return (
      <div>
        <Link to={`/tasks/${id}`}>{children}</Link>
      </div>
  )
}

export default ToDoListItem;