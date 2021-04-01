import React from 'react';

const ItemView = (props) => {
    const {name,imageURL,weight,price} = props.products;

    return (
        
        <div class="col-md-4">
            <div class="card" style={{width:"300px",margin:"20px",height:"450px"}} >
                <img src={imageURL} style={{height:"300px"}} class="card-img-top" alt="..."/>
                    <div class="card-body" style={{background:"#F5FFFA",color:"#2F4F4F"}}>
                        <h5 class="card-text" >{name}-{weight}</h5>
                        <h6 >{price}<button class="btn btn-success" style={{marginLeft:"100px"}}>buy now</button></h6>
                    </div>
            </div>
        </div>
    );
};

export default ItemView;