import React from 'react'
import PropTypes from 'prop-types'

import TodoList from './TodoList'

class TodoCard extends React.Component {
  static propTypes = {
    card: PropTypes.object,
  }
  static defaultProps = {
    card: [],
  }
  render() {
    const { 
      title,
      items,
    } = this.props.card
    return (
      <div>
        <h3>{ title }</h3>
        <TodoList todos={ items } />
      </div>
    )
  }
}

export default TodoCard
