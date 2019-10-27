/**
 * @jest-environment jsdom
 */
/* eslint-disable react/display-name */
import React from 'react';
import { shallow } from 'enzyme';
/**
 *import  Component
 */
import App from './App';
/**
 * props
 */
const props = {};
/**
 * mock Todos
 */
const todos = [
  {
    id: 1,
    title: '',
    completed: false
  },
  {
    id: 2,
    title: '',
    completed: true
  }
];
/**
 * Tests: App Component
 */
describe('App Component', () => {
  /**
   * Snapshot:[default]
   */
  test('should match default snapshot', () => {
    expect.assertions(1);

    const wrapper = shallow(<App {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
  /**
   * Snapshot:[with state]
   */
  test('should match with items', async () => {
    expect.assertions(1);

    const wrapper = shallow(<App {...props} />);

    await wrapper.instance().fetchTodos();
    // jsonplace holder return 200 todos
    expect(wrapper.state('todos')).toHaveLength(200);
  });
  /**
   * triggers [onDelete]
   */
  test('should delete completed todo', () => {
    expect.assertions(1);
    const wrapper = shallow(<App />);

    wrapper.setState({ todos });
    wrapper.instance().onDelete(1);

    expect(wrapper.state('todos')).toEqual([todos[0]]);
  });
  /**
   * triggers [onClick]
   */
  test('should change completed status', () => {
    expect.assertions(1);
    const wrapper = shallow(<App />);
    const index = 0;
    wrapper.setState({ todos });
    wrapper.instance().onClick(index);

    expect(wrapper.state('todos')[index].completed).toEqual(
      todos[index].completed
    );
  });
  /**
   * triggers [onEdit]
   */
  test('should change title with newTitle', () => {
    expect.assertions(2);

    const wrapper = shallow(<App />);
    const index = 0;

    wrapper.setState({ todos, todo: 'something', id: index + 1 });
    wrapper.instance().onClick(index);
    wrapper.instance().onSubmit();

    const { completed, title } = wrapper.state('todos')[index];
    expect(completed).toEqual(todos[index].completed);

    expect(title).toEqual('something');
  });
  /**
   * triggers [onChange]
   */
  test('should add new Todo', () => {
    expect.assertions(1);
    const wrapper = shallow(<App />);
    const newTodo = 'something';

    wrapper.instance().onChange(newTodo);
    wrapper.instance().onSubmit();

    expect(wrapper.state('todos')).toHaveLength(1);
  });
  /**
   * triggers [onEdit]
   */
  test('should trigger onEdit to setState', () => {
    expect.assertions(1);
    const wrapper = shallow(<App />);
    const index = 0;
    wrapper.setState({ todos });
    wrapper.instance().onEdit(index);

    expect(wrapper.state('id')).toEqual(index + 1);
  });
  /**
   * triggers [onSubmit]
   */
  test('should return null if value [""]', () => {
    expect.assertions(1);
    const wrapper = shallow(<App />);

    const value = wrapper.instance().onSubmit();

    expect(value).toEqual(null);
  });
});
