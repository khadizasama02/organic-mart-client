
import React, { useContext} from 'react';
import { UserContext } from '../../App';

import ItemView from '../ItemView/ItemView';
import './Home.css'

const Home = () => {
  const[products,,,]=useContext(UserContext)

//  const [cart,setCart]= useState([]);
//  const handleAddProduct =(products)=>{
//    console.log('product added',products);
//    const newCart=[...cart,products]
//    setCart(newCart)
  
//  }
    return (
      <div class="color">
        {
          products.length === 0 && <div class="d-flex justify-content-center" >
          <div class="spinner-border  text-danger" role="status">
           
          </div>
        </div>
        }
      
        <div  class="row">
          {
            
           
            products.map(product=><ItemView products={product}
              // handleAddProduct={handleAddProduct}
            ></ItemView>)
          }
        </div>
        <div >
        {/* <Cart cart={cart}></Cart> */}
        </div>
      
        </div> 
    );
};

export default Home;