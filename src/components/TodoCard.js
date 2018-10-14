import React from 'react'
import PropTypes from 'prop-types'

import TodoList from './TodoList'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

import styles from '../styles/TodoCard.css'

class TodoCard extends React.Component {
  static propTypes = {
    card: PropTypes.object,
    shown: PropTypes.bool,
    onCardChange: PropTypes.func.isRequired,
    onAddNewTodo: PropTypes.func.isRequired,
  }
  static defaultProps = {
    card: {},
    shown: false,
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
    if (id) {
      onDeleteCard(id)
    }
  }
  render() {
    const {
      card,
      shown,
      onAddNewTodo,
    } = this.props
    const {
      handleItemChange,
      handleItemDelete,
    } = this
    const containerStyles = shown ? { ...styles.Container, ...styles.Shown } : styles.Container
    return (
      <div className="card" style={ containerStyles }>
        <h3 style={ styles.Header }>
          { card.title }
        </h3>
        <TodoList
          card={ card }
          onItemChange={ handleItemChange }
          onAddNewTodo={ onAddNewTodo } />
        <Button
          style={ styles.StyleButton }
          variant="outlined"
          onClick={ handleItemDelete }>
          <DeleteIcon />
        </Button>
      </div>
    )
  }
}

export default TodoCard
