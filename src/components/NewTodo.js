import React from 'react'
import PropTypes from 'prop-types'

import Icons from './icons/Icons'

// move this to proper css.js file
const spanStyle = {
  flexGrow: '2',
  maxWidth: 'calc(100% - 24px)',
  color: 'rgba(0, 0, 0, 0.87)',
}
const icon = {
  cursor: 'pointer',
  color: 'rgba(0, 0, 0, 0.87)',
}

class NewTodo extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    deleteItem: PropTypes.func.isRequired,
  }
  static defaultProps = {
    text: '',
  }
  deleteItemHandler = () => {
    const { idx, deleteItem } = this.props
    deleteItem(idx)
  }
  render() {
    const {
      text,
      style,
    } = this.props
    const { deleteItemHandler } = this

    return (
      <li style={ style } className="card-item_list-item">
        <span style={ spanStyle }>{text}</span>
        <Icons.CrossIcon style={ icon } onClick={ deleteItemHandler } />
      </li>
    )
  }
}

export default NewTodo
