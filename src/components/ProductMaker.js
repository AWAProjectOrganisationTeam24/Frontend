import React from 'react'

class ProductMaker extends React.Component{

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
           <div>Product name<input type="text" id="Input1"/></div>
       <div>Address<input type="text"             id="Input2"/></div>
       <div>Operation hours<input type="text"     id="Input3"/></div>
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
export default ProductMaker