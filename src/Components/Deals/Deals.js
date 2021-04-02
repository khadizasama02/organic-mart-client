import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";


const Deals = () => {
    const [products, , loggedInUser, ] = useContext(UserContext)
    const { _id } = useParams();
    const productDetail = products.find(pd=>pd._id === _id)
    // console.log(productDetail);

    const { register, handleSubmit,  errors } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const orderDetail = {
            ...loggedInUser,productDetail,shipment:data,orderTime:new Date()
        }
        fetch('https://stormy-citadel-42524.herokuapp.com/addOrder',{
            method:'POST',
            headers:{
                'Content-Type':'application/JSON'
            },
            body:JSON.stringify(orderDetail)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('order placed successfully')
            }
        })
    }
   
    return (
        <div>
            <h1>this is deal</h1>
            <div class="card w-50 mx-auto">
                <h5 class="card-header text-center">Order confirmation</h5>
                <form className="mx-auto w-50" onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue={loggedInUser.displayName} ref={register({ required: true })} placeholder="Your Name" />
                {errors.name && <span className="error">Name is required</span>}
                <br />
                <br />
                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                {errors.email && <span className="error">Email is required</span>}
                <br />
                <br />
                <input name="address" ref={register({ required: true })} placeholder="Your Address" />
                {errors.address && <span className="error">Address is required</span>}
                <br />
                <br />
                <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
                {errors.phone && <span className="error">Phone Number is required</span>}
                <br />
                <br />
               <input type="submit" />
            </form>
            </div>
           
        </div>
    );
};

export default Deals;