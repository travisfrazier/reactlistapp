import React, { Component, Fragment } from 'react'
import Item from './Item'

class List extends Component {
  state = {
    input: '',
    list: [],
  }
  updateInput = event => {
    console.log(event.target.value)
    this.setState({
      input: event.target.value,
    })
  }

  submit = event => {
    event.preventDefault()

    const newItem = { value: this.state.input }
    const newList = [...this.state.list, newItem] // [old1, old2, old3]           // Before // [newThing, old1, old2, old3] // After

    this.setState({
      input: '',
      list: newList,
    })
  }

  delete = index => {
    // [1,2,3,4] // Before
    // [1,2,4]   // After

    const newArray = this.state.list.filter((item, idx) => idx !== index)

    this.setState({
      list: newArray,
    })
  }

  render() {
    return (
      <div>
        <form className="todo" onSubmit={this.addItem}>
          <input
            type="text"
            onChange={this.updateInput}
            value={this.state.input}
          />
          <button onClick={this.submit} type="submit" className="add">
            Add
          </button>
        </form>
        <section className="list">
          <ul className="todo_list">
            {this.state.list.map((item, index) => {
              return (
                //<li key={index} onClick={() => this.delete(index)}>{item.value}</li>
                <Item
                  key={index}
                  text={item.value}
                  remove={() => this.delete(index)}
                />
              )
            })}
          </ul>
        </section>
      </div>
    )
  }
}

export default List
