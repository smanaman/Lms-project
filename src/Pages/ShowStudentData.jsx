import React from 'react'
import { useLocation } from 'react-router-dom'

function ShowStudentData() {
    const loc=useLocation()
    console.log(loc.state);
    
  return (
    <div>
 
    
    </div>
  )
}

export default ShowStudentData
