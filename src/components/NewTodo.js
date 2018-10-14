import React from 'react'
import PropTypes from 'prop-types'

import Icons from './icons/Icons'

import styles from '../styles/NewTodo.css'

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
        <span style={ styles.SpanStyle }>{ text }</span>
        <Icons.CrossIcon style={ styles.Icon } onClick={ deleteItemHandler } />
      </li>
    )
  }
}

export default NewTodo
