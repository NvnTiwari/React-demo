import React , { Component } from 'react';

export default class UserApi extends Component {
    render() {
        return (
            <li>
               <strong> Name </strong>: {this.props.user.name} ,<strong> UserName </strong> : {this.props.user.userName} <strong>Email</strong> : {this.props.user.email}
            </li>
            )
    }
}