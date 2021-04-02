import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Cart from '../Cart/Cart';
import OrderView from '../OrderView/OrderView';

const Order = () => {
   const[products,,loggedInUser,setLoggedInUser] = useContext(UserContext)
   const [orders,setOrders]= useState([])
   useEffect(()=>{
    fetch('https://stormy-citadel-42524.herokuapp.com/orders')
    .then(res=>res.json())
    .then(data=>setOrders(data))
   },[])

//   const {length}= props.cart;
//  const cart = props.cart

    return (
        <div>
            <h1 class="text-center">Order Information</h1>
           
        {
            orders.map(orders=><OrderView orders={orders}></OrderView>)
        }
     
        </div>
    );
};

export default Order;