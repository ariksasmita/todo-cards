import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import TodoApp from '../../components/TodoApp'

describe('TodoApp', () => {
  it('renders without error', () => {
    shallow(<TodoApp />)
  })
})
