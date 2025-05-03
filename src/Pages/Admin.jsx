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
  const [isFiltered, setIsFiltered] = useState(false);
  const [FilteringData, setFilteringData] = useState([]);

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

  const handleEdit = (val) => {
    navigate("/studentEdit", { state: val });
  };

  const handleDelete = (id) => {
    dispatch(DeleteData(id));
    resetFilter();
  };

  const handleunpaid = (del) => {
    const filterdata = students.filter(val => val.fee === del);
    setFilteringData(filterdata);
    setIsFiltered(true);
  };

  const SarchingData = () => {
    let dataToFilter = isFiltered ? FilteringData : students;
    const FilterSarching = dataToFilter.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteringData(FilterSarching);
  };

  const resetFilter = () => {
    setFilteringData([]);
    setIsFiltered(false);
    setSearchQuery('');
  };

  return (
    <div className="admin-container">
      {/* Header start */}
      <header className="bg-dark text-white py-2 py-md-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo Section */}
            <div className="col-6 col-md-3 text-start">
              <div className="logo fw-bold fs-4 fs-md-5">
                AVP<span className="text-primary">Developers</span>
              </div>
            </div>

            {/* Center Icons Section - Empty in current code */}
            <div className="d-none d-md-block col-md-5">
              {/* Content can be added here if needed */}
            </div>

            {/* Add Student & Logout Section */}
            <div className="col-6 col-md-4 d-flex justify-content-end">
              <div className="log-area d-flex align-items-center">
                <span className="d-none d-md-inline text-light me-2">Add Student</span>
                <button 
                  onClick={() => navigate("/studentdata")} 
                  className="btn btn-success btn-sm me-2"
                >
                  <span className="d-none d-md-inline">+</span>
                  <span className="d-md-none">Add</span>
                </button>
                <span className="d-none d-md-inline text-light me-2">||</span>
                <button 
                  className="btn btn-danger btn-sm" 
                  onClick={handleClick}
                >
                  <span className="material-icons">logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header end */}

      {/* Student List */}
      <div className="container-fluid p-2 p-md-4">
        <h1 className="text-xl fw-bold mb-3 mb-md-4">Student Intuition</h1>
        
        {/* Filtering Section */}
        <div className="filtering-container mb-3">
          <div className="row g-2">
            <div className="col-12 col-md-8">
              <div className="search-container d-flex">
                <input 
                  type="text" 
                  placeholder="Search by name or email..." 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-control search-input"
                />
                <button 
                  onClick={SarchingData}
                  className="btn btn-primary search-btn"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-md-end">
              <div className="filter-buttons">
                <button 
                  className="btn btn-warning me-2"
                  onClick={resetFilter}
                >
                  Reset
                </button>
                <button 
                  className="btn btn-danger" 
                  onClick={() => handleunpaid('unpaid')}
                >
                  Unpaid
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="table-responsive">
          <table className="table table-dark table-hover rounded">
            <thead>
              <tr>
                <th className="text-center">Name</th>
                <th className="text-center d-none d-md-table-cell">Email ID</th>
                <th className="text-center">Gender</th>
                <th className="text-center">Fees</th>
                <th className="text-center d-none d-sm-table-cell">Course</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(FilteringData.length > 0 ? FilteringData : students).map((val) => (
                <tr key={val.id}>
                  <td className="align-middle">
                    <div className="d-flex align-items-center">
                      <img 
                        alt="Profile" 
                        className="img-round-student me-2" 
                        src={val.img} 
                      />
                      <span>
                        {val.name} {val.last}
                      </span>
                    </div>
                  </td>
                  <td className="text-center align-middle d-none d-md-table-cell">
                    <span className="text-info">{val.email}</span>
                  </td>
                  <td className="text-center align-middle">{val.gender}</td>
                  <td className="text-center align-middle">{val.fee}</td>
                  <td className="text-center align-middle d-none d-sm-table-cell">{val.course}</td>
                  <td className="text-center align-middle">
                    <div className="d-flex justify-content-center">
                      <button 
                        className="btn btn-sm btn-warning me-1 me-md-2"
                        onClick={() => handleEdit(val)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-sm btn-danger" 
                        onClick={() => handleDelete(val.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;