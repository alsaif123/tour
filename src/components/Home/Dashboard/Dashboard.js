import React from "react";
import "./Dashboard.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const Dashboard = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    axios.post('http://localhost:5000/services',data)
    .then( res => {
        if(res.data.insertedId){
            alert('added successfully');
            reset();
        }
    }) 
};

 
  return (
    <div className="container">
      <h2 className="text-center">ADD PLACE HERE</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
        <textarea {...register("description")} placeholder='Description' />
        <input type="number" {...register("Cost")} placeholder='Cost'/>
        <input {...register("img")} placeholder='image url' />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Dashboard;
