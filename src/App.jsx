
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './Pages/Register'
import Admin from './Pages/Admin'
import Login from './Pages/Login'
import StudentData from './Pages/StudentData'
function App() {
  

  return (
    <>
    <StudentData/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
     < Route path='/register' element={<Register/>}/>
     < Route path='/login' element={<Login/>}/>
     < Route path='/admin' element={<Admin/>}/>

    </Routes>
    </BrowserRouter>
     {/* <Home/> */}
    </>
  )
}

export default App
