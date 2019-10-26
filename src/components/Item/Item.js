import React from 'react';
import './item.scss';
/**
 * @author
 * @function Item
 **/

const Item = ({ item, onClick, onDelete, onEdit }) => {
  const isCompleted = item.completed ? 'orange' : '#393B40';

  return (
    <div className='item' style={{ backgroundColor: isCompleted }}>
      <div className='todo' onClick={onEdit}>
        {item.title}
      </div>
      <div className='actions'>
        <div
          className='check'
          onClick={onClick}
          style={{ backgroundColor: isCompleted }}>
          {item.completed ? 'Done' : 'Check'}
        </div>
        {item.completed ? (
          <div
            className='delete'
            onClick={item.completed ? onDelete : () => {}}>
            delete
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Item;
