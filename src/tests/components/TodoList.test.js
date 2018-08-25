import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import TodoList from '../../components/TodoList'

const mockTodos = [
  {
    id: 1,
    text: 'Some todo item',
    completed: false,
  },
  {
    id: 3,
    text: 'And some more todo item',
    completed: true,
  },
]

describe('TodoList', () => {
  it('renders without error', () => {
    const onItemChange = jest.fn()
    shallow(<TodoList todos={ mockTodos } onItemChange={ onItemChange } />)
  })
})
