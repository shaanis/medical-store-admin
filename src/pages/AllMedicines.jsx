import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { deleteMedicineApi, displayMedicinesApi, getStores, getStoresInAllMedApi, putMedicines } from '../services/allApi';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
const AllMedicines = () => {
  const {id} = useParams()
  const [show, setShow] = useState(false);
  const [upshow,setUpshow] =useState(false)
  const[store,setStore]=useState([])
  const [medicine, setMedicine] = useState({
    id: Date.now(),
    name: '',
    dose: '',
    description: '',
    quantity: ''
  });
  const [medicinesList, setMedicinesList] = useState([]); // State to hold all medicines
  //  update medicine
   const[medicineUpdate,setMedicineUpdate]=useState({
          name:"",
          dose:'',
          description:'',
          quantity:''
      })
  useEffect(()=>{
    displayMed(id)
    displayStoreName(id)
  },[id])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdateClose=()=> setUpshow(false)
  const handleUpdateShow = (medicineId) => {
    // Find the medicine to update
    const medicineToUpdate = medicinesList.find((med) => med.id === medicineId);
    if (medicineToUpdate) {
      setMedicineUpdate(medicineToUpdate);
      setUpshow(true);
    }
  };
  
  const updateMedicine = async () => {
    try {
      const { data: store } = await displayMedicinesApi(id);
  
      // Replace the updated medicine in the list
      const updatedMedicines = store.medicines.map((med) =>
        med.id === medicineUpdate.id ? medicineUpdate : med
      );
  
      const updatedStore = { ...store, medicines: updatedMedicines };
      await putMedicines(id,updatedStore)
  
      // Update the local state
      setMedicinesList(updatedMedicines);
      handleUpdateClose();
      alert("Medicine updated successfully!");
    } catch (e) {
      console.error("Error updating medicine:", e);
      alert("Failed to update medicine. Please try again.");
    }
  };

  


 

  const addMedicines = async () => {
    try {
      // Fetch the store object
      const { data: store } = await displayMedicinesApi(id);
  
      // Ensure medicines is an array
      const medicines = Array.isArray(store.medicines) ? store.medicines : [];  
      // Validate fields
      if (!medicine.name || !medicine.dose || !medicine.description || !medicine.quantity) {
        alert('All fields are required');
        return;
      }
  
      // Add new medicine
      const updatedStore = {
        ...store,
        medicines: [...medicines, medicine], 
      };

      await putMedicines(id,updatedStore)
  
      setMedicinesList(updatedStore.medicines);
      console.log(updatedStore);
      
  
    // clear fields
      setMedicine({
        id: Date.now(),
        name: '',
        dose: '',
        description: '',
        quantity: '',
      });
  
      handleClose();
      alert('Medicine added successfully!');
    } catch (e) {
      console.error('Error adding medicine:', e);
      alert('Failed to add medicine. Please try again.');
    }
  };

   // display medicine
   const  displayMed =async(id)=>{
    try{
      const result = await displayMedicinesApi(id)
    setMedicinesList(result.data.medicines)
    // console.log(medicinesList);
    
    }catch(e){
      console.log(e);
      
    }
   }

   const displayStoreName=async(id)=>{
    const result = await getStoresInAllMedApi(id)
    setStore(result.data)
    // console.log(store);
    

   }
   
   
   const removeMedicine = async (medicineId) => {
    try {
      // Call the delete API
      await deleteMedicineApi(id, medicineId);
  
     displayMed(id)
      alert("Medicine deleted successfully!");
    } catch (e) {
      console.error("Error deleting medicine:", e);
      alert("Failed to delete medicine. Please try again.");
    }
  };
  

// update
  
  

  return (
    <>
    <Header/>
      <div className="p-5 bg-violet-200 min-h-screen  text-white">
        
         
      <div className='flex justify-center items-center'>
        <div style={{width:'300px',}} >
          <h2 className='font-bold text-end text-3xl text-black pt-10'>{store.name}</h2>
          <p className='text-end ms-32 text-red-600'>- {store.place}</p>
        </div>
      </div>
           
        <h2 className="font-bold text-center mb-5">Medicines</h2>
        <button
          onClick={handleShow}
          className="bg-green-900 text-white font-bold p-2 rounded mb-1 float-right"
        >
          +ADD MEDICINES
        </button>
        <table className="table  rounded-lg shadow text-xs sm:text-sm 2xl:text-lg min-w-full border-collapse border border-gray-200 bg-white -ms-5 sm:-ms-0 md:ms-0 lg:ms-0 2xl:ms-0">
          <thead>
            <tr>
              <th>#</th>
              <th>Medicine Name</th>
              <th>Dose</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {medicinesList?.length>0 ? (
              medicinesList?.map((med,index)=>(
                <tr key={med.id}>
                <td>{index + 1}</td>
                <td>{med.name}</td>
                <td>{med.dose}</td>
                <td>{med.description}</td>
                <td>{med.quantity}</td>
                <td className="flex gap-5">
                  <button onClick={()=>handleUpdateShow(med.id)} className="bg-white">
                    <i className="fa-solid fa-pen text-success"></i>
                  </button>
                  <button>
                    <i onClick={()=>removeMedicine(med.id)} className="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
              ))
            ):
            <div className='  flex justify-center items-center w-full text-red-600'> No Data Found!!!</div>
          }
          </tbody>
        </table>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Medicines</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="flex flex-col gap-3">
            <input
              name="name"
              value={medicine.name}
              onChange={(e) => setMedicine({ ...medicine, name: e.target.value })}
              className="p-3 border rounded shadow"
              type="text"
              placeholder="Enter Medicine Name"
            />
            <input
              name="dose"
              value={medicine.dose}
              onChange={(e) => setMedicine({ ...medicine, dose: e.target.value })}
              className="p-3 border rounded shadow"
              type="text"
              placeholder="Enter Medicine Dose"
            />
            <input
              name="description"
              value={medicine.description}
              onChange={(e) =>
                setMedicine({ ...medicine, description: e.target.value })
              }
              className="p-3 border rounded shadow"
              type="text"
              placeholder="Enter Medicine Description"
            />
            <input
              name="quantity"
              value={medicine.quantity}
              onChange={(e) =>
                setMedicine({ ...medicine, quantity: e.target.value })
              }
              className="p-3 border rounded shadow"
              type="number"
              placeholder="Enter Medicine Quantity"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={addMedicines} variant="success">
            ADD
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    
      {/* update */}
      <Modal
        show={upshow}
        onHide={handleUpdateClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Medicines</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="flex flex-col gap-3">
            <input
              name="name"
              value={medicineUpdate.name}
              onChange={(e) => setMedicineUpdate({ ...medicineUpdate, name: e.target.value })}
              className="p-3 border rounded shadow"
              type="text"
              placeholder="Enter Medicine Name"
            />
            <input
              name="dose"
              value={medicineUpdate.dose}
              onChange={(e) => setMedicineUpdate({ ...medicineUpdate, dose: e.target.value })}
              className="p-3 border rounded shadow"
              type="text"
              placeholder="Enter Medicine Dose"
            />
            <input
              name="description"
              value={medicineUpdate.description}
              onChange={(e) =>
                setMedicineUpdate({ ...medicineUpdate, description: e.target.value })
              }
              className="p-3 border rounded shadow"
              type="text"
              placeholder="Enter Medicine Description"
            />
            <input
              name="quantity"
              value={medicineUpdate.quantity}
              onChange={(e) =>
                setMedicine({ ...medicineUpdate, quantity: e.target.value })
              }
              className="p-3 border rounded shadow"
              type="number"
              placeholder="Enter Medicine Quantity"
            />
          </form>
        </Modal.Body>
        <Modal.Footer className='flex justify-center'>
        <Button onClick={updateMedicine} className='w-36' variant="success">
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer/>
    </>
  );
};

export default AllMedicines;
