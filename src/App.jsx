
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './Pages/Register'
import Admin from './Pages/Admin'
import Login from './Pages/Login'
import StudentData from './Pages/StudentData'
import StudentEdit from './Pages/StudentEdit'
function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
     < Route path='/register' element={<Register/>}/>
     < Route path='/login' element={<Login/>}/>
     < Route path='/admin' element={<Admin/>}/>
     < Route path='/studentdata' element={<StudentData/>}/>
     < Route path='/studentEdit' element={<StudentEdit/>}/>


    </Routes>
    </BrowserRouter>
     {/* <Home/> */}
    </>
  )
}

export default App
