import React from 'react';

const OrderView = (props) => {
    console.log(props);
    const { _id, displayName, email, orderTime } = props.orders;
    return (
        <div>
            <div class="card w-75 mx-auto" style={ {marginTop:"20px"}}>
                <div class="card-body">
                    <h4 class="card-title">Order Id:{_id}</h4>
                    <h5>Customer Name:{displayName}</h5>
                    <h5>Email:{email}</h5>
                    <h6>Order time:{orderTime}</h6>
                    
                </div>
            </div>
        </div>
    );
};

export default OrderView;