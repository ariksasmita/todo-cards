import React from 'react'
import PropTypes from 'prop-types'

import TodoList from './TodoList'

class TodoCard extends React.Component {
  static propTypes = {
    card: PropTypes.object,
    onCardChange: PropTypes.func.isRequired,
  }
  static defaultProps = {
    card: {},
  }
  handleItemChange = (e) => {
    const { 
      card,
      onCardChange,
    } = this.props
    const itemId = parseInt(e.target.getAttribute('value'), 10)
    if(card.id && itemId) {
      onCardChange(card.id, itemId)
    }
  }
  render() {
    const {
      card: {
        title,
        items,
      },
    } = this.props
    const {
      handleItemChange,
    } = this
    return (
      <div>
        <h3>{ title }</h3>
        <TodoList todos={ items } onItemChange={ handleItemChange }/>
      </div>
    )
  }
}

export default TodoCard
