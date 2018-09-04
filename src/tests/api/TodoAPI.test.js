import React from 'react'
import ReactDOM from 'react-dom'
import localStorage from '../utilities/localStorage';

import {
  filterTodos,
  setTodosToLocalStorage,
  getTodosFromLocalStorage,
} from '../../api/TodoAPI'

const setup = () => {
  // mocking browser's localStorage API
  window.localStorage = localStorage
  localStorage.setItem('cards', JSON.stringify(mockCards))
};

const mockCards = [
  {
    id: '1',
    title: 'First title',
    items: [
      {
        id: '1',
        text: 'some todo first',
        completed: false,
        timeCreated: Date.now(),
        timeCompleted: null,
      },
      {
        id: '2',
        text: 'another todo',
        completed: true,
        timeCreated: Date.now(),
        timeCompleted: null,
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
        timeCreated: Date.now(),
        timeCompleted: null,
      },
      {
        id: '13',
        text: 'another todo',
        completed: false,
        timeCreated: Date.now(),
        timeCompleted: null,
      },
    ]
  },
]

describe('TodoAPI', () => {
  it('returns all items when show completed flag is true', () => {
    const cards = filterTodos(mockCards, true)
    expect(cards[0].items.length).toBe(2)
    expect(cards[1].items.length).toBe(2)
  })
  it('returns only uncompleted items by default', () => {
    const cards = filterTodos(mockCards, false)
    expect(cards[0].items.length).toBe(1)
    expect(cards[1].items.length).toBe(2)
  })
  it('returns only card and items containing search string', () => {
    expect(filterTodos(mockCards, true, 'first').length).toBe(1)
    expect(filterTodos(mockCards, true, 'yam').length).toBe(0)
  })
  it('gets todo data from localStorage', () => {
    setup()
    const todos = getTodosFromLocalStorage()
    expect(todos).toEqual(mockCards)
  })
  it('sets new todo to localStorage', () => {
    setup()
    const newCard = {
      id: '23452',
      title: 'new card title',
      items: [{
        id: '65321',
        text: 'qyausdia',
        timeCreated: Date.now(),
        timeCompleted: null,
      }]
    }
    setTodosToLocalStorage(mockCards)
    expect(getTodosFromLocalStorage()).toEqual(mockCards)
  })
})
