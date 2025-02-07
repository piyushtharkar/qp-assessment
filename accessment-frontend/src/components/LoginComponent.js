import React, { useState } from "react";
import axios from "axios";
import baseUrl from "../base-url/BaseUrl";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator=useNavigate();

  const handleLoginForm = async (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
    const login = { email, password };
    try {
      // console.log(payload)
      const response = await axios.post(baseUrl + `/auth/signin`, login);
      console.log(response.data);

      toast.success(response.data);
      localStorage.setItem('user',JSON.stringify(response));
      if(response.data){
        navigator('/home');
      }

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
              <h2 className="text-center"> Login Form </h2>
            </div>

            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <label className="col-md-3 control-label"> Email</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Enter email"
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

                <div className="form-group mb-3">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleLoginForm(e)}
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

export default LoginComponent;
