var TodoForm = React.createClass({
  getInitialState: function() {
    return {todoInput: ''}
  },
  changeInput: function(event) {
    this.setState({todoInput: event.target.value})
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var newTodo = this.state.todoInput
    var oldTodoList = this.props.todos
    oldTodoList.push(newTodo)
    this.props.addTodo(oldTodoList)
    this.setState({todoInput: ''})
  },
  render: function() {
    return (
      <form>
        <input onChange={this.changeInput} value={this.state.todoInput} type="text" placeholder="Enter Todo"/>
        <button onClick={this.handleSubmit}>Enter</button>
      </form>
    )
  }
})

var TodoList = React.createClass({
  render: function() {
    console.log('todos', this.props.todos)
    var that = this
    var listOfTodos = this.props.todos.reverse().map( function(elem, i) {
      return (
        <li key={i}>
          {elem}
        </li>
        )
    })
    return (
      <div>
        ToDo List
        <ul>
          {listOfTodos}
        </ul>
      </div>
    )
  }
})

var App = React.createClass({
  getInitialState: function() {
    return {todos: []}
  },
  updateTodo: function(updatedTodos) {
    this.setState({todos: updatedTodos})
  },
  render: function() {
    return (
      <div>
        <TodoForm todos={this.state.todos} addTodo={this.updateTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
})


ReactDOM.render(
  <App />,
  document.getElementById('app')
)