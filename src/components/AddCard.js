import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'

import Input from '@material-ui/core/Input'

import AddTodo from './AddTodo'

class AddCard extends React.Component {
  state = {
    title: '',
    items: [],
  }
  static propTypes = {
    onHoistCard: PropTypes.func.isRequired,
  }
  handleOnChange = event => {
    this.setState({
      title: event.target.value
    })
  }
  addItem = item => {
    const { items } = this.state
    items.push(item)
    this.setState({
      items,
    })
  }
  hoistCard = () => {
    const {
      title,
      items,
    } = this.state
    const {
      onHoistCard,
    } = this.props
    const { resetState } = this
    if (!!items) {
      const newCard = {
        id: uuid(),
        title: title || '',
        items,
      }
      onHoistCard(newCard)
      resetState()
    }
  }
  resetState = () => {
    this.setState({
      title: '',
      items: [],
    })
    this.title.value = ''
  }
  render() {
    const {
      handleOnChange,
      hoistCard,
      addItem,
    } = this
    const {
      items
    } = this.state
    const renderItems = () => {
      return (
        <ul>
          { items.map(item => <li key={ item.id }>{ item.text }</li>) }
        </ul>
      )
    }

    return (
      <div>
        <Input
          inputRef={ el => this.title = el }
          placeholder="Enter Title"
          onChange={ handleOnChange } />
        { renderItems() }
        <AddTodo onAddItem={ addItem } />
        <button onClick={ hoistCard }>Save</button>
      </div>
    )
  }
}

export default AddCard
