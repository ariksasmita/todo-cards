import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import TodoCard from '../../components/TodoCard';

const setup = (props, onChange) => {
  const onAddNewTodo = jest.fn()
  const wrapper = shallow(<TodoCard
    onAddNewTodo={ onAddNewTodo }
    onCardChange={onChange}
    {...props} />);
  return {
    wrapper,
    props,
  };
};

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
};

const mergeWithRequiredProps = props => Object.assign(
  mockCard,
  props,
);

describe('TodoCard', () => {
  it('renders without error', () => {
    const onCardChange = jest.fn()
    const { wrapper, props } = setup(mergeWithRequiredProps(), onCardChange);
  });
});
