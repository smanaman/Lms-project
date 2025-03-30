import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";
import Register from "./Register";


const Login = () => {
  const nav = useNavigate();
  const [input, setinput] = useState({
    name: "",
    password: "",
  });
  const getdata = JSON.parse(localStorage.getItem("AdminRegister"));
  const handlesubmit = (e) => {
    e.preventDefault();
    getdata.map((val) => {
      if (val.name == input.name && val.password == input.password) {
        nav("/admin");
      } else {
        console.log("register first");
        
      }
      console.log(val);
    });
  };
  const handlechange = (e) => {
    setinput((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  return (
    // <div>
    //       <h1>Login In</h1>
    //         <form onSubmit={handlesubmit}>
    //             <label>Name</label>

    //             <br />
    //             <label>Password</label>

    //             <button type='submit'>Submit</button>

    //         </form>
    //         <button onClick={()=>nav('/register')}>register</button>

    // </div>
    <>
    
      <div className="bg-d"> 
        <section>
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="left">
                <span className="line" />
                <h2>
                  Hello, I'm John More, <br /> a <span>digital designer</span>
                </h2>
                <p>Web Design Tutorial using HTML &amp; CSS</p>
                <a href="#" className="btn">
                  Contact
                </a>
                <div className="social-media">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <div className="right">
                <div className="form">
                  <div className="text-center">
                    <h6>
                      <span>Log In</span>
                    </h6>
                    <input type="checkbox" className="checkbox" id="reg-log" />
                    <label htmlFor="reg-log" />
                    <div className="card-3d-wrap">
                      <div className="card-3d-wrapper">
                        <div className="card-front">
                          <div className="center-wrap">
                            <form onClick={handlesubmit}>
                              <h4 className="heading">Log In</h4>
                              <div className="form-group">
                                <input
                                  type="text"
                                  onChange={handlechange}
                                  value={input.name}
                                  placeholder="Enter your name"
                                  className="form-style"
                                  name="name"
                                />
                                <i className="input-icon material-icons">
                                  person
                                </i>
                              </div>
                              <div className="form-group">
                                <input
                                  type="password"
                                  onChange={handlechange}
                                  value={input.password}
                                  placeholder="enter password"
                                  className="form-style"
                                  name="password"
                                />
                                <i className="input-icon material-icons">
                                  lock
                                </i>
                              </div>
                              <button type="submit" className="btn-1">
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                        <div className="card-back">
                          <Register />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
