const mockTodos = [
  {
    id: 1,
    title: 'Todo Title',
    items: [
      {
        id: 1,
        text: 'Some todo item',
        completed: true,
      },
      {
        id: 3,
        text: 'And some more todo item',
        completed: true,
      },
    ],
  },
  {
    id: 2,
    title: 'Second Todo Title',
    items: [
      {
        id: 1,
        text: 'Is some todo item',
        completed: true,
      },
      {
        id: 3,
        text: 'Also some more todo item',
        completed: false,
      },
    ],
  },
]

const filterByState = (cards, showCompleted = false) => {
	var filteredCards = []
  Array.from(cards).forEach(card => {
  	if (card.items.some(item => !item.completed || showCompleted)) {
    	filteredCards.push({
      	id: card.id,
        title: card.title,
        items: card.items.filter(item => !item.completed || showCompleted),
      })
    }
  })
  return filteredCards
}

module.exports = {
  mockTodos,
  filterByState,
}
