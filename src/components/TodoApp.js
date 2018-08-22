import React from 'react'

import TodoList from './TodoList'
import TodoCard from './TodoCard'

class TodoApp extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Todo Title',
        items: [
          {
            id: 1,
            text: 'Some todo item',
            completed: false,
          },
          {
            id: 3,
            text: 'And some more todo item',
            completed: true,
          },
        ],
      },
      {
        id: 2,
        title: 'Second Todo Title',
        items: [
          {
            id: 1,
            text: 'Is some todo item',
            completed: true,
          },
          {
            id: 3,
            text: 'Also some more todo item',
            completed: true,
          },
        ],
      },
    ],
  }
  render() {
    const { todos } = this.state
    const renderCards = () => {
      return todos.map(todo => {
        return (
          <TodoCard key={todo.id} card={todo} />
        )
      })
    }

    return (
      <div className="container">
         { renderCards() }
      </div>
    )
  }
}

export default TodoApp
