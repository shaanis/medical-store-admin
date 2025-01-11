import axios from "axios"
import commonApi from "./commonApi"
import serverurl from "./serverurl"


export const saveStores=async(storeDetails)=>{
    return await commonApi('POST',`${serverurl}/medical-stores`,storeDetails)
}


export const getStores=async()=>{
   return await commonApi('GET',`${serverurl}/medical-stores`,"")
}

// delete store
export const deleteMedStore = async(id)=>{
    return await commonApi('DELETE',`${serverurl}/medical-stores/${id}`,"") 
}


export const putMedicines=async(id,updatedStore)=>{
    return await commonApi('PUT',`${serverurl}/medical-stores/${id}`,updatedStore)
}

// display medicine

export const displayMedicinesApi=async(id)=>{
    return await commonApi('GET',`${serverurl}/medical-stores/${id}`,"")
}


export const getStoresInAllMedApi=async(id)=>{
    return await commonApi('GET',`${serverurl}/medical-stores/${id}`,{})
 }

 export const deleteMedicineApi = async (storeId, medicineId) => {
    const { data: store } = await axios.get(`${serverurl}/medical-stores/${storeId}`);
    console.log("store from all api ", store);
    
    const updatedMedicines = store.medicines.filter((medicine) => medicine.id !== medicineId);
    console.log("store from all api ", updatedMedicines);
  
    await axios.put(`${serverurl}/medical-stores/${storeId}`, {
      ...store,
      medicines: updatedMedicines,
    });
  };
  
  