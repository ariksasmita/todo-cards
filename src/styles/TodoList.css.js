const _rounded = {
  borderRadius: '4px',
  overflow: 'hidden',
}

const List = {
  listStyleType: 'none',
  padding: '0',
  ..._rounded,
}

const NewList = {
  padding: '0',
  ..._rounded,
}

const ListItem = {
  padding: '5px 10px',
  color: '#ffffff',
}

const ListItemPadded = {
  padding: '15px',
  display: 'flex',
}

const ItemEven = {
  background: '#fff176',
}

const ItemOdd = {
  background: '#fff59d',
}

const AddItemWrapper = {
  display: 'flex',
}

export default {
  List,
  NewList,
  ListItem,
  ListItemPadded,
  ItemEven,
  ItemOdd,
  AddItemWrapper,
}
