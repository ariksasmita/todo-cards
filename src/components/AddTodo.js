import React from "react"
import PropTypes from 'prop-types'
import uuid from "uuid"

import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

import styles from '../styles/AddTodo.css'

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
  handleInputChange = event => {
    const text = event.target.value
    if (text) {
      this.setState({
        text
      })
    }
  }
  hoistItem = event => {
    const { onAddItem } = this.props
    const { text } = this.state
    const description = this.description
    if (text) {
      onAddItem({
        id: uuid(),
        text,
        completed: false,
        timeCreated: Date.now(),
        timeCompleted: null,
      })
    }
    if (description.value) {
      description.value = ''
    }
  }
  render() {
    const { handleInputChange, handleInputKeyDown, hoistItem } = this
    return (
      <div style={ styles.Wrapper }>
        <Input
          fullWidth={ true }
          placeholder="Enter item description"
          inputRef={ el => this.description = el }
          onChange={ handleInputChange }
          onKeyDown={ handleInputKeyDown }
          inputProps={{
            'aria-label': 'Enter items',
          }}
        />
        <div
          style={ {padding: '0 0 0 10px'} }>
          <Button
            style={ styles.AddButton }
            variant="outlined"
            onClick={ hoistItem }>
            Add
          </Button>
        </div>
      </div>
    )
  }
}

export default AddTodo
