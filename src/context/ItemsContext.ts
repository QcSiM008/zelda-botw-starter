import { createContext } from 'react';
import { IPosition } from '../utils/matrix';

const ItemsContext = createContext({
  clickSelectedItem: () => null,
  setItemSelected: (item: IPosition) => {},
  itemSelected: { x: 0, y: 0 },
});

export default ItemsContext;
