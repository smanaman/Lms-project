import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editstudent } from "../feactures/Studentslice";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser, faImage, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
// import "./studentEdit.css";

const StudentEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const valuedata = location.state || {};

  const [input, setInput] = useState({
    name: "",
    lastname: "",
    img: "",
    email: "",
    password: "",
    gender: "",
    fee: "",
    course: "",
  });

  useEffect(() => {
    if (valuedata) {
      setInput(valuedata);
    }
  }, [valuedata]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const editdata = (e) => {
    e.preventDefault();
    dispatch(editstudent(input));
    navigate("/admin");
  };

  return (
    <div className="student-edit-container">
      <button className="back-button" onClick={() => navigate('/admin')}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <div className="form-wrapper">
        <div className="form-card">
          <div className="form-header">
            <h2>Edit Student Data</h2>
          </div>
          
          <form onSubmit={editdata} className="edit-form">
            <div className="form-row">
              <div className="form-group">
                <div className="input-field">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="First Name"
                    value={input.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-field">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={input.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="input-field">
                <FontAwesomeIcon icon={faImage} className="input-icon" />
                <input
                  type="url"
                  name="img"
                  placeholder="Profile Image URL"
                  value={input.img}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-field">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={input.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={input.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group radio-group">
              <label>Gender:</label>
              <div className="radio-options">
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
              </div>
            </div>

            <div className="form-group">
              <select
                name="course"
                value={input.course}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select Course</option>
                <option value="ui/ux design">UI/UX Design</option>
                <option value="full stack">Full Stack Development</option>
              </select>
            </div>

            <div className="form-group radio-group">
              <label>Fee Status:</label>
              <div className="radio-options">
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
              </div>
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input type="checkbox"  />
                I agree to terms and conditions
              </label>
            </div>

            <button type="submit" className="submit-button">
              Update Student
            </button>
          </form>

          <div className="form-footer">
            <p>
              Developed by <a href="https://avpdeveloper.com" target="_blank" rel="noopener noreferrer">AVP Developer</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentEdit;