import merge from 'lodash/merge';
import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions';
import {allTodos} from './selectors'; //for testing, remove later

const todosReducer = function (state = {}, action) {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TODOS:
      let todos = {};
      action.todos.forEach(todo => todos[todo.id] = todo);
      newState = todos;
      return newState;
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      return newState;
    case REMOVE_TODO:
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
