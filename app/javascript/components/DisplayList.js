import React from "react"

class DisplayList extends React.Component {
  // render list of todos
  render() {
    const { items, handleCheck } = this.props
    return (
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item.id}>
            <input id={item.id} onClick={handleCheck} data-checked={item.completed} type="checkbox" />
            <label htmlFor={item.id} data-checked={item.completed}><span>{item.text}</span></label></li>))}
      </ul>
    )
  }
}
export default DisplayList
