/**
 * @jest-environment jsdom
 */
/* eslint-disable react/display-name */
import React from 'react';
import { shallow } from 'enzyme';
/**
 *import  Component
 */
import Item from './Item';
/**
 * props
 */
const props = {
  item: {
    id: 1,
    title: 'new Todo',
    completed: false
  },
  onClick: jest.fn(),
  onDelete: jest.fn(),
  onEdit: jest.fn()
};
/**
 * Tests: Item Component
 */
describe('Item Component', () => {
  /**
   * Snapshot:[default]
   */
  test('should match default snapshot', () => {
    expect.assertions(1);

    const wrapper = shallow(<Item {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
  /**
   * Snapshot:[completed]
   */
  test('should match with item completed', () => {
    expect.assertions(1);

    const wrapper = shallow(
      <Item {...props} item={{ ...props.item, completed: true }} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
