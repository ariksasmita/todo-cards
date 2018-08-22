import React from 'react'
import PropTypes from 'prop-types'

import TodoList from './TodoList'

class TodoCard extends React.Component {
  static propTypes = {
    todos: PropTypes.object,
  }
  static defaultProps = {
    todos: [],
  }
  render() {
    const { 
      title,
      items,
    } = this.props.todos
    return (
      <div>
        <h3>{ title }</h3>
        <TodoList todos={ items } />
      </div>
    )
  }
}

export default TodoCard
