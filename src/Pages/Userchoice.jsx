import React from 'react'
import './userchoice.css'
import { useNavigate } from 'react-router-dom'
const Userchoice = () => {
  const nav=useNavigate()
  return (
    <div>
      <div class="btn-container">
        <button onClick={()=>nav('/studentLogin')} class="btn btn-student">
            <i class="fas fa-user-graduate"></i> Student
        </button>
        <button onClick={()=>nav('/login')} class="btn btn-admin">
            <i class="fas fa-user-shield"></i> Admin
        </button>
    </div>
    </div>
  )
}

export default Userchoice
