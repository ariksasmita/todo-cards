import React from 'react'
import { shallow } from 'enzyme'

import AddTodo from '../../components/AddTodo'

const setup = () => {
  const props = {
    onAddItem: jest.fn(),
  }
  const wrapper = shallow(<AddTodo {...props} />)
  return {
    wrapper,
    props,
  }
}

describe('AddTodo', () => {
  it('should render properly', () => {
    const { wrapper } = setup()
  })
})