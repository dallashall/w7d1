import React from 'react';

const defaultState = {
  title: "",
  body: "",
  id: undefined
};

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      id: undefined
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ id: new Date().getTime() });
    this.props.receiveTodo(this.state);
    this.setState(defaultState);
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {console.log(this.props.receiveTodo)}
        <input type="text" value={this.state.title}
          onChange={this.updateTitle}></input>
        <input type="text" value={this.state.body}
          onChange={this.updateBody}></input>
        <input type="submit" value="Add Todo"></input>
      </form>
    );
  }

}

export default TodoForm;
