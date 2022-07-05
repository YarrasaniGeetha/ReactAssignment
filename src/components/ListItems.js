import React from "react";
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newList: props.title,
      ownUpdate: true,
    };
    this.setUpdate = this.setUpdate.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    if (state.ownUpdate) {
      return {
        newList: state.newList,
        ownUpdate: false,
      };
    } else if (props.title !== state.newList) {
      return {
        newList: props.title,
      };
    }
    return null;
  }
  setUpdate(ele, id) {
    //debugger;
    // console.log("This is the todos" + this.state.todos);
    const todoList = [...this.state.newList];
    const index = todoList.findIndex((i) => i.id === id);
    const newObj = {
      lname: todoList[index].lname,
      fname: todoList[index].fname,
      id: id,
    };
    if (ele.target.name === "FName") {
      newObj.fname = ele.target.value;
    }
    if (ele.target.name === "LName") {
      newObj.lname = ele.target.value;
    }
    console.log(newObj);
    todoList.splice(index, 1, newObj);
    console.log(todoList);
    this.setState({
      newList: todoList,
      ownUpdate: true,
    });
  }
  updateItem(ele, key) {
    console.log(this.state.newList);

    this.props.updateItem(this.state.newList);
  }

  render() {
    return this.state.newList.map((todo, i) => {
      return (
        <form
          className="content"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          key={todo.key}
        >
          <input
            name="FName"
            value={todo.fname}
            onChange={(ele) => {
              this.setUpdate(ele, todo.id);
              // console.log("Heeloo");
            }}
          ></input>
          <input
            name="LName"
            value={todo.lname}
            onChange={(ele) => this.setUpdate(ele, todo.id)}
          ></input>
          <button
            onClick={() => {
              this.props.delete(todo.id);
            }}
          >
            Remove
          </button>
          <button
            onClick={() => {
              this.updateItem(todo.id);
            }}
          >
            Edit
          </button>
        </form>
      );
    });
  }
}

export default List;
