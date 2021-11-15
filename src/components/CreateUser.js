import React from 'react';
import styles from './CreateUser.module.css';


export default function CreateUser(){
    return(
        <div className = { styles.container }>
      <table>
        <tr>
          <td>Username</td>
          <input></input>
        </tr>
        <tr>
          <td>Password</td>
          <input></input>
        </tr>
        <button>Create account</button>
      </table>

    </div>
    )
}