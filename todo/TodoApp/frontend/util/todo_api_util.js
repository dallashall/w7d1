export const getTodos = function() {
  return $.ajax({
    method: "GET",
      url: "/api/todos"
  });
};

export const postTodo = function(todo) {
  return $.ajax({
    method: "POST",
    url: "/api/todos",
    data: { todo }
  });
};

export const patchTodo = function(todo) {
  return $.ajax({
    method: "PATCH",
    url: `/api/todos/${todo.id}`,
    data: {todo}
  });
};

export const deleteTodo = function(todo) {
  return $.ajax({
    method: "DELETE",
    url: `/api/todos/${todo.id}`
  });
};