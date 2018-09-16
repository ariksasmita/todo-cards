import React from 'react'

import {
  mockCards,
  filterTodos,
  setTodosToLocalStorage,
  getTodosFromLocalStorage,
} from '../api/TodoAPI'

import TodoCard from './TodoCard'
import AddCard from './AddCard'
import SearchTodo from './SearchTodo'

import styles from '../styles/TodoApp.css'

class TodoApp extends React.Component {
  state = {
    cards: [],
    showCompleted: true,
    showAddCard: false,
    filterString: '',
  }
  componentWillMount() {
    const cards = getTodosFromLocalStorage() || mockCards // remove the mock afterwards
    this.setState({
      cards,
    })
  }
  componentDidUpdate(prevState) {
    const { cards } = this.state
    if (prevState !== cards) {
      setTodosToLocalStorage(cards)
    }
  }
  toggleItem = (cardId, itemId) => {
    const { cards } = this.state
    const updatedCards = cards.map(card => {
      if(card.id === cardId) {
        card.items.map(item => {
          if(item.id === itemId) {
            item.completed = !item.completed
            item.completed ? item.timeCompleted = Date.now() : item.timeCompleted = null
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
    Array.from(newCards).forEach(card => {
      if (card.id === cardId) {
        card.items.push(item)
      }
    })
    this.setState({
      cards: newCards
    })
  }
  deleteCard = (cardId) => {
    const { cards } = this.state
    const newCards = cards
    Array.from(newCards).forEach((card, index) => {
      if (card.id === cardId) {
        newCards.splice(index, 1)
      }
    })
    this.setState({
      cards: newCards
    })
  }
  resetState = () => {
    this.setState({
      cards: [],
      showCompleted: true,
    })
  }
  setFilterString = (filterString) => {
    this.setState({
      filterString,
    })
  }
  toggleAddCard = () => {
    const { showAddCard } = this.state
    this.setState({
      showAddCard: !showAddCard,
    })
  }
  render() {
    const {
      cards,
      showCompleted,
      showAddCard,
      filterString,
    } = this.state
    const {
      addNewCard,
      addNewTodo,
      deleteCard,
      toggleItem,
      toggleCompletedDisplay,
      toggleAddCard,
      setFilterString,
    } = this
    const filteredCards = filterTodos(cards, showCompleted, filterString)
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
        <button onClick={ toggleAddCard }>Add new card</button>
        { showAddCard && <AddCard onHoistCard={ addNewCard } /> }
        <SearchTodo
          showCompleted={ showCompleted }
          toggleCompletedDisplay={ toggleCompletedDisplay }
          onSearchChange={ setFilterString } />
        <div style={ styles.CardWrapper }>
          { renderCards() }
        </div>
      </div>
    )
  }
}

export default TodoApp
