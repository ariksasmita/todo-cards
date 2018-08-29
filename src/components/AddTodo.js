import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import moment from 'moment'
import uuid from 'uuid'

class AddTodo extends React.Component {
  state = {
    text: '',
  }
  handleInputChange = (ev) => {
    const text = this.refs.item.value
    if (text) {
      this.setState({
        text,
      })
    }
  }
  hoistItem = () => {
    const { onAddItem } = this.props
    const { text } = this.state
    if (text) {
      onAddItem({
        id: uuid(),
        text,
        completed: false,
      })
    }
    this.refs.item ? this.refs.item.value = '' : null
  }
  render() {
    const { 
      handleInputChange,
      hoistItem,
    } = this
    return (
      <div>
        <input type="text" ref="item" onChange={ handleInputChange } />
        <button ref="add" onClick={ hoistItem }>Add</button>
      </div>
    )
  }
}

export default AddTodo
