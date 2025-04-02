import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editstudent } from "../feactures/Studentslice";
import { useLocation, useNavigate } from "react-router-dom";

const StudentEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const valuedata = location.state || {}; // Get data from navigation

  console.log(valuedata);

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

  // Handle input changes
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
    <div className="bg-b flex-column">
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Edit Student Data</h2>
          </div>
          <div className="row clearfix">
            <form onSubmit={editdata}>
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
                <select name="course" value={input.course} onChange={handleChange}>
                  <option value="">Select a Course</option>
                  <option value="ui/ux design">UI / UX Design</option>
                  <option value="full stack">Full Stack Development</option>
                </select>
                <div className="select_arrow" />
              </div>
              <div className="input_field radio_option">
  <input
    type="radio"
    name="fee"
    value="paid"
    id="fee_paid"
    checked={input.fee === "paid"}
    onChange={handleChange}
  />
  <label htmlFor="fee_paid">Paid</label>

  <input
    type="radio"
    name="fee"
    value="unpaid"
    id="fee_unpaid"
    checked={input.fee === "unpaid"}
    onChange={handleChange}
  />
  <label htmlFor="fee_unpaid">Unpaid</label>
</div>

              <div className="input_field checkbox_option">
                <input type="checkbox" id="cb1" />
                <label htmlFor="cb1">I agree with terms and conditions</label>
              </div>

              <input className="button" type="submit" value="Update" />
            </form>
          </div>
        </div>
      </div>
      <p className="credit">
        Developed by{" "}
        <a href="http://www.designtheway.com" target="_blank">
        AVP Developer
        </a>
      </p>
    </div>
  );
};

export default StudentEdit;
