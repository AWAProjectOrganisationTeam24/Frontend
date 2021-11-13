import React from 'react'
import styles from './RestaurantMaker.module.css'

class RestaurantMaker extends React.Component{

    constructor(props) {
        super(props)

        this.state={
            message: ''
        }
    }

    Submit(){
        console.log("check")
        var value1 = document.getElementById("Input1").value
        var value2 = document.getElementById("Input2").value
 
        var value3 = document.getElementById("Input3").value
        const rbs= document.querySelectorAll('input[name="Typechoice"]')
        let selectedValue;
        for (const rb of rbs){
            if (rb.checked) {
                console.log("check2")
                selectedValue=rb.value;
                break
            }
        }
        const mbs= document.querySelectorAll('input[name="Moneychoice"]')
        let selectedValue1;
        for (const mb of mbs){
            if (mb.checked) {
                selectedValue1=mb.value;
                console.log("check3")
                break
            }
        }
        console.log(value1)
        console.log(value2)
        console.log(value3)
        console.log(selectedValue)
        console.log(selectedValue1)
    
        
       

        this.setState({
            message: ''
        })
        //return value1+", "+value2+", "+value3+", "+selectedValue+", "+selectedValue1;
    }

    Back(){
      this.setState({
            message: ''
    })
}
    clickHandler() {
        this.setState({
           message: <div className={styles.RestaurantScreen}>
           <button onClick={() => this.Back()}>X</button>
           <div>Restaurant name<input type="text" id="Input1"/></div>
       <div>Address<input type="text"             id="Input2"/></div>
       <div>Operation hours<input type="text"     id="Input3"/></div>
       <div>Restaurant type</div>
       <div><input type="radio" name="Typechoice" value="Buffet"        id="Choice1"></input>Buffet</div>
       <div><input type="radio" name="Typechoice" value="Fast food"     id="Choice2"></input>Fast food</div>
       <div><input type="radio" name="Typechoice" value="Fast casual"   id="Choice3"></input>Fast casual</div>
       <div><input type="radio" name="Typechoice" value="Casual dining" id="Choice4"></input>Casual dining</div>
       <div><input type="radio" name="Typechoice" value="Fine dining"   id="Choice5"></input>Fine dining</div>
       <div>Price level</div>
       <div><input type="radio" name="Moneychoice" value="€"    id="Mony1"></input>€</div>
       <div><input type="radio" name="Moneychoice" value="€€"   id="Mony2"></input>€€</div>
       <div><input type="radio" name="Moneychoice" value="€€€"  id="Mony3"></input>€€€</div>
       <div><input type="radio" name="Moneychoice" value="€€€€" id="Mony4"></input>€€€€</div>
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