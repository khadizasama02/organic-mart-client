import React from 'react';

const ManageProductsView = (props) => {
    const{name,weight,price} = props.pd;
    return (
        
            
                    <tr>
                        <td scope="row">{name}</td>
                        <td>{weight}</td>
                        <td>{price}</td>
                        <td><button class="btn btn-danger">update</button> <button class="btn btn-success">Delete</button></td>
                    </tr>
        
    );
};

export default ManageProductsView;