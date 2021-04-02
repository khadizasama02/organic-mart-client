import React from 'react';

const ManageProductsView = (props) => {
    const{name,weight,price} = props.pd;
    return (
        
            
                    <tr>
                        <td >{name}</td>
                        <td>{weight}</td>
                        <td>{price}</td>
                        <td><button class="btn btn-warniNg">update</button> <button class="btn btn-danger">Delete</button></td>
                    </tr>
        
    );
};

export default ManageProductsView;