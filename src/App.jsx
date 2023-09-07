import { Route, Routes } from 'react-router-dom'
import './App.css'
import ScrollToTop from 'react-scroll-to-top'
import Home from './Pages/Home/Home'
import Footer from './Pages/Home/Footer/Footer'
import { BsArrowUp } from "react-icons/bs";
import Hero from './Pages/Home/Hero/Hero'
import Team from './Pages/Home/Team/Team'
import Contacts from './Pages/Home/Contacts/Contacts'
import Service from './Pages/Home/Service/Service'
import Login from './Pages/Home/Login/Login'
import Sign from './Pages/Home/Sign/Sign'


function App() {
  

  return (
    <>
   
   <Routes>
   
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Hero />} />

        <Route path="/team" element={  <Team /> }/>
        <Route path="/contact" element={<Contacts />} />
        <Route path="/service" element={<Service />} />
         
       
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
      <Footer/>
      <ScrollToTop 
   style={{
    boxShadow: "none",
    backgroundColor: "#1d4ed8",
    borderRadius: "2%",
    right: 50,
    zIndex: 20,
  }}
  component={
    <BsArrowUp
      style={{ fontSize: "30px", margin: "0 auto", color: "white" }}
    />
  }
   smooth
   top={500} />
    
     
    </>
  )
}

export default App
