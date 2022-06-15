import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }
  editItem(id) {
    const list = [...this.state.list];
    const edit = list.map((item) => item.id === id);
    if (edit) {
      <input
        placeholder="Type here..."
        type="text"
        value={this.state.newItem}
        onChange={(e) => this.updateInput("newItem", e.target.value)}
      />;
    }
  }

  deleteAll() {
    const list = [...this.state.list];

    const updatedList = list.filter((item) => item.id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div>
        <h1 className="app-title">To Do List</h1>

        <div className="container">
          <div
            style={{
              padding: 40,
              textAlign: "center",
              maxWidth: 500,
              margin: "auto",
              color: "purple",
            }}
          >
            Add an Item...
            <br />
            <input
              type="text"
              placeholder="Type here..."
              value={this.state.newItem}
              onChange={(e) => this.updateInput("newItem", e.target.value)}
            />
            <button
              className="add-btn btn-floating"
              onClick={() => this.addItem()}
              disabled={!this.state.newItem.length}
            >
              <i class="material-icons"> + </i>
            </button>
            <button
              className="btn btn-floating"
              onClick={() => this.deleteAll()}
              disabled={!this.state.newItem.length}
            >
              <i class="material-icons">Delete All</i>
            </button>
            <br /> <br />
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button
                      className="btn btn-floating"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      <i class="material-icons">delete</i>
                    </button>

                    <button
                      className="btn btn-floating"
                      onClick={() => this.editItem(item.id)}
                    >
                      <i class="material-icons">edit</i>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Todo;
