/**
 * @jest-environment jsdom
 */
/* eslint-disable react/display-name */
import React from 'react';
import { shallow } from 'enzyme';
/**
 *import  Component
 */
import Items from './Items';
/**
 * props
 */
const props = {
  items: [
    {
      id: 1,
      title: 'first Todo',
      completed: false
    }
  ],
  onDelete: jest.fn(),
  onEdit: jest.fn(),
  onClick: jest.fn()
};
/**
 * Tests: Items Component
 */
describe('Items Component', () => {
  /**
   * Snapshot:[default]
   */
  test('should match default snapshot', () => {
    expect.assertions(1);

    const wrapper = shallow(<Items {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
  /**
   * triggers [onClick]
   */
  test('should trigger onClick', () => {
    expect.assertions(1);
    const index = 0;

    const wrapper = shallow(<Items {...props} />);
    wrapper
      .find('Item')
      .at(index)
      .prop('onClick')();

    expect(props.onClick).toHaveBeenCalledWith(index);
  });
});
