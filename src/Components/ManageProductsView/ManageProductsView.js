import React from 'react';

const ManageProductsView = (props) => {
    const{name,weight,price} = props.pd;
    return (
        
            
                    <tr>
                        <td scope="row">{name}</td>
                        <td>{weight}</td>
                        <td>{price}</td>
                        <td>action</td>
                    </tr>
        
    );
};

export default ManageProductsView;