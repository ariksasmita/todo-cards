const mockCards = [
  {
    id: '1',
    title: 'Todo Title',
    items: [
      {
        id: '1',
        text: 'Some todo item first',
        completed: true,
      },
      {
        id: '3',
        text: 'And some more todo item',
        completed: true,
      },
    ],
  },
  {
    id: '2',
    title: 'Second Todo Title',
    items: [
      {
        id: '1',
        text: 'Is some todo item',
        completed: true,
      },
      {
        id: '3',
        text: 'Also some more todo item',
        completed: false,
      },
    ],
  },
]

const filterTodos = (cards, showCompleted = false, filterString = '') => {
	var filteredCards = []
  Array.from(cards).forEach(card => {
    const completedFilter = card.items.some(item => !item.completed || showCompleted)
    const stringFilter = card.items.some(item => item.text.includes(filterString))
  	if (completedFilter && stringFilter) {
    	filteredCards.push({
      	id: card.id,
        title: card.title,
        items: card.items.filter((item) => {
          return (!item.completed || showCompleted) && item.text.includes(filterString)
        }),
      })
    }
  })
  return filteredCards
}

module.exports = {
  mockCards,
  filterTodos,
}
