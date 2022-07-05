import React from "react";
//import React from "react";
class Table extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     todos: [],
  //   };
  // }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>SlNo</th>
            <th>FirstName</th>
            <th>LastName</th>
          </tr>
        </thead>
        {this.props.title.map((todo, index) => {
          return (
            <tbody key={todo.key}>
              <tr>
                <td>{index + 1}</td>
                <td>{todo.fname}</td>
                <td>{todo.lname}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    );
  }
}
export default Table;
