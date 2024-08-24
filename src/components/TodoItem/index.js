import './index.css'

const TodosItem = props => {
  const {todoDetails, onDeleteTodo} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="todo-description">{title}</p>
      <button className="button" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodosItem
