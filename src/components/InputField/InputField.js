import React from 'react';
import './inputField.scss';
/**
 * @author
 * @function InputField
 **/

const InputField = ({ onChange, value, onSubmit }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}>
      <input
        onChange={e => onChange(e.target.value)}
        value={value}
        type='text'
        className='input'
        placeholder='Add new ...'
      />
    </form>
  );
};

export default InputField;
