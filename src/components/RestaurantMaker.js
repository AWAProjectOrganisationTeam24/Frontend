import React from 'react'
import styles from './RestaurantMaker.module.css'
import axios from "axios";

class RestaurantMaker extends React.Component{

    constructor(props) {
        super(props)

        this.state={
            message:'',
            id_owner: '',
            name:'',
            address:'',
            city:'',
            image:'',
            type:'',
            openHr:''
        }
    }

    Submit(){
        console.log("check")
        const name = document.getElementById("name").value
        const address = document.getElementById("address").value
        const city = document.getElementById("city").value
        const openHr = document.getElementById("openHr").value

        const rbs= document.querySelectorAll('input[name="Typechoice"]')
        let category;
        for (const rb of rbs){
            if (rb.checked) {
                console.log("check2")
                category=rb.value;
                break
            }
        }

        const mbs= document.querySelectorAll('input[name="Moneychoice"]')
        let moneyChoice;
        for (const mb of mbs){
            if (mb.checked) {
                moneyChoice=mb.value;
                console.log("check3")
                break
            }
        }

        this.setState({
                id_owner: "id_customer owning the restaurant",
                category: category,
                name: name,
                address: address,
                priceLevel: moneyChoice,
                image: 'image',
                city: city,
                openHr: openHr
            })

//sending to database
        axios.post("http://localhost:5000/", {
            id_owner: this.state.id_owner,
            category: this.state.category,
            name: this.state.name,
            address: this.state.address,
            priceLevel: this.state.priceLevel,
            image: this.state.image,
            city: this.state.city,
            openHr: this.state.openHr
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    clickHandler() {
        this.setState({
           message: <div className={ styles.RestaurantScreen }>
                       <div>Restaurant name<input type="text" id="name"/></div>
                       <div>Address<input type="text" id="address"/></div>
                       <div>City<input type="text" id="city"/></div>
                       <div>Operating hours<input type="text" id="openHr"/></div>
                       <div>Restaurant type</div>
                       <div><input type="radio" name="Typechoice" value="Buffet"        id="Choice1"/>Buffet</div>
                       <div><input type="radio" name="Typechoice" value="Fast food"     id="Choice2"/>Fast food</div>
                       <div><input type="radio" name="Typechoice" value="Fast casual"   id="Choice3"/>Fast casual</div>
                       <div><input type="radio" name="Typechoice" value="Casual dining" id="Choice4"/>Casual dining</div>
                       <div><input type="radio" name="Typechoice" value="Fine dining"   id="Choice5"/>Fine dining</div>
                       <div>Price level</div>
                       <div><input type="radio" name="Moneychoice" value="€"    id="Mony1"/>€</div>
                       <div><input type="radio" name="Moneychoice" value="€€"   id="Mony2"/>€€</div>
                       <div><input type="radio" name="Moneychoice" value="€€€"  id="Mony3"/>€€€</div>
                       <div><input type="radio" name="Moneychoice" value="€€€€" id="Mony4"/>€€€€</div>
                       <button onClick={() => this.Submit()}>Submit</button>
                    </div>
        })
        console.log(this)
    }
    render()  {
        return(
            <div>
                <div>{this.state.message}</div>
          <button onClick={() => this.clickHandler()}>Create Restaurant</button>
            </div>
        )
    }
}
export default RestaurantMaker
