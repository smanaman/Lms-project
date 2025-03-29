import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddStudent } from "../feactures/Studentslice"; // Import the action from Redux slice
import { useLocation, useNavigate } from "react-router-dom";
import "./studentdata.css";
const StudentData = () => {
  const dispatch = useDispatch();
  const locate = useLocation();
  const nav = useNavigate();
  //  const valuedata =locate.state;

  // State for form input
  const [input, setInput] = useState({
    name: "",
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
    setInput({
      name: "",
      lastname: "",
      email: "",
      gender: "",
      fee: "",
      course: "",
    });
    nav("/admin");
  };

  return (
    <div className="bg-b">
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter student name"
          value={input.name}
          onChange={handleChange}
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter student email"
          value={input.email}
          onChange={handleChange}
        />
        <br />

        <h3>Gender:</h3>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={input.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={input.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <br />

        <h3>Payment Status:</h3>
        <label>
          <input
            type="radio"
            name="fee"
            value="paid"
            checked={input.fee === "paid"}
            onChange={handleChange}
          />
          Paid
        </label>
        <label>
          <input
            type="radio"
            name="fee"
            value="unpaid"
            checked={input.fee === "unpaid"}
            onChange={handleChange}
          />
          Unpaid
        </label>
        <br />

        <h3>Course:</h3>
        <select name="course" value={input.course} onChange={handleChange}>
          <option value="">Select Course</option>
          <option value="development">Development</option>
          <option value="graphics">Graphics</option>
          <option value="ui-ux">UI/UX</option>
        </select>
        <br />

        <button type="submit">add</button>
      </form> */}
      <div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Responsive Registration Form</h2>
            </div>
            <div className="row clearfix">
              <div className>
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="col_half">
                      <div className="input_field">
                        {" "}
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
                        {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-user" />
                        </span>
                        <input
                          type="text"
                          name="lastname"
                          placeholder="Enter student name"
                          value={input.lastname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input_field">
                    {" "}
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
                    {" "}
                    <span>
                      <i aria-hidden="true" className="fa fa-lock" />
                    </span>
                    <input
                      type="email"
                      name="password"
                      placeholder="Enter student password"
                      value={input.password}
                      onChange={handleChange}
                      required
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
                    <input  type="radio"
                      name="gender"
                      value="female"
                      id="rd2"
                      checked={input.gender === "female"}
                      onChange={handleChange} />
                    <label htmlFor="rd2">Female</label>
                  </div>
                  <div className="input_field select_option">
                    <select name="course" value={input.course} onChange={handleChange}>
                      <option>Select a Course</option>
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

                  <input
                    className="button"
                    type="submit"
                    defaultValue="Register"
                  />
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
