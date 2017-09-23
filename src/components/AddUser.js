import React, {Component} from 'react';
import uuid from 'uuid';

export default class AddUser extends Component {

    constructor() {
        super();
        this.state = {
            newUser: {}
        }
    }

    static defaultProps= {
        sex: ["male", "female"]
    }

    handleSubmit(e) {
        e.preventDefault()
        if(this.refs.name.value === '') {
            alert("Please enter the Name");
        }else{
            this.setState({newUser: {
                id: uuid.v4(),
                name: this.refs.name.value,
                age: this.refs.age.value,
                sex: this.refs.sex.value
            }}, function() {
                console.log(this.state.newUser);
                this.props.addUser(this.state.newUser);
            })
        }

        this.refs.name.value = "";
        this.refs.age.value = "";
    }

    render() {

        let genderOptions = this.props.sex.map((gender) => {
            return <option value={gender} >{gender} </option>
        })

        return (
            <div className="add_user">
                <h3>Add User Component</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Name</label>
                     &nbsp;<input type="text" ref="name" />
                    <br/>
                    <br/>
                    <label>Age</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" ref="age" />
                    <br/>
                    <br/>
                    <label>Sex</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;<select ref="sex">
                        {genderOptions}
                    </select>
                    <br/>
                    <br/>
                    <input type="submit" value="Add User" />
                </form>
            </div>
            )
    }
}