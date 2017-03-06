export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = function(todos) {
  return { type: RECEIVE_TODOS, todos };
};

export const receiveTodo = function(todo) {
  return { type: RECEIVE_TODO, todo };
};

window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;


// {
//   '1': {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//   '2': {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   },
// }
