import React, { Component } from 'react';
import UserApi from "./UserApi.js";

export default class ListApiUser extends Component {

    render() {
      let Users = this.props.usersApi.map((user) => {
        return (
            <UserApi user={user} />
          )
      })

      return (
      <div className="usersApi">
          <ul>
            {Users}
          </ul>
      </div>
        );
    }
}
