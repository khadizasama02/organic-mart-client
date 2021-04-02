import React, { useContext } from 'react';
import { UserContext } from '../../App';
import ManageProductsView from '../ManageProductsView/ManageProductsView';

const ManageProduct = () => {
    const[products,,,]= useContext(UserContext)
    
    
    return (
        <div>
             <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
          {
           products.map(pd=><ManageProductsView pd={pd}></ManageProductsView>)               
          }
             
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;