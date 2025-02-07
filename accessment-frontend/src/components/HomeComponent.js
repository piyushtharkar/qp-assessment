import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import AddGroceryComponent from "./AddGroceryComponent";
import axios from "axios";
import { toast } from "react-toastify";
import baseUrl from "../base-url/BaseUrl";
import UpdateGroceryComponent from "./UpdateGroceryComponent";
const OtherComponent = () => {
  return <div>This is another component!</div>;
};
const HomeComponent = () => {
  var userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
  var userRole = userFromLocalStorage.role;
  // var userRole = "Admin";
  var userId = userFromLocalStorage.id;
  // var userId = 1;

  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [groceryList, setGroceryList] = useState([]);
  const [allAvailableGroceryList, setAllAvailableGroceryList] = useState([]);
  const [groceryForUpdate, setGroceryForUpdate] = useState({});
  const handleClose = () => {
    setShow(false);
  };
  const handleCloseUpdate = () => {
    setShowUpdate(false);
  };

  const handleShow = () => setShow(true);
  const handleShowUpdate = (item) => {
    setShowUpdate(true);
    const grocery = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    };
    setGroceryForUpdate(grocery);
  };

  const getGroceryList = async () => {
    try {
      const response = await axios.get(
        baseUrl + "/api/grocery/view-all-grocery-items",
        {
          params: { userId: userId },
        }
      );
      const data = response.data.map((grocery) => ({
        id: grocery.id,
        name: grocery.name,
        price: grocery.price,
        quantity: grocery.quantity,
      }));
      setGroceryList(data);
    } catch (error) {
      console.error("Error while fetching data:", error);
      toast.error("Error while fetching data");
    }
  };

  const getAllAvailableGroceryList = async () => {
    try {
      const response = await axios.get(
        baseUrl + "/api/grocery/get-all-available-grocery-items",
        {
          params: { userId: userId },
        }
      );
      const data = response.data.map((grocery) => ({
        id: grocery.id,
        name: grocery.name,
        price: grocery.price,
        quantity: grocery.quantity,
      }));
      setAllAvailableGroceryList(data);
    } catch (error) {
      console.error("Error while fetching data:", error);
      toast.error("Error while fetching data");
    }
  };

  const deleted = async (id) => {
    try {
      const response = await axios.delete(
        baseUrl + "/api/grocery/delete-grocery-item",
        {
          params: { groceryId: id, userId: userId },
        }
      );
      const data = response.data;
      toast.error(data);
    } catch (error) {
      console.error("Error while fetching data:", error);
      toast.error("Error while fetching data");
    }
  };

  useEffect(() => {
    getGroceryList();
    getAllAvailableGroceryList();
  }, []);

  return (
    <div>
      {userRole === "Admin" ? (
        <>
          <div style={{ margin: "2rem" }}>
            <h1 className="text-center mb-4">Grocery Management</h1>
            <Table striped bordered hover responsive className="shadow-sm">
              <thead className="thead-dark">
                <tr>
                  <th>Sr.No.</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {groceryList.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <Button
                          onClick={() => handleShowUpdate(item)}
                          variant="info"
                          className="me-2"
                        >
                          Update
                        </Button>
                        <Button
                          onClick={() => deleted(item.id)}
                          variant="danger"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div className="d-grid gap-2 mt-4">
              <Button onClick={handleShow} variant="primary" size="lg">
                Add Grocery
              </Button>
              <AddGroceryComponent
                show={show}
                onClose={handleClose}
                getGroceryList={getGroceryList}
              />
              <UpdateGroceryComponent
                showUpdate={showUpdate}
                onCloseUpdate={handleCloseUpdate}
                getGroceryList={getGroceryList}
                groceryForUpdate={groceryForUpdate}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div style={{ margin: "2rem" }}>
            <h1 className="text-center mb-4">Grocery Management</h1>
            <Table striped bordered hover responsive className="shadow-sm">
              <thead className="thead-dark">
                <tr>
                  <th>Sr.No.</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {allAvailableGroceryList.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div className="d-grid gap-2 mt-4">
              <Button  variant="primary" size="lg">
                Order Grocery
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeComponent;
