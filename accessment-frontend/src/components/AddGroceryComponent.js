import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import baseUrl from "../base-url/BaseUrl";
import { toast } from "react-toastify";
const AddGroceryComponent = ({ show, onClose,getGroceryList }) => {
    var userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    var userRole = userFromLocalStorage.role;
    // var userRole = "Admin";
    var userId=userFromLocalStorage.id;
    // var userId=1;
  const [formData, setFormData] = useState({});
 
   const navigator=useNavigate();
  const handleCancel = () => {
    // Reset form when modal is canceled
    onClose(); // Close the modal
  };

  const handelSubmit = async(e) => {
    e.preventDefault(); // Prevent reload
    console.log(formData)

    try {
      // console.log(payload)
      const response = await axios.post(baseUrl + `/add-grocery-item`, formData,{
        params: {userId: userId},
      });
      console.log(response.data);

      toast.success(response.data);
      localStorage.setItem('user',JSON.stringify(response));
      if(response.data){
        getGroceryList();
        handleCancel();
      }

    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigateToHome =()=>{
    getGroceryList();
    handleCancel();
    // navigator('/home');
  }
  return (
    <>
      <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Add Grocery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
             
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter Name"
                  required
                  name="name"
                />
              </Form.Group>

        
              <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Control
                 onChange={handleInputChange}
                  type="number"
                  placeholder="Enter Price"
                  name="price"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Control
                 onChange={handleInputChange}
                  type="number"
                  placeholder="Enter quantity"
                  name="quantity"
                  required
                />
              </Form.Group>

          
              <Button
                onClick={(e) => handelSubmit(e)}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>

              {/* Redirecting back to home page */}
             
                <Button variant="info" size="lg" onClick={navigateToHome}>
                  Home
                </Button>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleCancel}>
        Close
      </Button>
      <Button variant="primary" onClick={handleCancel}>
        Save Changes
      </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddGroceryComponent;
