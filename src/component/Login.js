import React,{useEffect, useState} from "react";
import "./Style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  
 const navigate = useNavigate();
  const [useradd,setData] = useState({
    email: "",
    password: "",
  })
  const storeData =(e)=>{
    setData({...useradd,[e.target.value]: e.target.value})
  }
  const obj={
    emailId: useradd.email,
    password: useradd.password,
   }
   function onSubmit(event) {
    event.preventDefault();
    
        navigate("/home");
  };
 

  return (
    <>
      <div className="container">
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-8 col-xl-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="img-fluid"
                  alt="Phone image"
                />
              </div>
              <div className="col-md-7 col-lg-3 col-xl-4 offset-xl-1">
                <form>
                  {/* Email input */}
                  <div className="form-outline mb-4 text-sm-start">
                    <label className="form-label " htmlFor="form1Example13">
                      User address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      onChange={storeData}
                    />
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-4 text-sm-start">
                    <label
                      className="form-label col-md-6 text-left"
                      htmlFor="form1Example23"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      name="password"
                      onChange={storeData}
                    />
                  </div>
                  <div className="d-flex justify-content  mb-4">
                    {/* Checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="form1Example3"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form1Example3"
                      >
                        {" "}
                        Remember me ....
                      </label>
                    </div>
                    <Link to="/">Forgot password?</Link>
                  </div>
                  {/* Submit button */}
                  <p className="text-center text-muted mt-1 mb-2">
                    Have already an account?{" "}
                    {/* <Link to="signup" className="fw-bold text-body">
                      <u>SignUp here</u>
                    </Link> */}
                  </p>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    onClick={onSubmit}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
    // <div>
    //   <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />
    //   <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/> <br />

    //   <button onClick={onSubmit}>Login</button>
    // </div>
  );
};

export default Login;
