import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'

import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

import AddTodo from './AddTodo'
import NewTodo from './NewTodo'

import styles from '../styles/AddCard.css'
import listStyles from '../styles/TodoList.css'

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
        title: title || 'Untitled',
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
  // move this to a utility class, it's used in both lists, new and card list
  isEven = (num) => {
    return (num + 1) % 2 === 0
  }
  itemStyle = (num) => {
    const { isEven } = this
    const defaultListStyle = { ...listStyles.ListItem,  ...listStyles.ListItemPadded }
    return isEven(num)
      ? { ...defaultListStyle, ...listStyles.ItemEven}
      : { ...defaultListStyle, ...listStyles.ItemOdd }
  }
  render() {
    const {
      handleOnChange,
      hoistCard,
      addItem,
      itemStyle,
    } = this
    const {
      items
    } = this.state
    const renderItems = () => {
      return (
        <ul style={ listStyles.NewList }>
          { items.map((item, index) => (
              <NewTodo
                style={ itemStyle(index) }
                key={ item.id }
                idx={ index }
                text={ item.text } />
              )
            )
          }
        </ul>
      )
    }

    return (
      <div style={ styles.Wrapper }>
        <div style={ {
          paddingBottom: '20px',
        } }>
          <Input
            fullWidth={ true }
            inputRef={ el => this.title = el }
            placeholder="Enter card title"
            onChange={ handleOnChange } />
          { renderItems() }
          <AddTodo onAddItem={ addItem } />
        </div>
        <div>
          <Button
            variant="outlined"
            onClick={ hoistCard }>
            Save
          </Button>
        </div>
      </div>
    )
  }
}

export default AddCard
