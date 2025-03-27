import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addadmin } from '../feactures/Studentslice'
import { useNavigate } from 'react-router-dom'
function Register() {
    const naviget=useNavigate()
    const state = useSelector((state) => state.admin.admin)
    const dispatch = useDispatch()
    const [input, setinput] = useState({
        name: "",
        password: ""
    })

    const handlesubmit = (e) => {
        e.preventDefault()
        dispatch(addadmin(input)) 
        setinput({ name: "", password: "" })
        naviget('/login')
    }

    useEffect(() => {
        localStorage.setItem('AdminRegister', JSON.stringify(state))
        console.log(state)
    }, [state]) 

    const handlechange = (e) => {
        setinput((pre) => ({ ...pre, [e.target.name]: e.target.value }))
    }

    return (
        <div>
            <h1>Admin Register</h1>
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

            {state.map((val, index) => (
                <p key={index}>{val.name} - {val.password}</p>
            ))}
        </div>
    )
}

export default Register
