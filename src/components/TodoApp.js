import React from 'react'

import {
  mockCards,
  filterTodos,
  setTodosToLocalStorage,
  getTodosFromLocalStorage,
} from '../api/TodoAPI'

import Button from '@material-ui/core/Button';

import Icons from './icons/Icons'
import TodoCard from './TodoCard'
import AddCard from './AddCard'
import SearchTodo from './SearchTodo'
import Navigation from './Navigation'

import styles from '../styles/TodoApp.css'

class TodoApp extends React.Component {
  state = {
    cards: [],
    currentCardIndex: 0,
    showCompleted: true,
    showAddCard: false,
    filterString: '',
    singleView: false,
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
  onNextCard = () => {
    const {
      cards,
      currentCardIndex,
    } = this.state
    if (cards.length > (currentCardIndex + 1)) {
      this.setState({
        currentCardIndex: currentCardIndex + 1,
      })
    } else {
      this.setState({
        currentCardIndex: 0,
      })
    }
  }
  onPrevCard = () => {
    const {
      cards,
      currentCardIndex,
    } = this.state
    if (currentCardIndex > 0) {
      this.setState({
        currentCardIndex: currentCardIndex - 1,
      })
    } else {
      this.setState({
        currentCardIndex: cards.length - 1,
      })
    }
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
      currentCardIndex,
      showCompleted,
      showAddCard,
      filterString,
      singleView,
    } = this.state
    const {
      addNewCard,
      addNewTodo,
      deleteCard,
      onNextCard,
      onPrevCard,
      toggleItem,
      toggleCompletedDisplay,
      toggleAddCard,
      setFilterString,
    } = this
    const filteredCards = filterTodos(cards, showCompleted, filterString)
    const renderCards = () => {
      return filteredCards.map((card, idx) => {
        let shown = false
        if (currentCardIndex === idx) {
          shown = true
        }
        return (
          <TodoCard
            key={card.id}
            shown={shown}
            onCardChange={toggleItem}
            onAddNewTodo={addNewTodo}
            onDeleteCard={deleteCard}
            card={card} />
        )
      })
    }
    const addCardBtnLabel = () => this.state.showAddCard ? <Icons.CrossIcon /> : <Icons.PlusIcon />

    return (
      <div className="container" style={ styles.CardContainer }>
        <div className="testing" style={ styles.TopSectionWrapper }>
          <div className="top-control-wrapper" style={ styles.TopControlWrapper }>
            <div className="add-card-btn-wrapper">
              <Button
                style={ styles.ButtonStyle }
                variant="outlined"
                onClick={ toggleAddCard }>
                { addCardBtnLabel() }
              </Button>
            </div>
            <SearchTodo
              showCompleted={ showCompleted }
              toggleCompletedDisplay={ toggleCompletedDisplay }
              onSearchChange={ setFilterString } />
          </div>
          { showAddCard && <AddCard onHoistCard={ addNewCard } /> }
        </div>
        { singleView && <Navigation onNext={ onNextCard } onPrev={ onPrevCard } /> }
        <div style={ styles.CardWrapper }>
          { renderCards() }
        </div>
      </div>
    )
  }
}

export default TodoApp
