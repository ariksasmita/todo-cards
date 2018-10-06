import React from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo'
import AddTodo from './AddTodo'

import Button from '@material-ui/core/Button';

import styles from '../styles/TodoList.css'

class TodoList extends React.Component {
  static propTypes = {
    card: PropTypes.object,
    onItemChange: PropTypes.func.isRequired,
    onAddNewTodo: PropTypes.func.isRequired,
  }
  static defaultProps = {
    card: {},
  }
  state = {
    showAddTodo: false,
  }
  onAddClick = () => {
    const { showAddTodo } = this.state
    this.setState({
      showAddTodo: !showAddTodo,
    })
  }
  addItem = (item) => {
    const {
      card: { id },
      onAddNewTodo
    } = this.props
    onAddNewTodo(id, item)
  }
  isEven = (num) => {
    return (num + 1) % 2 === 0
  }
  itemStyle = (num) => {
    const { isEven } = this
    return isEven(num) ? {...styles.ListItem, ...styles.ItemEven} : {...styles.ListItem, ...styles.ItemOdd}
  }
  render() {
    const {
      card,
      onItemChange,
    } = this.props
    const { showAddTodo } = this.state
    const { 
      onAddClick,
      addItem,
      itemStyle,
    } = this
    const renderTodos = () => {
      return card.items.map((todo, idx) => {
        return <Todo style={ itemStyle(idx) } onItemChange={ onItemChange } key={ todo.id } { ...todo } />
      })
    }

    return (
      <div>
        <div style={ styles.AddItemWrapper }>
          <Button
            variant="contained"
            onClick={ onAddClick }>
            +
          </Button>
          { showAddTodo && <AddTodo onAddItem={ addItem } />}
        </div>
        { card.items && 
          <ul style={ styles.List }>
            { renderTodos() }
          </ul>
        }
      </div>
    )
  }
}

export default TodoList
