import React from 'react'
import { useNavigate } from 'react-router-dom' 
import { useState } from 'react'
const Login=()=> {
    const nav=useNavigate()
       const [input, setinput] = useState({
            name: "",
            password: ""
        })
        const getdata=JSON.parse(localStorage.getItem('AdminRegister'))
        const handlesubmit=(e)=>{
            e.preventDefault()
getdata.map((val)=>{
    if (val.name==input.name && val.password==input.password){
        nav('/admin')
    }else{
        alert('register first')
    }
    console.log(val);
    
})
        }
        const handlechange=(e)=>{
            setinput((pre)=>({...pre,[e.target.name]:e.target.value}))
        }
  return (
    <div>
          <h1>Login Register</h1>
            <form onSubmit={handlesubmit}>
                <label>Name</label>
                <input type="text"
                    onChange={handlechange}
                    value={input.name}
                    name='name'
                />
                <br />
                <label>Password</label>
                <input type="password"
                    onChange={handlechange}
                    value={input.password}
                    name='password'
                />
                <button type='submit'>Submit</button>

            </form>
            <button onClick={()=>nav('/register')}>register</button>

    </div>
  )
}

export default Login