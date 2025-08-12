import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Service } from './Pages/Service'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Temple from './Pages/Temple'
import Membership from './Pages/Membership'
import Gallery from './Pages/Gallery'
import Magazine from './Pages/Magazine'
import Review from './Pages/Review'
import Sidebar from './Components/Sidebar/Sidebar'
import { Home } from './Pages/Home'
import { Footer } from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/service' element={<Service/>} />
      <Route path='/temple' element={<Temple/>} />
      <Route path='/membership' element={<Membership/>} />
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/magazine' element={<Magazine/>}/>
      <Route path='/review' element={<Review/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
