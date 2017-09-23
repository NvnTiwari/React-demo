import React, { Component } from 'react';
import User from "./User.js";

export default class ListUser extends Component {

  deleteUser(id) {
    this.props.onDelete(id);
  }

    render() {
      //console.log(this.props.users);
      let Users = this.props.users.map((user) => {
        return (
            <User onDelete={this.deleteUser.bind(this)} user={user} />
          )
      })
      return (
      <div className="users">
          <h1>UserList Component</h1>
          <ul>
            {Users}
          </ul>
      </div>
        );
    }
}
