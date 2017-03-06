import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
      <ul>
        {console.log(this.props.receiveTodo)}
        {this.props.todos.map(todo => (
          // <li key={todo.id}>{todo.title}</li>
          <TodoListItem key={todo.id} self={todo}></TodoListItem>
        ))}
      </ul>
      <TodoForm receiveTodo={this.props.receiveTodo}/>
      </section>
    );
  }
}

export default TodoList;
