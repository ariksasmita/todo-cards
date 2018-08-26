import React from 'react'
import ReactDOM from 'react-dom'

import TodoAPI from '../../api/TodoAPI'

const setup = () => {
  const wrapper = shallow(<TodoAPI />);
  return {
    wrapper,
  };
};

const mockCards = [
  {
    id: '1',
    title: 'First title',
    items: [
      {
        id: '1',
        text: 'some todo',
        completed: false,
      },
      {
        id: '2',
        text: 'another todo',
        completed: true,
      },
    ],
  },
  {
    id: '2',
    title: 'Second title',
    items: [
      {
        id: '12',
        text: 'some todo',
        completed: false,
      },
      {
        id: '13',
        text: 'another todo',
        completed: false,
      },
    ]
  },
]

describe('TodoAPI', () => {
  it('returns all items when show completed flag is true', () => {
    const cards = TodoAPI.filterByState(mockCards, true)
    expect(cards[0].items.length).toBe(2)
    expect(cards[1].items.length).toBe(2)
  })
  it('returns only uncompleted items by default', () => {
    const cards = TodoAPI.filterByState(mockCards, false)
    expect(cards[0].items.length).toBe(1)
    expect(cards[1].items.length).toBe(2)
  })
})
