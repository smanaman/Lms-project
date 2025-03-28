import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editstudent } from "../feactures/Studentslice";
import { useLocation, useNavigate } from "react-router-dom";

const StudentEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const valuedata = location.state || {}; // Get data from navigation

  // ✅ Set initial state properly using useEffect
  const [input, setInput] = useState({
    id: "",
    name: "",
    email: "",
    gender: "",
    fee: "",
    course: "",
  });

  useEffect(() => {
    if (valuedata) {
      setInput(valuedata);
    }
  }, [valuedata]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Correct function for submitting edit
  const editdata = () => {
    dispatch(editstudent(input));
    navigate("/admin"); // Redirect to Admin page after updating
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
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

        <button type="button" onClick={() => editdata()}>Update</button>
      </form>
    </div>
  );
};

export default StudentEdit;
