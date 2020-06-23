import { createContext } from 'react';
const ItemsContext = createContext({
  clickSelectedItem: () => null,
  setItemSelected: (item: number) => null,
  itemSelected: 0,
});

export default ItemsContext;
