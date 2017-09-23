import React , { Component } from 'react';

export default class User extends Component {
    deleteUser(id) {
        this.props.onDelete(id);
    }
    render() {
        return (
            <li className="user-component">
               <strong> Name </strong>: {this.props.user.name} ,<strong> Age </strong> : {this.props.user.age} <strong>Sex</strong> : {this.props.user.sex} <a href="#" onClick={this.deleteUser.bind(this, this.props.user.id)} > X </a>
            </li>
            )
    }
}