
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AllMedicines from './pages/AllMedicines'
import Addmedicine from './pages/Addmedicine'
import HealthBlog from './pages/HealthBlog'

function App() {

  return (
   <>
    <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/:id/allmedicines' element={<AllMedicines/>}> </Route>      
       <Route path='/addMedicine' element={<Addmedicine/>}></Route>
       <Route path='/healthBlog' element={<HealthBlog/>}></Route>
    </Routes>

   </>
  )
}

export default App



