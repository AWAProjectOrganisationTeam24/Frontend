import React from 'react'
import Header from './Header'
import "../App.css"
import ProductCard from './FoodCard'
import Search from './Search'
import {data} from "./Data/Data"
import FoodNotFound from './FoodNotFound'
import Footer from './Footer'




function Home() {

  // call the data from api
  const [items] = React.useState(data);
  const [search, setSearch] = React.useState("");

    const filterList = () => {
        if(search === ""){
            return items;
        }
        return items.filter(item => item.foodName.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }
  
  return (
    <div className="main">
      {/* header */}
      <Header/>
   
      
      <Search searchParam={search} onChange={(e) => setSearch(e.target.value)}/>
    

    
      <div class="row">
          

      {filterList().length > 0 ? (
                 <>
                     {filterList().map(item => (
                       <div class="column">
              
                      
                       <ProductCard
                     foodName = {item.foodName}
                     foodprize ={item.foodprize}
                     
                     fooddetails= {item.fooddetails}
                     
                     />
                    
         
                     </div>
                     
                         
                             
                        
                     ))}
                 </>
             ) : (
              <div class="column">
                 <FoodNotFound/>
                 </div>
             )}
          





          
    </div>

    <Footer/>
     
      

      
    </div>
  )
}

export default Home

