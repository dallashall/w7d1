import React from 'react';
import {allTodos} from '../../reducers/selectors.js';
import {connect} from 'react-redux';
import TodoList from './todo_list';
import {receiveTodo} from '../../reducers/todo_reducer.js';

const mapStateToProps = function(state) {
  return { todos: allTodos(state) };
};

const mapDispatchToProps = dispatch => {
  return { receiveTodo: (todo) => dispatch(receiveTodo(todo)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
