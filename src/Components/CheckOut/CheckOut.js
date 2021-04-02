import React, {  useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import ProductDetail from '../ProductDetail/ProductDetail';


const CheckOut = () => {
    const {_id}=useParams();
    const [products,,,]= useContext(UserContext)
    const productDetail=products.find(pd=>pd._id === _id)
    // console.log(productDetail);
    return (
        <div>
            <h1>this is check out</h1>
            <ProductDetail productDetail={productDetail}></ProductDetail>
        </div>
    );
};

export default CheckOut;