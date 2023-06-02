import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseUrl from "../common/BaseUrl";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    repassed: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
    firstName: formData.fname,
    lastName: formData.lname,
    emailId: formData.email,
    phoneNo: formData.phone,
    password: formData.password,

    };
    console.log(formData)
    axios.post(`${baseUrl}/auth/signUp`, obj)
    .then(function (response) {
      console.log(response);
      navigate("/");
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  return (
    // <div onSubmit={handleSubmit}>
      <section className="vh-100" style={{ backgroundColor: "#8CC1BC" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "20px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-1 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-1 text-sm-start">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              First Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="fname"
                             onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2 text-sm-start">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Last Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="lname"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2 text-sm-start">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Phone Number
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="phone"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2 text-sm-start">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Email ID
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              name="email"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2 text-sm-start">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              name="password"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2 text-sm-start">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Repeat your password
                            </label>
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              name="repassed"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-2 text-sm-start">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-2 mb-lg-2">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            onClick={handleSubmit}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      // </div>
  );
};

export default Register;
