import React from "react"
import PropTypes from 'prop-types'
import uuid from "uuid"

class AddTodo extends React.Component {
  static propTypes = {
    onAddItem: PropTypes.func.isRequired,
  }
  state = {
    text: ""
  }
  handleInputKeyDown = ev => {
    const { hoistItem } = this
    if (ev.key && ev.key === "Enter") {
      hoistItem()
    }
  }
  handleInputChange = () => {
    const text = this.refs.item.value
    if (text) {
      this.setState({
        text
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
        completed: false
      })
    }
    this.refs.item ? (this.refs.item.value = "") : null
  }
  render() {
    const { handleInputChange, handleInputKeyDown, hoistItem } = this
    return (
      <div>
        <input
          type="text"
          ref="item"
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
        <button ref="add" onClick={hoistItem}>
          Add
        </button>
      </div>
    )
  }
}

export default AddTodo
