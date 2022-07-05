import React, { Component } from "react";
//import React from "react";
import Table from "./Table";
import List from "./ListItems";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      //need to call to do edit and remove
      slno: "",
      fname: "",
      lname: "",
    };
    this.updateItem = this.updateItem.bind(this);
  }
  onchangeFirstname = (e) => {
    this.setState({ fname: e.target.value });
  };
  onchangeLastname = (f) => {
    this.setState({ lname: f.target.value });
  };
  onAddTask = (e) => {
    e.preventDefault();
    // console.log(this.state.todos);
    console.log(this.state.fname);
    console.log(this.state.lname);
    const obj = {
      fname: this.state.fname,

      lname: this.state.lname,
      id: Date.now(),
    };

    if (this.state.fname !== "") {
      this.setState({ todos: this.state.todos.concat(obj) });
      console.log(this.state.fname);
      this.setState({ fname: "" });
    }
    if (this.state.lname !== "") {
      this.setState({ todos: this.state.todos.concat(obj) });
      this.setState({ lname: "" });
    }
  };
  onDeleteTask = (id) => {
    const newArray = JSON.parse(JSON.stringify(this.state.todos));
    console.log(newArray);
    this.setState({
      todos: newArray.filter((value) => value.id !== id),
    });
    console.log(id);
  };

  updateItem(data) {
    console.log("data ---->" + data);
    this.setState({
      todos: data,
    });
  }

  render() {
    return (
      <div className="main">
        <center>
          <List
            title={this.state.todos}
            delete={this.onDeleteTask}
            updateItem={(data) => this.updateItem(data)}

            // edit={this.onEdit}
          />

          <form className="input">
            <input
              className="name"
              name="FName"
              type="text"
              placeholder="Enter First Name"
              value={this.state.fname}
              onChange={this.onchangeFirstname}
            ></input>
            <input
              className="name"
              name="LName"
              type="text"
              placeholder="Enter Last Name"
              value={this.state.lname}
              onChange={this.onchangeLastname}
            ></input>
            <button
              className="addbutton"
              type="button"
              disabled={this.state.fname === "" || this.state.lname === ""}
              onClick={this.onAddTask}
            >
              Add
            </button>
          </form>
          <Table title={this.state.todos} />
        </center>
      </div>
    );
  }
}
export default Form;
