
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AllMedicines from './pages/AllMedicines'
import Addmedicine from './pages/Addmedicine'
import HealthBlog from './pages/HealthBlog'
import ShowallMed from './pages/ShowallMed'
import Cart from './pages/Cart'

function App() {

  return (
   <>
    <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/:id/allmedicines' element={<AllMedicines/>}> </Route>      
       <Route path='/addMedicine' element={<Addmedicine/>}></Route>
       <Route path='/healthBlog' element={<HealthBlog/>}></Route>
       <Route path='/allMed' element={<ShowallMed/>}></Route>
       <Route path="/cart" element={<Cart/>} />
    </Routes>

   </>
  )
}

export default App



