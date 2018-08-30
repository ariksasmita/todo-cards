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
  render() {
    const {
      card: {
        title,
        items,
      },
      card,
      onAddNewTodo,
      onDeleteCard,
    } = this.props
    const {
      handleItemChange,
    } = this
    return (
      <div>
        <h3>{ title }</h3>
        <TodoList
          card={ card }
          todos={ items }
          onItemChange={ handleItemChange }
          onAddNewTodo={ onAddNewTodo } />
        <button onClick={ onDeleteCard }>Delete</button>
      </div>
    )
  }
}

export default TodoCard
