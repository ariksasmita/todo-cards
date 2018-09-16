import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { mockCards } from '../../api/TodoAPI'
import TodoApp from '../../components/TodoApp'
import localStorage from '../utilities/localStorage';

const setup = () => {
  // mocking browser's localStorage API
  window.localStorage = localStorage
  localStorage.setItem('cards', JSON.stringify(mockCards))

  const wrapper = shallow(<TodoApp />)
  return {
    wrapper,
  }
}

const newCard = {
  id: '23532',
  title: 'new card',
  items: [{
    id: '200',
    text: 'first new todo',
    completed: false,
  }]
}

describe('TodoApp', () => {
  let renderWrapper
  beforeEach(() => {
    const { wrapper } = setup()
    const instance = wrapper.instance()
    instance.resetState()
  })
  it('renders without error', () => {
    setup()
  })
  it('toggle item status on handleItemChange', () => {
    const { wrapper } = setup()
    const instance = wrapper.instance()
    instance.toggleItem('1', '1')
    expect(wrapper.state().cards[0].items[0].completed).toBe(true)
  })
  it('adds new card', () => {
    const { wrapper } = setup()
    const instance = wrapper.instance()
    expect(wrapper.state().cards.length).toBe(2)
    instance.addNewCard(newCard)
    expect(wrapper.state().cards.length).toBe(3)
  })
  it('delete card', () => {
    const { wrapper } = setup()
    const instance = wrapper.instance()
    const cardCounts = wrapper.state().cards.length
    instance.addNewCard(newCard)
    expect(wrapper.state().cards.length).toBe(cardCounts + 1)
    instance.deleteCard(newCard.id)
    expect(wrapper.state().cards.length).toBe(cardCounts)
  })
  it('adds new todo to a target card', () => {
    const { wrapper } = setup()
    const instance = wrapper.instance()
    const newTodo = {
      id: '3000',
      text: 'a new item',
      completed: false,
    }
    instance.addNewTodo('1', newTodo)
    expect(wrapper.state().cards[0].items.length).toBe(3)
  })
  it('toggles AddCard module show state', () => {
    const { wrapper } = setup()
    const instance = wrapper.instance()
    instance.toggleAddCard()
    expect(wrapper.state().showAddCard).toBe(true)
  })
})
