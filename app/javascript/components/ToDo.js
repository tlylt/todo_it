import React from "react"
import DisplayList from './DisplayList'

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      displayText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange(e) { // get user input for new todo
    this.setState({
      displayText: e.target.value
    })
  }
  handleSubmit(e) {  // add new todo
    e.preventDefault();
    if (!this.state.displayText.length) {
      return;
    }
    const newItem = {
      id: Date.now().toString(),
      text: this.state.displayText,
      completed: false
    }
    this.setState((state) => ({
      items: state.items.concat(newItem),
      displayText: ""
    }))
  }
  handleDelete(e) { // clear entire list of items
    this.setState({
      items: [],
      displayText: ""
    })
  }
  handleRemove(e) { // remove items that are marked as completed 
    if (this.state.items.length === 0) {
      return;
    } else {
      this.setState((state) => ({
        items: state.items.filter(task => (!task.completed)),
        displayText: ""
      }))
    }
  }
  handleCheck(e) { // mark item as completed
    const currTask = this.state.items.find(task => task.id === e.target.id);
    currTask.completed = e.target.checked;
    this.setState((state) => ({
      items: state.items,
      displayText: ""
    }));
  }
  render() {
    return (
      <div className="container">
        <h3 className="text-light d-flex justify-content-center p-2">YET ANOTHER TODO APP</h3>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo" className="font-weight-bolder text-light p-1">What needs to be done?</label>
          <div className="input-group">
            <input
              id="new-todo" className="form-control"
              name="new-todo" value={this.state.displayText}
              onChange={this.handleChange} />
            <button className="input-group-append text-white">Add #{this.state.items.length + 1}</button>
          </div>
        </form>
        <DisplayList items={this.state.items} handleCheck={this.handleCheck} />
        <div>
          <button className="btn delete text-light" onClick={this.handleRemove}>Remove completed</button>
          <button className="btn delete text-light" onClick={this.handleDelete}>Delete list</button>
        </div>
      </div>
    )
  }
}

export default ToDo
