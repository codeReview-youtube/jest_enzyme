/* eslint-disable react/display-name */
import React from 'react';
import { shallow } from 'enzyme';
/**
 *import  Component
 */
import InputField from './InputField';
/**
 * props
 */
const props = {
  onSubmit: jest.fn(),
  onChange: jest.fn(),
  value: 'todo'
};
/**
 * Tests: InputField Component
 */
describe('InputField Component', () => {
  /**
   * Snapshot:[default]
   */
  test('should match default snapshot', () => {
    expect.assertions(1);

    const wrapper = shallow(<InputField {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
  /**
   * triggers [onSubmit]
   */
  test('should submit form', () => {
    expect.assertions(1);

    const wrapper = shallow(<InputField {...props} />);

    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(props.onSubmit).toHaveBeenCalled();
  });
  /**
   * triggers [onChange]
   */
  test('should submit form', () => {
    expect.assertions(1);
    const value = 'any';
    const wrapper = shallow(<InputField {...props} />);

    wrapper.find('input').simulate('change', {
      target: { value }
    });
    expect(props.onChange).toHaveBeenCalledWith(value);
  });
});
