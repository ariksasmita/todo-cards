import React from 'react'
import { shallow } from 'enzyme'

import Todo from '../../components/Todo'

const setup = () => {
  const props = {
    onItemChange: jest.fn(),
  }
  const wrapper = shallow(<Todo { ...props }/>)
  return {
    wrapper,
    props,
  }
}

describe('Todo', () => {
  it('renders without error', () => {
    setup()
  })
  it('triggers onItemChange upon checkbox click', () => {
    const { wrapper, props: { onItemChange } } = setup()
    wrapper.find('input').simulate('change')
    expect(onItemChange).toHaveBeenCalled()
  })
})
