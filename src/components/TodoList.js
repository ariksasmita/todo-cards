import React from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo'

class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.array,
  }
  static defaultProps = {
    todos: {},
  }
  render() {
    const { todos } = this.props
    const renderTodos = () => {
      return todos.map(todo => {
        return <Todo key={todo.id} {...todo} />
      })
    }

    return <div>{renderTodos()}</div>
  }
}

export default TodoList
