import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../App.css";
import { Link } from "react-router-dom";
import { deleteMedStore, getStores } from "../services/allApi";
import { Button, Modal } from "react-bootstrap";
import Footer from "../components/Footer";

const Home = () => {
  const [store, setStore] = useState([]);
  const [search, setSearch] = useState("");
  const [storeToDelete, setStoreToDelete] = useState(null);
  const [loading, setLoading] = useState(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (store) => {
    setStoreToDelete(store);
    setShow(true);
  };

  useEffect(() => {
    displayStore();
  }, []);

  const displayStore = async () => {
    try {
      setLoading(true);
      const result = await getStores();
      // console.log(result.data);
      setStore(result.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const searchStores = store?.filter((medicalStore) =>
    medicalStore.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteStore = async (id) => {
    await deleteMedStore(id);
    displayStore();
    handleClose();
  };

  return (
    <>
      <Header />
      <div className="pt-14 pb-80 ">
        <h1 className="text-center pt-4 font-bold">Add Stores</h1>
        <div className="srchBack flex justify-center mt-5">
          <div className="m-5 srch flex justify-between mx-24 lg:mx-0 md:mx-0">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="input"
              placeholder="Search Medical Store Here"
            />
            <Link
              to={"/addMedicine"}
              className="bg-red-700 rounded-full text-center p-1 m-1 text-white w-1/3 flex justify-center items-center font-bold"
            >
              +ADD STORE
            </Link>
          </div>
        </div>

        <h3 className="mt-20 font-bold ms-20 ourStore">Our Medical Stores</h3>
        <div className="grid grid-cols-1 justify-items-center 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2  min-h-screen mt-11 ms-6">
          {  loading ? (
            <div
              className="mt-24"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                className="bg-transparent"
                style={{ width: "400px" }}
                src="https://cdn.dribbble.com/users/3337757/screenshots/6825268/076_-loading_animated_dribbble_copy.gif"
                alt="Loading Spinner"
              />
              <h1 className="text-2xl font-bold -mt-5">Loading...</h1>
            </div>
          ) : searchStores?.length > 0 ? (
            searchStores?.map((item) => (
              <div key={item.id} className="bg-cardbg rounded m-5">
                <Link
                  to={{
                    pathname: `${item.id}/allmedicines`,
                    state: { store: item }, // Pass the store object in the state
                  }}
                >
                  <img
                    style={{ height: "140px", width: "100%" }}
                    className="rounded"
                    src={item.imgUrl}
                    alt=""
                  />
                </Link>
                <div className="flex justify-between mx-3">
                  <h2 className="font-bold text-center mt-3">
                    {item.name.toUpperCase()}
                  </h2>
                  <button onClick={() => handleShow(item)} className="mt-3">
                    <i className="fa-solid fa-trash text-red-600"></i>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No Stores Added yet!!!</div>
          )}
        </div>
      </div>

      {/* Modal for Deleting a Store */}
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          dialogClassName="modal-dialog-centered custom-modal"
        >
          <Modal.Body className="flex flex-col items-center text-center">
            <i className="fa-solid fa-trash-can bg-red-300 text-red-600 text-center p-2 rounded-full w-8"></i>
            <h1 className="font-medium mt-3 mb-3">Delete Store</h1>
            <p className="mx-2">
              Are you sure you want to delete{" "}
              <strong>{storeToDelete?.name}</strong>? This action cannot be
              undone.
            </p>
            <div className="flex gap-5 mt-3">
              <Button
                className="border bg-white text-black w-32"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                onClick={() => deleteStore(storeToDelete?.id)}
                variant="danger"
                className="w-32"
              >
                Delete
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </>
      <Footer />
    </>
  );
};

export default Home;
