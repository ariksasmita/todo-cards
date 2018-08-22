import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Todo from '../../components/Todo'

describe('Todo', () => {
  it('renders without error', () => {
    shallow(<Todo />)
  })
})
