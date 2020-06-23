import React, { FC, useContext } from 'react';
import classNames from 'classnames/bind';
import ItemsContext from '../../context/ItemsContext';
import { ItemType } from '../../data/items.type';

export interface IItem extends ItemType {
  itemIndex: number;
}

const Item: FC<IItem> = ({ name, icon, itemIndex }) => {
  const { setItemSelected, itemSelected } = useContext(ItemsContext);

  const handleClick = () => setItemSelected(itemIndex);

  return (
    <div
      className={classNames(
        { 'shadow-yellow border-zelda-softYellow border-2': itemSelected === itemIndex },
        'w-20 h-20 bg-black border border-zelda-softYellow',
      )}
    >
      <img alt={name} src={icon} onClick={handleClick} />
    </div>
  );
};

export default Item;
