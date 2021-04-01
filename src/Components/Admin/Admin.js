import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl,setImageUrl] = useState(null)
    const onSubmit = data =>{
        const productData = {
            name:data.name,
            weight:data.weight,
            price:data.price,
            imageURL: imageUrl
        };
        const url = `http://localhost:5055/addProduct`
        
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
        <div class="row">
            <div class="col-4">


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