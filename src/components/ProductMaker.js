
/*    Submit(){
        console.log("check")
        const value1 = document.getElementById("Input1").value
        const value2 = document.getElementById("Input2").value

        const value3 = document.getElementById("Input3").value


        console.log(value1)
        console.log(value2)
        console.log(value3)

        this.setState({
            message: ''
        })
    }

    Back(){
      this.setState({
            message: ''
    })
}
    clickHandler() {
        this.setState({
           message: <div>
                        <button onClick={() => this.Back()}>X</button>
                        <div>Product name<input type="text" id="product"/></div>
                        <div>Restaurant<input type="text" id="restaurant"/></div>
                        <div>Operation hours<input type="text" id="openHr"/></div>
                        <button onClick={() => this.Submit()}>Submit</button>
                    </div>
        })
        console.log(this)
    }
    render()  {
        return(
            <div>
                <div>{this.state.message}</div>
          <button onClick={() => this.clickHandler()}>Create Product</button>
            </div>
        )
    }
}
*/
import React, { Component } from 'react';
import axios from "axios";
import styles from './Login.module.css';


class ProductMaker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id_restaurant: '',
            category: '',
            name: '',
            description: '',
            price: '',
            image: ''
        }
    }

    changeHandler = e => {
        this.setState({
            id_restaurant: e.target.value[0],
            category: e.target.value[1],
            name: e.target.value[2],
            description: e.target.value[3],
            price: e.target.value[4],
            image: e.target.value[5]
        })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);

        //send it to backend + ensure if goes bad
        //get response from backend - if login & psw is OK -> show homepage
        axios.post("http://localhost:5000/", {
            id_restaurant: this.state.id_restaurant,
            category: this.state.category,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            image: this.state.image
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { id_restaurant, category, name, description, price, image } = this.state
        return (
            <div className ={ styles.container }>
                <form onSubmit={this.submitHandler}>
                    <table>
                        <tr>
                            <td>Restaurant ID</td>
                            <input type="text"
                                   name="id_restaurant"
                                   value={id_restaurant}
                                   onChange={this.changeHandler} />
                        </tr>
                        <tr>
                            <td>Category</td>
                            <input type="text"
                                   name="category"
                                   value={category}
                                   onChange={this.changeHandler} />
                        </tr>
                        <tr>
                            <td>Name</td>
                            <input type="text"
                                   name="name"
                                   value={name}
                                   onChange={this.changeHandler} />
                        </tr>
                        <tr>
                            <td>Description</td>
                            <input type="text"
                                   name="description"
                                   value={description}
                                   onChange={this.changeHandler} />
                        </tr>
                        <tr>
                            <td>Price</td>
                            <input type="text"
                                   name="price"
                                   value={price}
                                   onChange={this.changeHandler} />
                        </tr>
                        <tr>
                            <td>Image</td>
                            <input type="text"
                                   name="image"
                                   value={image}
                                   onChange={this.changeHandler} />
                        </tr>
                    </table>
                    <button type="submit">Create product</button>
                </form>
            </div>
        )
    }}
export default ProductMaker;
