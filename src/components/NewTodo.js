import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import SvgIcon from '@material-ui/core/SvgIcon'

import CrossIcon from './icons/CrossIcon'

class NewTodo extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  }
  static defaultProps = {
    text: '',
  }
  render() {
    const {
      text,
      style,
    } = this.props

    return (
      <li style={ style } className="card-item_list-item">
        <span style={ {flexGrow: '2'} }>{text}</span>
        <CrossIcon />
      </li>
    )
  }
}

export default NewTodo
