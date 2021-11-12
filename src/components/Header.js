import React from "react";
import styles from './Header.module.css';


export default function Header(){
    return(
        <div className= { styles.container }>
           <div className={ styles.logo }> <img src = 'logo.PNG' alt = '' width= '150' height= '70' /> </div>
            <button className={ styles.login }>
                Login
            </button>
            <div className={ styles.cart }>
                <img src = 'cart.PNG' alt = '' width= '20' height= '20'/>
            </div>
        </div>
    )
}