import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loout, DeleteData } from "../feactures/Studentslice";
import "./header.css";
import "./Admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltered, setIsFiltered] = useState(false); // Track if filtering is active

  const [FilteringData, serFilteringData] = useState([])
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

  // const localstoragedata = JSON.parse(localStorage.getItem("StudentData")) || [];

  const handleEdit = (val) => {
    navigate("/studentEdit", { state: val });
  };

  const handleDelete = (id) => {
    dispatch(DeleteData(id));
    resetFilter()
  };
  const handleunpaid = (del) => {
    const filterdatat = students.filter(val => val.fee === del);
    serFilteringData(filterdatat);
    setIsFiltered(true); // Mark filtering active
};

const SarchingData = () => {
    let dataToFilter = isFiltered ? FilteringData : students; // Search within filtered data if active
    const FilterSarching = dataToFilter.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    serFilteringData(FilterSarching);
};

const resetFilter = () => {
    serFilteringData([]);
    setIsFiltered(false);
    setSearchQuery('');
};


  return (
    <div>
      {/* Header start */}
      <header className="bg-dark text-white py-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo Section */}
            <div className="col-md-3 text-start">
              <div className="logo fw-bold fs-4">
                AVP<span className="text-primary">Developers</span>
              </div>
            </div>

            {/* Center Icons Section */}
            <div className="col-md-5 d-flex justify-content-center">
              {/* <ul className="d-flex list-unstyled m-0">
                <li className="user-frame d-flex align-items-center justify-content-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.6 25.8L22 20.2C23.3 18.5 24.1 16.4 24.1 14.1C24.1 8.6 19.6 4.1 14.1 4.1C8.6 4.1 4 8.6 4 14.1C4 19.6 8.5 24.1 14 24.1C16.3 24.1 18.5 23.3 20.2 21.9L25.8 27.5C26 27.7 26.4 27.9 26.7 27.9C27 27.9 27.3 27.8 27.6 27.5C28.1 27.1 28.1 26.3 27.6 25.8ZM6.5 14.1C6.5 10 9.9 6.6 14 6.6C18.1 6.6 21.5 10 21.5 14.1C21.5 18.2 18.1 21.6 14 21.6C9.9 21.6 6.5 18.3 6.5 14.1Z"
                      fill="#A098AE"
                    />
                  </svg>
                </li>
              </ul> */}
            </div>

            {/* Add Student & Logout Section */}
            <div className="col-md-4 d-flex justify-content-end">
              <h3 className="text-light log-area mb-0">
                Add Student{" "}
                <button onClick={() => navigate("/studentdata")} className="btn btn-success ms-2">
                  +
                </button>{" "}
                &nbsp; || &nbsp;
                <button className="btn btn-danger ms-2" onClick={handleClick}>
                  <span className="material-icons log">logout</span>
                </button>
              </h3>
            </div>
          </div>
        </div>
      </header>
      {/* Header end */}

      {/* Student List */}


      <div class="container mx-auto p-4 ">
        <h1 class="text-xl font-bold mb-4">
           Student Intuition
        </h1>
        <div class="overflow-x-auto">
          <div className="filtring">
          <div className="filtring-left">
    <input 
        type="text" 
        placeholder="Search..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button onClick={SarchingData}>Search</button>
</div>
<div className="filtring-right">
{/* <button onClick={resetFilter} className="ms-2 bg-secondary p-2 rounded">Reset</button> */}

    <button className="bg-danger p-2 rounded" onClick={() => handleunpaid('unpaid')}>Unpaid</button>
</div>
          </div>
          <table class="min-w-full bg-gray-800 rounded-lg">

            <thead>
              <tr class="w-full bg-gray-700 text-left text-gray-400">
                <th class="py-3 px-4 text-center">
                  Name
                  <i class="fas fa-sort">
                  </i>
                </th>
                <th class="py-3 px-4 text-center" >
                  Email ID
                  <i class="fas fa-sort">
                  </i>
                </th>
                <th class="py-3 px-4 text-center">
                  Gender
                  <i class="fas fa-sort">
                  </i>
                </th>
                <th class="py-3 px-4 text-center">
                  Fees
                  <i class="fas fa-sort">
                  </i>
                </th>
                <th class="py-3 px-4 text-center">
                  Rank
                  <i class="fas fa-sort">
                  </i>
                </th>
                <th class="py-3 px-4 text-center">
                  Action
                  <i class="fas fa-sort">
                  </i>
                </th>
              </tr>
            </thead>
            <tbody class="text-gray-300">

              {(FilteringData.length > 0 ? FilteringData : students).map((val) => (
                <tr key={val.id} className="border-b border-gray-700">
                  <td className="pt-2 m-2 px-4 flex items-center">
                    <img alt="Profile picture" className="img-round-sudent" src={val.img} />
                    {val.name} {val.last}
                  </td>
                  <td className="text-blue-400 text-center">{val.email}</td>
                  <td className="text-center">{val.gender}</td>
                  <td className="py-3 px-4 text-center">{val.fee}</td>
                  <td className="py-3 px-4 text-center">{val.course}</td>
                  <td className="py-3 px-4 text-center">
                    <button className="p-2 bg-danger rounded-2" onClick={() => handleEdit(val)}>Edit</button>
                    <button className="p-2 bg-success ms-3 rounded-2" onClick={() => handleDelete(val.id)}>Delete</button>
                  </td>
                </tr>
              ))
              }




            </tbody>
          </table>
        </div>

      </div>


    </div>
  );
}

export default Admin;
