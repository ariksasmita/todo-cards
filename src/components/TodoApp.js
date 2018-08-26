import React from 'react'

import { mockTodos, filterByState } from '../api/TodoAPI'

import TodoCard from './TodoCard'
import AddCard from './AddCard'
import SearchTodo from './SearchTodo'

class TodoApp extends React.Component {
  state = {
    todos: [],
    showCompleted: true,
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
  toggleCompletedDisplay = status => {
    this.setState({
      showCompleted: status,
    })
  }
  render() {
    const {
      todos,
      showCompleted,
    } = this.state
    const {
      toggleItem,
      toggleCompletedDisplay,
    } = this
    const filteredCards = filterByState(todos, showCompleted)
    const renderCards = () => {
      return filteredCards.map(card => {
        return (
          <TodoCard key={card.id} onCardChange={toggleItem} card={card} />
        )
      })
    }

    return (
      <div className="container">
        <AddCard />
        <SearchTodo toggleCompletedDisplay={ toggleCompletedDisplay } />
        { renderCards() }
      </div>
    )
  }
}

export default TodoApp
