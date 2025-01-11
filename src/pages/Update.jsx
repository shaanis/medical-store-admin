import React, { useEffect, useState } from 'react'
import '../App.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { displayMedicinesApi } from '../services/allApi'
const Update = () => {
    const[medicineUpdate,setMedicineUpdate]=useState({
        name:"",
        dose:'',
        description:'',
        quantity:''
    })
   const  navigate = useNavigate()
   const handleGoBack=()=>{
    navigate(-1)
   }
   
   useEffect(()=>{
    getStore()
   },[])

  //  const{id}=useParams()
   //display medicine
  const getStore=async(id)=>{
    const result = await displayMedicinesApi(id)
    console.log(result.data);
    
  }
  return (
    <div className='addMed'>
    <button onClick={handleGoBack} ><i  className="fa-solid fa-arrow-left ml-3 mt-3 text-xl"></i></button>
    <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='font-bold  mb-2'>Update Medicine</h1>
       <div style={{width:'600px', height:'431px',borderRadius:'20px'}} className='bg-addMedBg p-2 flex flex-col items-center font-medium gap-1 justify-center'>
            <h3 className=' strName'>Medicine Name</h3>
           <input value={medicine.name} name='name' onChange={e=>setMedicine({...medicine,name:e.target.value})} style={{all:'unset',backgroundColor:'rgba(208, 105, 105, 1)', width:'350px',height:'38px',borderRadius:'8px',paddingLeft:'7px'}}  type="text" placeholder='Enter Medical Store Name'/>
            <h3 className='place'>Dose</h3>
            <input value={medicine.dose} name='place' onChange={e=>setMedicine({...medicine,dose:e.target.value})} style={{all:'unset',backgroundColor:'rgba(208, 105, 105, 1)', width:'350px',height:'38px',borderRadius:'8px',paddingLeft:'7px'}}  type="text" placeholder='Enter Place'/>
            <h3 className='headingAddMed'>Description</h3>
            <input value={medicine.description} name='imgUrl' onChange={e=>setMedicine({...medicine,description:e.target.value})} style={{all:'unset',backgroundColor:'rgba(208, 105, 105, 1)', width:'350px',height:'38px',borderRadius:'8px',paddingLeft:'7px'}}  type="text" placeholder='Enter Image Url'/>
            <h3 className='headingAddMed'>Quantity</h3>
            <input value={medicine.quantity} name='imgUrl' onChange={e=>setMedicine({...medicine,quantity:e.target.value})} style={{all:'unset',backgroundColor:'rgba(208, 105, 105, 1)', width:'350px',height:'38px',borderRadius:'8px',paddingLeft:'7px'}}  type="text" placeholder='Enter Image Url'/>
            <button  style={{width:"300px", height:'33px'}} className='bg-addbtn text-white  mt-5 h-8 rounded-full'>Update</button>
       </div>
    </div>
  </div>
  )
}

export default Update