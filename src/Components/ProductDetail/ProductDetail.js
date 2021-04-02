import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = (props) => {
    // console.log(props);
    const { name, price,_id } = props.productDetail;
    return (
        <div>
            <div class="card">
                <h5 class="card-header">Checkout Procedure</h5>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Price:{price}</p>
                    <p class="card-text">Total Price:{price}</p>
                    <Link to={`/deal/${_id}`}><button class="btn btn-primary">checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;