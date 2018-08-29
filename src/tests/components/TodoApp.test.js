import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import TodoApp from '../../components/TodoApp'

const setup = () => {
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

/* TODO:
 * When API done, update this with mocked cards data
 */

describe('TodoApp', () => {
  it('renders without error', () => {
    setup()
  })
  it('toggle item status on handleItemChange', () => {
    const { wrapper } = setup()
    const instance = wrapper.instance()
    instance.toggleItem('1', '1')
    expect(wrapper.state().cards[0].items[0].completed).toBe(false)
  })
  it('adds new card', () => {
    const { wrapper } = setup()
    const instance = wrapper.instance()
    expect(wrapper.state().cards.length).toBe(2)
    instance.addNewCard(newCard)
    expect(wrapper.state().cards.length).toBe(3)
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
})
