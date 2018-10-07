import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

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
      timeCompleted,
      style,
      onItemChange,
    } = this.props

    const formatTime = (timeStamp) => {
      return moment(timeStamp).format('D MMM Y')
    }

    const strike = {
      textDecoration: 'line-through',
    }

    return (
      <li style={ style } className="card-item_list-item">
        <FormControlLabel
          control={
            <Checkbox
              color="default"
              value={ id }
              checked={ completed }
              onChange={ onItemChange }
            />
          }
          label={
            <span style={ completed ? strike : null }>
              { completed ? formatTime(timeCompleted) : formatTime(timeCreated) } {text}
            </span>
          }
        />

      </li>
    )
  }
}

export default Todo
