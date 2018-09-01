import React from 'react'
import PropTypes from 'prop-types'

import TodoList from './TodoList'

class TodoCard extends React.Component {
  static propTypes = {
    card: PropTypes.object,
    onCardChange: PropTypes.func.isRequired,
    onAddNewTodo: PropTypes.func.isRequired,
  }
  static defaultProps = {
    card: {},
  }
  handleItemChange = (e) => {
    const { 
      card,
      onCardChange,
    } = this.props
    const itemId = e.target.getAttribute('value')
    if(!!card.id && !!itemId) {
      onCardChange(card.id, itemId)
    }
  }
  handleItemDelete = (ev) => {
    const { 
      onDeleteCard,
      card: {
        id,
      }
    } = this.props
    if(id) {
      onDeleteCard(id)
    }
  }
  render() {
    const {
      card: {
        title,
      },
      card,
      onAddNewTodo,
    } = this.props
    const {
      handleItemChange,
      handleItemDelete,
    } = this
    return (
      <div>
        <h3>{ card.title }</h3>
        <TodoList
          card={ card }
          onItemChange={ handleItemChange }
          onAddNewTodo={ onAddNewTodo } />
        <button onClick={ handleItemDelete }>Delete</button>
      </div>
    )
  }
}

export default TodoCard
