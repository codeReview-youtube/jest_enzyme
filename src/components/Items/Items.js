import React from 'react';
import Item from '../Item/Item';
import './items.scss';

/**
 * @author
 * @function Items
 **/

const Items = ({ items, onClick, onDelete, onEdit }) => {
  return (
    <div className='list'>
      {items.map((item, index) => (
        <Item
          item={item}
          key={`${item.id}-${index}`}
          onClick={() => onClick(index)}
          onDelete={() => onDelete(index)}
          onEdit={() => onEdit(index)}
        />
      ))}
    </div>
  );
};

export default Items;
