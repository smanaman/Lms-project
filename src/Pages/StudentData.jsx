import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddStudent } from "../feactures/Studentslice"; 
import { useLocation, useNavigate } from "react-router-dom";
import "./studentdata.css";

const StudentData = () => {
  const dispatch = useDispatch();
  const locate = useLocation();
  const nav = useNavigate();

  // State for form input
  const [input, setInput] = useState({
    name: "",
    img: "",
    lastname: "",
    email: "",
    password: "",
    gender: "",
    fee: "",
    course: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddStudent(input)); // Dispatch the action to Redux store
    console.log("Submitted Data:", input);
    
    // Reset form
    setInput({
      name: "",
      img: "",
      lastname: "",
      email: "",
      password: "",
      gender: "",
      fee: "",
      course: "",
    });

    nav("/admin");
  };

  return (
    <div className="bg-b">
      <div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Responsive Registration Form</h2>
            </div>
            <div className="row clearfix">
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="col_half">
                      <div className="input_field">
                        <span>
                          <i aria-hidden="true" className="fa fa-user" />
                        </span>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter student name"
                          value={input.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col_half">
                      <div className="input_field">
                        <span>
                          <i aria-hidden="true" className="fa fa-user" />
                        </span>
                        <input
                          type="text"
                          name="lastname"
                          placeholder="Enter student last name"
                          value={input.lastname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Image URL Field */}
                  <div className="input_field">
                    <span>
                      <i aria-hidden="true" className="fa fa-image" />
                    </span>
                    <input
                      type="url"
                      name="img"
                      placeholder="Enter student photo URL"
                      value={input.img}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input_field">
                    <span>
                      <i aria-hidden="true" className="fa fa-envelope" />
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter student email"
                      value={input.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input_field">
                    <span>
                      <i aria-hidden="true" className="fa fa-lock" />
                    </span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter student password"
                      value={input.password}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input_field radio_option">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      id="rd1"
                      checked={input.gender === "male"}
                      onChange={handleChange}
                    />
                    <label htmlFor="rd1">Male</label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      id="rd2"
                      checked={input.gender === "female"}
                      onChange={handleChange}
                    />
                    <label htmlFor="rd2">Female</label>
                  </div>

                  <div className="input_field select_option">
                    <select
                      name="course"
                      value={input.course}
                      onChange={handleChange}
                    >
                      <option value="">Select a Course</option>
                      <option value="ui/ux design">UI / UX Design</option>
                      <option value="full stack">Full Stack Development</option>
                    </select>
                    <div className="select_arrow" />
                  </div>

                  <div className="input_field checkbox_option">
                    <input type="checkbox" id="cb1" />
                    <label htmlFor="cb1">
                      I agree with terms and conditions
                    </label>
                  </div>

                  <input className="button" type="submit" value="Register" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <p className="credit">
          Developed by{" "}
          <a href="http://www.designtheway.com" target="_blank">
            Design the way
          </a>
        </p>
      </div>
    </div>
  );
};

export default StudentData;
