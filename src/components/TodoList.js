import React from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo'
import AddTodo from './AddTodo'

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
  render() {
    const {
      card,
      onItemChange,
    } = this.props
    const { showAddTodo } = this.state
    const { 
      onAddClick,
      addItem,
    } = this
    const renderTodos = () => {
      return card.items.map(todo => {
        return <Todo onItemChange={onItemChange} key={todo.id} {...todo} />
      })
    }

    return (
      <div>
        <button onClick={ onAddClick }>[+]</button>
        { showAddTodo && <AddTodo onAddItem={ addItem } />}
        { renderTodos() }
      </div>
    )
  }
}

export default TodoList
