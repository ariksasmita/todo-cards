import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

class Todo extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    completed: PropTypes.bool,
    onItemChange: PropTypes.func.isRequired,
  }
  static defaultProps = {
    id: '',
    text: '',
    completed: false,
  }
  render() {
    const {
      id,
      text,
      completed,
      timeCreated,
      onItemChange,
    } = this.props

    return (
      <li className="card-item_list-item">
        <input
          type="checkbox"
          value={ id }
          defaultChecked={ completed }
          onChange={ onItemChange } />
        <span>{moment(timeCreated).format('D MMM Y')} {text}</span>
      </li>
    )
  }
}

export default Todo
