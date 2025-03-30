import React, { useState } from 'react'
import './StudentLogin.css'
import { useNavigate } from 'react-router-dom';
function StudentLogin() {
    const nav=useNavigate()
    const comperlogin=JSON.parse(localStorage.getItem('StudentData'))
    const [input, setinput] = useState({
       email:"",
        password: "",
    });
    const handlechange = (e) => {
        setinput((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    };
    const handlesubmit = (e) => {
        e.preventDefault()
console.log(input);
console.log(comperlogin);
const showdata = comperlogin.filter((val) => input.email === val.email && input.password === val.password);
console.log(showdata);

if (showdata.length > 0) {  
    nav('/showstudentdata',{state:showdata});
} else {
    alert('Not correct');
}

    }
    return (

        <div>
            <div className='body'>
                <div className="login-container">
                    <h2>Student Login</h2>
                    <form onSubmit={handlesubmit}>
                        <div className="input-group">
                            <input type="email"
                                name="email"
                                value={input.email}
                                onChange={handlechange}

                                placeholder="Enter Email" required="" />
                        </div>
                        <div className="input-group">
                            <input type="password"
                                name="password"
                                value={input.password}
                                onChange={handlechange}
                                placeholder="Enter Password" required="" />
                        </div>
                        <button type="submit" className="login-btn">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StudentLogin
