import React from 'react'

import { mockTodos, filterByState } from '../api/TodoAPI'

import TodoCard from './TodoCard'
import AddTodo from './AddTodo'

class TodoApp extends React.Component {
  state = {
    todos: [],
    showHidden: false,
  }
  componentWillMount() {
    this.setState({
      todos: mockTodos,
    })
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
    const { 
      todos,
      showHidden,
    } = this.state
    const { toggleItem } = this
    const filteredCards = filterByState(todos, showHidden)
    const renderCards = () => {
      return filteredCards.map(card => {
        return (
          <TodoCard key={card.id} onCardChange={toggleItem} card={card} />
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
