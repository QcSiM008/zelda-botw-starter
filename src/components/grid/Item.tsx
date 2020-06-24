import React, { FC, useContext } from 'react';
import classNames from 'classnames/bind';
import ItemsContext from '../../context/ItemsContext';
import { ItemType } from '../../data/items.type';
import MatrixUtils from '../../utils/matrix';

export interface IItem extends ItemType {
  itemIndex: number;
}

const Item: FC<IItem> = ({ name, icon, itemIndex }) => {
  const { setItemSelected, itemSelected } = useContext(ItemsContext);
  const position = MatrixUtils.getMatrixPositionFromIndex(itemIndex);
  const handleClick = () => setItemSelected(position);

  return (
    <div
      className={classNames(
        { 'shadow-yellow border-zelda-softYellow border-2': itemSelected === position },
        'w-20 h-20 bg-black border border-zelda-softYellow',
      )}
    >
      <img alt={name} src={icon} onClick={handleClick} />
    </div>
  );
};

export default Item;
