import React, { Component } from 'react';
import axios from "axios";
import styles from './Login.module.css';


class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            mail: '',
            psw: '',
            address: '',
            city: ''
        }
    }

    changeHandler = e => {
        this.setState({
            firstname: e.target.value[0],
            lastname: e.target.value[1],
            mail: e.target.value[2],
            psw: e.target.value[3],
            address: e.target.value[4],
            city: e.target.value[5]
        })
    }

    submitHandler = e => {
        e.preventDefault();

        //send it to backend + ensure if goes bad
        //get response from backend - after login show homepage
        axios.post("http://localhost:5000/", {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            mail: this.state.mail,
            psw: this.state.psw,
            address: this.state.address,
            city: this.state.city
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { firstname, lastname, mail, psw, address, city } = this.state
        return (
            <div className ={ styles.container }>
                <form onSubmit={this.submitHandler}>
                    <table>
                        <tr>
                            <td>Firstname</td>
                            <input type="text"
                                   name="firstname"
                                   value={firstname}
                                   onChange={this.changeHandler} />
                        </tr>
                        <tr>
                            <td>Lastname</td>
                            <input type="text"
                                   name="lastname"
                                   value={lastname}
                                   onChange={this.changeHandler} />
                        </tr>
                        <tr>
                            <td>Mail</td>
                            <input type="text"
                                   name="mail"
                                   value={mail}
                                   onChange={this.changeHandler} />
                        </tr>
                        <tr>
                            <td>Password</td>
                            <input type="text"
                                   name="psw"
                                   value={psw}
                                   onChange={this.changeHandler} />
                        </tr>
                        <tr>
                            <td>Address</td>
                            <input type="text"
                                   name="address"
                                   value={address}
                                   onChange={this.changeHandler} />
                        </tr>
                        <tr>
                            <td>City</td>
                            <input type="text"
                                   name="city"
                                   value={city}
                                   onChange={this.changeHandler} />
                        </tr>
                    </table>
                    <button type="submit">Create user</button>
                </form>
            </div>
        )
    }}
export default CreateUser;
