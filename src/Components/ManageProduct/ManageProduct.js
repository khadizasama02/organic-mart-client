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
                        <th >Product Name</th>
                        <th >Weight</th>
                        <th>Price</th>
                        <th >Action</th>
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