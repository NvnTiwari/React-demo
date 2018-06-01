import React, { Component } from 'react';
import ListUser from './components/ListUser';
import uuid from 'uuid';
import axios from 'axios';
import AddUser from './components/AddUser';
import ListApiUser from './components/ListApiUser';

class App extends Component {
  constructor() {

    super();
    this.state ={
      users: [],
      usersApi: []
    }
  }

  componentWillMount() {
    this.getUsers();
  }

  getUserFromApi() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        this.setState({usersApi: response.data})
    })
    .catch(function(error) {
        console.log(error);
    });

  }

  getUsers() {
    this.setState({users: [
        {
          id: uuid.v4(),
          name: "Navin Tiwari",
          age: "24",
          sex: "Male"
        },
        {
          id: uuid.v4(),
          name: "Nandan Pandey",
          age: "24",
          sex: "Male"
        },
        {
          id: uuid.v4(),
          name: "Atmika Kaushik",
          age: "24",
          sex: "Female"
        }
      ]})
  }

  componentDidMount() {
    this.getUserFromApi();
    this.getUsers();
  }

  handleAddUser(user) {
    let newUser = this.state.users;
    newUser.push(user);
    this.setState({users: newUser})
  }

  handleDelete(id) {
    let user = this.state.users;
    let index = user.findIndex(x => x.id === id);
    user.splice(index, 1);
    this.setState({users: user})
  }

  render() {
    return (
      <div className="App">
        <AddUser addUser={this.handleAddUser.bind(this)}/>
        <br/>
        <hr/>
        <ListUser users={this.state.users} onDelete={this.handleDelete.bind(this)}/>
        <hr/>
        <ListApiUser usersApi={this.state.usersApi}/>
      </div>
    );
  }
}

export default App;
