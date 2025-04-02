import React from 'react'
import './userchoice.css'
import { useNavigate } from 'react-router-dom'
const Userchoice = () => {
  const nav=useNavigate()
  return (
    <div>
      <div className="usebody">
    <div class="btn-container">
    <button onClick={()=>nav('/studentLogin')} class="btnuse btn-student">
        <i class="fas fa-user-graduate"></i> Student
    </button>
    <button onClick={()=>nav('/login')} class="btnuse btn-admin">
        <i class="fas fa-user-shield"></i> Admin
    </button>
</div>
</div>  

    </div>
  )
}

export default Userchoice
