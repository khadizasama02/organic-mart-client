import axios from 'axios';
import React, {  useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
// import { UserContext } from '../../App';
// import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {
   
    const { register, handleSubmit } = useForm();
    const [imageUrl,setImageUrl] = useState(null)
    const onSubmit = data =>{
        const productData = {
            name:data.name,
            weight:data.weight,
            price:data.price,
            imageURL: imageUrl
        };
        const url = `https://stormy-citadel-42524.herokuapp.com/addProduct`
        
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/JSON'
            },
            body:JSON.stringify(productData)
        })
        .then(res=> console.log('server side response'))
    }

    const handleImageUpload =(e)=>{
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '3b7eb1320c5be7d2efd4c251990fe44d');
        imageData.append('image',e.target.files[0])



        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div class="row" style={{marginTop:"30px",height:"600px"}}>
            <div class="col-4" style={{background:"#7FFFD4"}}>
                <h1 class="text-center">Organic Mart</h1>
             <ul style={{marginTop:"30px"}}>
                 <Link to="/manageProduct"><li><h5>Manage</h5></li></Link>
                 <Link to="/admin"><li><h5>Add Product</h5></li></Link>
                 <li><h5>Edit Product</h5></li>
             </ul>

            </div>
            <div class="col-8">
            <h1>Add product</h1>
            <div class="card">
            <form onSubmit={handleSubmit(onSubmit)}>
              
              <input name="name" defaultValue="Product Name" ref={register} />
               <br/>
               <br/>
           
               <input name="weight" defaultValue="weight" ref={register} />
              <br/>
              <br/>
              <input name="price" defaultValue="price" ref={register} />
              <br/>
              <br/>
              <input name="exampleRequired" type="file" onChange={handleImageUpload}/>
              <br/>
              <br/>

              <input type="submit" />
          </form> 
            </div>  

            </div>
           
           
        </div>
    );
};

export default Admin;