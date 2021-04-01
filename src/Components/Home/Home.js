
import React, { useEffect, useState } from 'react';
import ItemView from '../ItemView/ItemView';
import './Home.css'

const Home = () => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5055/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
       
  },[])
 
 
    return (
      <div class="color">
      
        <div  class="row">
          {
            
            products?
            products.map(product=><ItemView products={product}></ItemView>):<div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          }
        </div>
        </div> 
    );
};

export default Home;