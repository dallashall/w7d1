export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
import {getTodos, postTodo, patchTodo} from '../util/todo_api_util';

export const receiveTodos = function(todos) {
  return { type: RECEIVE_TODOS, todos };
};

export const receiveTodo = function(todo) {
  return { type: RECEIVE_TODO, todo };
};

export const removeTodo = function(todo) {
  return { type: REMOVE_TODO, todo };
};

export const fetchTodos = () => (dispatch) => {
  return getTodos()
    .then(
      todo => dispatch(receiveTodos(todo))
    );
};

export const createTodo = (formTodo) => (dispatch) => {
  return postTodo(formTodo).then(
    todo => dispatch(receiveTodo(todo))
    ).then(
  );
};

export const updateTodo = (currentTodo) => (dispatch) => {
  return patchTodo(currentTodo).then(
    todo => dispatch(receiveTodo(todo))
  )
}
