import React, { useEffect, useState } from 'react';
import { showALLMedicinesApi } from '../services/allApi';

const ShowallMed = () => {
  const [stores, setStores] = useState([]); // Stores data, including medicines

  useEffect(() => {
    fetchStoresAndMedicines();
  }, []);

  const fetchStoresAndMedicines = async () => {
    try {
      const result = await showALLMedicinesApi();

      // Assuming `result.data` is an array of store objects
      setStores(result.data);
    } catch (e) {
      console.error(e);
    }
  };
  let index = 1;

  return (
    <div className="container mt-4">
      <table className="table border rounded shadow p-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Medicine Name</th>
            <th>Store Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stores?.length > 0 ? (
            stores.map((store) =>
              store.medicines.map((medicine) => (
                <tr key={medicine.id}>
                  <td>{index++}</td>
                  <td>{medicine.name}</td>
                  <td>{store.name}</td>
                  <td>
                    {/* Add any actions here */}
                    <button className="btn btn-success">ADD TO CART</button>
                  </td>
                </tr>
              ))
            )
          ) : (
            <tr>
              <td colSpan="4">No medicines available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowallMed;
