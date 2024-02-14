
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import RegisterPage from './Pages/RegisterPage'
import StudentDetails from './Pages/StudentDetails'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/allStudents' element={<StudentDetails/>}/>
     </Routes>
    </>
  )
}

export default App