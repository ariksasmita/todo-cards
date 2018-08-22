import React from 'react'
  import PropTypes from 'prop-types'

class Todo extends React.Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
  }
  static defaultProps = {
    todo: {},
  }
  render() {
    const { id, text } = this.props
    return (
      <li className="card-item_list-item">
        <input type="checkbox" />
        <span>
          {id}: {text}
        </span>
      </li>
    )
  }
}

export default Todo
