import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getStores, saveStores } from "../services/allApi";
const Addmedicine = () => {
  const [medicalStore, setMedicalStore] = useState({
    name: "",
    place: "",
    imgUrl: "",
    medicines: {},
  });

  const navigate = useNavigate();
  const addmedicalStore = async (e) => {
    e.preventDefault();
    try {
      const result = await saveStores(medicalStore);
      console.log(result);
      setMedicalStore({
        name: "",
        place: "",
        imgUrl: "",
      });
      console.log(result.data);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="addMed ">
      <Link to={"/"}>
        <i className="fa-solid fa-arrow-left ml-3 mt-3 text-xl"></i>
      </Link>
      <div className="flex flex-col justify-center items-center h-screen ">
        <h1 className="font-bold  mb-2">Add Medical Stores</h1>
        <div className="bg-addMedBg  flex flex-col items-center font-medium gap-1 justify-center rounded p-5 w-2/3 2xl:w-4/12">
          <h3 className=" strName">Medical Store Name</h3>
          <input
            className="addMedInput"
            value={medicalStore.name}
            name="name"
            onChange={(e) =>
              setMedicalStore({ ...medicalStore, name: e.target.value })
            }
            
            type="text"
            placeholder="Enter Medical Store Name"
          />
          <h3 className="place">Place</h3>
          <input
            value={medicalStore.place}
            name="place"
            onChange={(e) =>
              setMedicalStore({ ...medicalStore, place: e.target.value })
            }
            className="addMedInput"
            type="text"
            placeholder="Enter Place"
          />
          <h3 className="headingAddMed">Image url</h3>
          <input
            value={medicalStore.imgUrl}
            name="imgUrl"
            onChange={(e) =>
              setMedicalStore({ ...medicalStore, imgUrl: e.target.value })
            }
            className="addMedInput"
            type="text"
            placeholder="Enter Image Url"
          />
          <button
            onClick={addmedicalStore}
            
            className="medAddbtn bg-addbtn text-white  mt-5 h-8 rounded-full"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addmedicine;
