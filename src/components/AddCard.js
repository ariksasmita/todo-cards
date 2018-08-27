import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'

import AddTodo from './AddTodo'

class AddCard extends React.Component {
  state = {
    title: '',
    items: [],
  }
  static propTypes = {
    onHoistCard: PropTypes.func.isRequired,
  }
  handleOnChange = () => {
    this.setState({
      title: this.refs.title.value,
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
    if (!!title && !!items) {
      const newCard = {
        id: uuid(),
        title,
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
        <h4>AddCard Component</h4>
        <input
          type="text"
          ref="title"
          placeholder="Enter Title"
          onChange={handleOnChange} />
        { renderItems() }
        <AddTodo onAddItem={ addItem } />
        <button onClick={ hoistCard }>Save</button>
      </div>
    )
  }
}

export default AddCard
