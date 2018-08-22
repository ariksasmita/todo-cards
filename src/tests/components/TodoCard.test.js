import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import TodoCard from '../../components/TodoCard'

const mockCard = {
  id: 1,
  title: 'Todo Title',
  items: [
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
  ],
}

describe('TodoCard', () => {
  it('renders without error', () => {
    shallow(<TodoCard card={mockCard} />)
  })
})
