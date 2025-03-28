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

      
      const localstoragedata=  JSON.parse(localStorage.getItem('StudentData'))
      console.log(localstoragedata);

       const handleEdit=(val)=>{
        console.log(val);
          navigate('/Studentdata',{state:val})

       }
      
      
  return (
    <div>
      <button onClick={()=>handleClick()}>Loguot</button>
      <button onClick={()=>navigate('/studentdata')}>AddStudent data</button>

{
      localstoragedata.map((val)=>{
          return(
            <div>
               
            <h6> {val.id}-
              {val.name}-
              {val.email}-
              {val.gender}-
              {val.fee}-
              {val.course}-
              <button onClick={()=>handleEdit(val)}>edit</button>
              <button>delete</button>
              </h6> 
            </div>
          
          )
      })
}
    </div>
  )
}

export default Admin