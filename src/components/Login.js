import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import styles from './Login.module.css';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            psw: '',
            token: ''
        }
    }

    setMail = e => {
        this.setState({ mail: e.target.value })
    }
    setPsw = e => {
        this.setState({ psw: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);

        //send it to backend + ensure if goes bad
        //get response from backend - if login & psw is OK -> show homepage
        axios.post("http://localhost:5000/customer/login", {
            mail: this.state.mail,
            psw: this.state.psw
        })
            .then(res => {
                console.log('token');
                console.log(res);
                this.setState({token: res.token});
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { mail, psw } = this.state
        return (
            <div className ={ styles.container }>
                <form onSubmit={this.submitHandler}>

                    
                    <table>
                        <tr>
                            <td>Mail</td>
                            <input type="text"
                                   placeholder="Your mail"
                                   name="mail"
                                   value={mail}
                                   onChange={this.setMail} />
                        </tr>
                        <tr>
                            <td>Password</td>
                            <input type="text"
                                   placeholder="Password"
                                   name="psw"
                                   value={psw}
                                   onChange={this.setPsw} />
                        </tr>
                    </table>
                    <button type="submit">Login</button>
                    <Link to = 'createUser'><button>Sign up</button></Link>
                </form>

               



            </div>
        )
    }}
export default Login;

