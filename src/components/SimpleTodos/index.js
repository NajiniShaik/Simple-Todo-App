import {Component} from 'react'

import TodosItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
  }

  onDeleteTodo = id => {
    const {todoList} = this.state
    const filteredList = todoList.filter(each => each.id !== id)

    this.setState({todoList: filteredList})
  }

  render() {
    const {todoList} = this.state

    return (
      <div className="bg-container">
        <div className="detailed-card">
          <h1 className="title">Simple Todos</h1>
          <ul className="todo-list">
            {todoList.map(eachTodo => (
              <TodosItem
                todoDetails={eachTodo}
                onDeleteTodo={this.onDeleteTodo}
                key={eachTodo.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
