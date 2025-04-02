import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Showdata.css"
function ShowStudentData() {
    const loc=useLocation()
    console.log(loc.state);
    
  return (
    <div>
 
 <>
  {/* <title>Student Profile</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  /> */}
 {
  loc.state.map((val)=>{
return(
  <div className="container my-5">
  <h1 className="text-center mb-4">Student Profile Using HTML &amp; CSS</h1>
  <div className="row">
    <div className="col-md-4">
      <div className="profile-card text-center">
        <div className="photo">
        <img
          src={val.img}
          alt="Profile picture of Mamta Fulwary"
          className="profile-img"
          // width={100}
          // height={100}
        />
        </div>
        
        <h2>{val.name} {val.lastname}</h2>
        {/* <p>Student ID: 123456</p>
        <p>Class: 10</p>
        <p>Section: A</p> */}
      </div>
    </div>
    <div className="col-md-8">
      <div className="info-card">
        <h3 className="info-title">
          <i className="fas fa-info-circle me-2" />
          General Information
        </h3>
        <table className="table">
          <tbody>
            <tr>
              <td className="fw-bold">ID</td>
              <td>{val.id}</td>
            </tr>
            <tr>
              <td className="fw-bold">Academic Year</td>
              <td>2023-24</td>
            </tr>
            <tr>
              <td className="fw-bold">Gender</td>
              <td>{val.gender}</td>
            </tr>
            <tr>
              <td className="fw-bold">course</td>
              <td>{val.course}</td>
            </tr>
            <tr>
              <td className="fw-bold">Fee</td>
              <td>{val.fee}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="info-card">
        <h3 className="info-title">
          <i className="fas fa-info-circle me-2" />
          Other Information
        </h3>
        <p>
          Academic scores, standardized exam results, research potential, and
          work experience (part-time/community service, and leadership) are all
          factors that the admission committee considers while making its
          choice. Students and their parents can form a data-driven, informed
          view about a student's interests, abilities, strengths and weaknesses.
          The same stands true for career counsellors and consultants.
        </p>
      </div>
    </div>
  </div>
</div>


)
  })
 }
</>
    </div>
  )
}

export default ShowStudentData
