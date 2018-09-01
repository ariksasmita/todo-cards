import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import TodoList from '../../components/TodoList'

const setup = () => {
  const props = {
    card: {
      id: '234',
      title: 'oh a title sure',
      items: mockTodos,
    },
    todos: mockTodos, // will need to delete this later
    onItemChange: jest.fn(),
    onAddNewTodo: jest.fn(),
  }
  const wrapper = shallow(<TodoList {...props}/>)
  return {
    wrapper,
    props,
  }
}

const mockTodos = [
  {
    id: '1',
    text: 'Some todo item',
    completed: false,
  },
  {
    id: '3',
    text: 'And some more todo item',
    completed: true,
  },
]

describe('TodoList', () => {
  it('renders without error', () => {
    const { wrapper } = setup()
    // const onItemChange = jest.fn()
    // shallow(<TodoList card={  } todos={ mockTodos } onItemChange={ onItemChange } />)
  })
})
