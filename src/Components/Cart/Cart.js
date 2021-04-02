import React from 'react';

const Cart = (props) => {
    console.log(props);
    const cart = props.cart;
    // let total = 0;
    // for(let i=0;i<cart.length;i++){
    //     const product = cart[i];
    //     const price = parseInt(product.price)
    //     total=(total + price);
        
    // }
    return (
        <div>
            <h4>Order summery:</h4>
            <h1>items ordered:{cart.length}</h1>
            <h2></h2>
        </div>
    );
};

export default Cart;