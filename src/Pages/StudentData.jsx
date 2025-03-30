import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddStudent } from "../feactures/Studentslice"; // Import the action from Redux slice
import { useLocation, useNavigate } from "react-router-dom";

const StudentData = () => {
  const dispatch = useDispatch();
  const locate=useLocation()
  const  nav=useNavigate()
//  const valuedata =locate.state;
  
  // State for form input
  const [input, setInput] = useState({
    name: "" ,
    img:"",
    email: "",
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
    setInput({ name: "",img:"", email: "", gender: "", fee: "", course: "" }); 
    nav('/admin')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter student name"
          value={input.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="url"
          name="img"
          placeholder="Enter student photo"
          value={input.img}
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

        <button type="submit" >add</button>
      </form>
    </div>
  );
};

export default StudentData;
