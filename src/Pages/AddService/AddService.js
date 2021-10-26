import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
        .then(response => {
            if(response.data.insertedId){
                alert("Insert Data SuccessFully");
                reset();
            }
        })
        
    };
    return (
        <div className="add-service">
            <h2>Please ADD a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input type="text" {...register("image")} placeholder="Image URL" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;