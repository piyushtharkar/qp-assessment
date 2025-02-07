import React, { useState } from "react";
import axios from "axios";
import baseUrl from "../base-url/BaseUrl";
import { toast } from "react-toastify";
const RegisterComponent = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm1 = async (e) => {
    e.preventDefault();
  };

  const handleRegistrationForm = async (e) => {
    e.preventDefault();

    const register = { name, role, email, password };

    console.log(register);

    try {
      // console.log(payload)
      const response = await axios.post(baseUrl + `/auth/signup`, register);
      console.log(response.data);

      toast.success(response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center"> User Registration Form </h2>
            </div>

            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <label className="col-md-3 control-label"> Name </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-3 control-label"> Email </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-3 control-label"> Password </label>
                  <div className="col-md-9">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-3 control-label"> Role </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="role"
                      className="form-control"
                      placeholder="Enter Role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleRegistrationForm(e)}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
