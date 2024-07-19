import React,{useState,useEffect} from 'react'
import {useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema= yup.object({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Email format is not valid").required("Email is required"),
  channel: yup.string().required("Channel is required"),
})

type FormValues={
  username: string;
  email: string;
  channel: string;
}


export const YouTube = () => {
  const [fetchedData, setFetchedData]= useState<FormValues>({
    
      username:"",
      email:"",
      channel:"",
  });
 
  const form = useForm<FormValues>({
      defaultValues: {
      username: fetchedData.username,
      email: fetchedData.email,
      channel: fetchedData.channel,
    },
    resolver: yupResolver(schema),
  });

useEffect(()=>{
  fetchData();
},[]);


  const fetchData = async ()=>{
    try{
      const response= await fetch('https://jsonplaceholder.typicode.com/users?email=Sincere@april.biz');
      if(!response.ok){
        throw new Error('Failed to fetch data');
      }
      const data: FormValues[]= await response.json();

      if(data.length>0){
        setFetchedData(data[0]);
      }

    }catch (error){
      console.error('Error fetching data:', error);
    }
  };

  const {register, handleSubmit, formState} = form;
  const {errors} = formState;
  
  const onSubmit=(data:FormValues) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Yup YouTube Form</h1>
   <form onSubmit={handleSubmit(onSubmit)} noValidate>
      < div className="form-control">    
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />
        <p className="error"> {errors.username?.message}</p> 
      </div>

      <div className="form-control">
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email")}/>
        <p className="error"> {errors.email?.message}</p> 
        </div>
      
        < div className="form-control">
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />
        <p className="error"> {errors.channel?.message}</p> 
        </div>
        <button>Submit</button>
      </form>
      <DevTool control={form.control} />
    </div>
  );
};
