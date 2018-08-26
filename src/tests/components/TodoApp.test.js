import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import TodoApp from '../../components/TodoApp'

const setup = () => {
  const wrapper = shallow(<TodoApp />);
  return {
    wrapper,
  };
};

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
    expect(instance.state.todos[0].items[0].completed).toBe(false)
  });
})
