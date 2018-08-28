import React from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo'
import AddTodo from './AddTodo'

class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.array,
    onItemChange: PropTypes.func.isRequired,
  }
  static defaultProps = {
    todos: [],
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
  render() {
    const { 
      todos,
      onItemChange,
    } = this.props
    const { showAddTodo } = this.state
    const { onAddClick } = this
    const renderTodos = () => {
      return todos.map(todo => {
        return <Todo onItemChange={onItemChange} key={todo.id} {...todo} />
      })
    }

    return (
      <div>
        <button onClick={ onAddClick }>[+]</button>
        { showAddTodo && <AddTodo />}
        {renderTodos()}
      </div>
    ) 
  }
}

export default TodoList
