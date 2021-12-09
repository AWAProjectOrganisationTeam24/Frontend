import React, {useState}  from 'react'
import styles from './RestaurantMaker.module.css'
import axios from "axios";
import {useNavigate, useParams} from "react-router";


function RestaurantMaker() {
    const params = useParams();
    const navigate = useNavigate();

    const [state, setState] = useState({
        id_manager: params.id,
        name: '',
        address: '',
        city: '',
        image: '',
        imageName:'',
        priceLevel: '',
        type: '',
        openHr: ''
    })
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    function changeFileHandler(e) {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };
    function changeHandler(e) {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }
    const submitHandler = async (e) => {
        const formData = new FormData();
            formData.append("file", file);
            formData.append("fileName", fileName);
            formData.append("id_manager", state.id_manager);
            formData.append("name", state.name);
            formData.append("address", state.address);
            formData.append("city", state.city);
            formData.append("priceLevel", state.priceLevel);
            formData.append("openHr", state.openHr);
            formData.append("type", state.type);

        for (var value of formData.values()) {
            console.log(value);
        }
            try {
            //sending to database
                const res = await axios.post(`http://localhost:5000/add-restaurant/${params.id}`, formData);
                console.log(res);
                console.log('restaurant registered!');
                navigate(`/profile/${params.id_customer}`, {replace: true});

            } catch (err) {
                console.log(err);
                console.log('error');
            }
        }


    return(
        <div>
            <div className={ styles.RestaurantScreen }>
                <form  onSubmit={submitHandler}>
                    <div>Restaurant name<input type="text" name="name" onChange={changeHandler}/></div>
                    <div>Address<input type="text" name="address" onChange={changeHandler}/></div>
                    <div>City<input type="text" name="city" onChange={changeHandler}/></div>
                    <div>Operating hours<input type="text" name="openHr" onChange={changeHandler}/></div>
                    <div>Image</div>
                    <div><input type="file" name="image" onChange={changeFileHandler}/></div>
                    <div>Restaurant type</div>
                    <div><input type="radio" name="type" value="Buffet"        id="Choice1" onChange={changeHandler}/>Buffet</div>
                    <div><input type="radio" name="type" value="Fast food"     id="Choice2" onChange={changeHandler}/>Fast food</div>
                    <div><input type="radio" name="type" value="Fast casual"   id="Choice3" onChange={changeHandler}/>Fast casual</div>
                    <div><input type="radio" name="type" value="Casual dining" id="Choice4" onChange={changeHandler}/>Casual dining</div>
                    <div><input type="radio" name="type" value="Fine dining"   id="Choice5" onChange={changeHandler}/>Fine dining</div>
                    <div>Price level</div>
                    <div><input type="radio" name="priceLevel" value="€"    id="Mony1" onChange={changeHandler}/>€</div>
                    <div><input type="radio" name="priceLevel" value="€€"   id="Mony2" onChange={changeHandler}/>€€</div>
                    <div><input type="radio" name="priceLevel" value="€€€"  id="Mony3" onChange={changeHandler}/>€€€</div>
                    <div><input type="radio" name="priceLevel" value="€€€€" id="Mony4" onChange={changeHandler}/>€€€€</div>
                    <button type="submit">Create restaurant</button>
                </form>
            </div>
        </div>

    );
}
export default RestaurantMaker
/*
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
*/