import React from 'react'

import { mockCards, filterByState } from '../api/TodoAPI'

import TodoCard from './TodoCard'
import AddCard from './AddCard'
import SearchTodo from './SearchTodo'

class TodoApp extends React.Component {
  state = {
    cards: [],
    showCompleted: true,
  }
  componentWillMount() {
    this.setState({
      cards: mockCards,
    })
  }
  componentDidMount() {
    console.log(this.state.cards)
    // this.deleteCard('1')
  }
  toggleItem = (cardId, itemId) => {
    const { cards } = this.state
    const updatedCards = cards.map(card => {
      if(card.id === cardId) {
        card.items.map(item => {
          if(item.id === itemId) {
            item.completed = !item.completed
          }
          return item
        })
      }
      return card
    })
    this.setState({
      cards: updatedCards
    })
  }
  toggleCompletedDisplay = status => {
    this.setState({
      showCompleted: status,
    })
  }
  addNewCard = (card) => {
    const { cards } = this.state
    cards.push(card)
    this.setState({
      cards,
    })
  }
  addNewTodo = (cardId, item) => {
    const { cards } = this.state
    const newCards = cards
    Array.from(newCards).forEach(todo => {
      if (todo.id === cardId) {
        todo.items.push(item)
      }
    })
    this.setState({
      cards: newCards
    })
  }
  deleteCard = (cardId) => {
    const { cards } = this.state
    const newCards = cards
    Array.from(newCards).forEach((todo, index) => {
      console.log(index)
      if (todo.id === cardId) {
        // here, this is not working yet
        newCards.splice(index, 1)
      }
    })
    console.log('baru', newCards)
  }
  render() {
    const {
      cards,
      showCompleted,
    } = this.state
    const {
      addNewCard,
      addNewTodo,
      deleteCard,
      toggleItem,
      toggleCompletedDisplay,
    } = this
    const filteredCards = filterByState(cards, showCompleted)
    const renderCards = () => {
      return filteredCards.map(card => {
        return (
          <TodoCard
            key={card.id}
            onCardChange={toggleItem}
            onAddNewTodo={addNewTodo}
            onDeleteCard={deleteCard}
            card={card} />
        )
      })
    }

    return (
      <div className="container">
        <AddCard onHoistCard={ addNewCard } />
        <SearchTodo
          showCompleted={ showCompleted }
          toggleCompletedDisplay={ toggleCompletedDisplay } />
        { renderCards() }
      </div>
    )
  }
}

export default TodoApp
