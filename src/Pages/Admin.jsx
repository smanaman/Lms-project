import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loout, DeleteData } from "../feactures/Studentslice";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let Getadmindata = JSON.parse(localStorage.getItem("login"));
    if (!Getadmindata) {
      navigate("/login");
    }
  }, [navigate]);

  const handleClick = () => {
    dispatch(loout());
    navigate("/");
  };

  const { students } = useSelector((state) => state.admin);
  console.log(students);

  const localstoragedata = JSON.parse(localStorage.getItem("StudentData")) || [];

  const handleEdit = (val) => {
    navigate("/studentEdit", { state: val });
  };

  const handleDelete = (id) => {
    dispatch(DeleteData(id));
  };

  return (
    <div>
      {/* Header start */}
      <header>
        <div className="containe">
          <div className="row">
            <div className="col-3 py-4">
              <div className="logo">
                AVP<span>Developers</span>
              </div>
            </div>
            <div className="col-5 py-4 d-flex align-items-center">
              <ul className="d-flex  m-0">
                <li className="user-frame d-flex align-items-center justify-center">
                  <a href="/">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.6 25.8L22 20.2C23.3 18.5 24.1 16.4 24.1 14.1C24.1 8.60001 19.6 4.10001 14.1 4.10001C8.6 4.10001 4 8.60001 4 14.1C4 19.6 8.5 24.1 14 24.1C16.3 24.1 18.5 23.3 20.2 21.9L25.8 27.5C26 27.7 26.4 27.9 26.7 27.9C27 27.9 27.3 27.8 27.6 27.5C28.1 27.1 28.1 26.3 27.6 25.8ZM6.5 14.1C6.5 10 9.9 6.60001 14 6.60001C18.1 6.60001 21.5 10 21.5 14.1C21.5 18.2 18.1 21.6 14 21.6C9.9 21.6 6.5 18.3 6.5 14.1Z"
                        fill="#A098AE"
                      ></path>
                    </svg>
                  </a>
                </li>
                {/* Add more icons here */}
              </ul>
            </div>
            <div className="col-4 d-flex align-items-center">
              <div>
                <h3 className="text-light log-area">
                  Add Student{" "}
                  <button onClick={() => navigate("/studentdata")} className="addstd">
                    +
                  </button>{" "}
                  &nbsp; || &nbsp;
                  <button className="bt-log" onClick={handleClick}>
                    <span className="material-icons log">logout</span>
                  </button>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header end */}

      {/* Student List */}
      {localstoragedata.map((val) => (
        <div key={val.id}>
          <h6>
            {val.id} - {val.name} -{" "}
            <img src={val.img} alt="student" width={50} height={100} /> - {val.email} -{" "}
            {val.gender} - {val.fee} - {val.course} -{" "}
            <button onClick={() => handleEdit(val)}>Edit</button>{" "}
            <button onClick={() => handleDelete(val.id)}>Delete</button>
          </h6>
        </div>
      ))}
    </div>
  );
}

export default Admin;
