import React, { FC } from 'react';
import Item from './Item';
import { ItemType } from '../../data/items.type';

export interface IGrid {
  items: ItemType[];
}

const Grid: FC<IGrid> = ({ items }) => (
  <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
    {items.map((item, index) => (
      <Item key={item.name} name={item.name} icon={item.icon} itemIndex={index} />
    ))}
  </div>
);

export default Grid;
