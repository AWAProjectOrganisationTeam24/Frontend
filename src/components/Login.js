import React from 'react';
import { Link } from "react-router-dom";
import styles from './Login.module.css';



export default function Login(){
    return(
        <div className ={ styles.container }>
      <table>
        <tr>
          <td>Username</td>
          <input></input>
        </tr>
        <tr>
          <td>Password</td>
          <input></input>
        </tr>
        <button>Login</button>
        <Link to = 'createUser'><button>Sign up</button></Link>
      </table>
    </div>
    )
}