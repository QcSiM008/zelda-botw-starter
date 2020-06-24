import React, { useState } from 'react';
import Grid from '../components/grid/Grid';
import ItemsContext from '../context/ItemsContext';
import KeyboardUtils from '../utils/keyboard';
import { IPosition } from '../utils/matrix';

const Menu = () => {
  const [itemSelected, setItemSelected] = useState<IPosition>({ x: 0, y: 0 });

  const clickSelectedItem = () => null;

  const handleKeyPressed = (event: React.KeyboardEvent) => {
    let newItemSelected = null;
    if (event.key === 'ArrowUp') {
      newItemSelected = KeyboardUtils.goUp(itemSelected);
    } else if (event.key === 'ArrowDown') {
      newItemSelected = newItemSelected = KeyboardUtils.goBottom(itemSelected);
    } else if (event.key === 'ArrowLeft') {
      newItemSelected = KeyboardUtils.goLeft(itemSelected);
    } else if (event.key === 'ArrowRight') {
      newItemSelected = KeyboardUtils.goRight(itemSelected);
    }
    if (newItemSelected) {
      setItemSelected(newItemSelected);
    }
  };

  return (
    <ItemsContext.Provider value={{ itemSelected, setItemSelected, clickSelectedItem }}>
      <div className="container mx-auto flex flex-col xl:flex-row bg-zelda-darkGreen">
        <div className="w-full xl:w-1/2">
          <Grid items={[]} />
        </div>
        <div className="w-full xl:w-1/2"></div>
      </div>
    </ItemsContext.Provider>
  );
};

export default Menu;
