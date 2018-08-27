import React from 'react'
import { shallow } from 'enzyme'

import AddCard from '../../components/AddCard'

const setup = () => {
  const props = {
    onHoistCard: jest.fn(),
  }
  const wrapper = shallow(<AddCard { ...props } />)
  return {
    wrapper,
    props,
  }
}

describe('AddCard', () => {
  it('renders without error', () => {
    setup()
  })
  it('set title state on text change', () => {
    const { wrapper, props: { onHoistCard } } = setup()
    const instance = wrapper.instance()
    wrapper.setState({
      title: 'some title',
      items: [{
        id: '2',
        text: 'some',
        completed: false,
      }]
    })
    instance.hoistCard()
    expect(onHoistCard).toHaveBeenCalled()
  })
  it('should reset state', () => {
    const { wrapper } = setup()
    const instance = wrapper.instance()
    wrapper.setState({
      title: 'some title',
      items: [{
        id: '2',
        text: 'some',
        completed: false,
      }]
    })
    instance.resetState()
    expect(wrapper.state('items').length).toBe(0)
    expect(wrapper.state('title')).toBeFalsy()
  })
  it('should add new items', () => {
    const { wrapper } = setup()
    const instance = wrapper.instance()
    const dummyItem = {
      id: '2',
      text: 'some',
      completed: false,
    }
    instance.addItem(dummyItem)
    expect(wrapper.state('items').length).toBe(1)
  })
})
