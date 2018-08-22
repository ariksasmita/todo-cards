import React from 'react'

import TodoCard from './TodoCard'
import AddTodo from './AddTodo'

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
            completed: true,
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
            completed: false,
          },
        ],
      },
    ],
  }
  toggleItem = (cardId, itemId) => {
    const { todos } = this.state
    const updatedTodos = todos.map(todo => {
      if(todo.id === cardId) {
        todo.items.map(item => {
          if(item.id === itemId) {
            item.completed = !item.completed
          }
          return item
        })
      }
      return todo
    })
    this.setState({
      todos: updatedTodos
    })
  }
  render() {
    const { toggleItem } = this
    const { todos } = this.state
    const renderCards = () => {
      return todos.map(todo => {
        return (
          <TodoCard key={todo.id} onCardChange={toggleItem} card={todo} />
        )
      })
    }

    return (
      <div className="container">
        <AddTodo />
        { renderCards() }
      </div>
    )
  }
}

export default TodoApp
