import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loout } from '../feactures/Studentslice'

function Admin() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/register')
    dispatch(loout())
       }
  return (
    <div>
      <button onClick={()=>handleClick()}>Loguot</button>
      <button onClick={()=>navigate('/studentdata')}>AddStudent data</button>

    </div>
  )
}

export default Admin