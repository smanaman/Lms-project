import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loout } from "../feactures/Studentslice";
import Header from "../Component/Header";

function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(loout());
    navigate("/register");
  };

  const localstoragedata = JSON.parse(localStorage.getItem("StudentData")) || [];

  const handleEdit = (val) => {
    navigate("/StudentEdit", { state: val });
  };

  // const handleDelete=(val)=>{
  //   dispatch(deletestudent(val))
  // }
  return (
    <div>
      <Header/>
      <button onClick={handleClick}>Logout</button>
      <button onClick={() => navigate("/studentdata")}>Add Student Data</button>

      {localstoragedata.map((val) => (
        <div key={val.id}>
          <h6>
            {val.id} - {val.name} - {val.email} - {val.gender} - {val.fee} - {val.course} -
            <button onClick={() => handleEdit(val)}>Edit</button>
            <button onClick={()=>handleDelete(val.id)}>Delete</button>
          </h6>
        </div>
      ))}
    </div>
  );
}

export default Admin;
