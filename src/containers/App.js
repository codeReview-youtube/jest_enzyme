import React, { Component } from 'react';
import { Items, InputField } from '../components';
import fetch from 'node-fetch';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: '',
      id: null
    };
  }

  componentDidMount() {
    this.fetchTodos();
  }
  /**
   * onChange
   */
  onChange = newTodo => {
    this.setState(() => ({
      todo: newTodo
    }));
  };
  /**
   * onSubmit
   */
  onSubmit = () => {
    const { todo, todos, id } = this.state;
    if (todo.trim() !== '') {
      // if id exist => it's update
      if (id) {
        todos[id - 1].title = todo;
        todos[id - 1].completed = false;
        this.setState(() => ({
          todos,
          id: null
        }));
      } else {
        // otherwise add
        this.setState(() => ({
          todos: [
            {
              id: todos.length + 1,
              completed: false,
              title: todo
            },
            ...todos
          ]
        }));
      }
    } else {
      return null;
    }

    this.clear();
  };
  /**
   * onEdit
   */
  onEdit = INDEX => {
    const { todos } = this.state;
    this.setState(() => ({
      id: todos.find((_, i) => i === INDEX).id,
      todo: todos.find((_, i) => i === INDEX).title
    }));
  };
  /**
   * clear
   */
  clear = () => {
    this.setState(() => ({
      todo: ''
    }));
  };
  /**
   * onCheck
   */
  onClick = index => {
    const { todos } = this.state;
    todos[index].completed = !todos[index].completed;
    this.setState({
      todos
    });
  };
  /**
   * onDelete
   */
  onDelete = index => {
    const { todos } = this.state;
    this.setState(() => ({
      todos: todos.filter((_, i) => i !== index)
    }));
  };
  /**
   * fetchTodos
   */
  fetchTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(rs => rs.json())
      .then(
        todos =>
          todos &&
          todos.length > 0 &&
          this.setState({
            todos
          })
      );
  }

  render() {
    const { todos, todo } = this.state;
    return (
      <div className='app'>
        <InputField
          onChange={this.onChange}
          value={todo}
          onSubmit={this.onSubmit}
        />
        <Items
          items={todos}
          onClick={this.onClick}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
        />
      </div>
    );
  }
}
