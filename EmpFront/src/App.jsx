import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from './components/Footer'
import Employee from './components/Employee'
import LoginPage from './components/LoginPage'
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <BrowserRouter>
    <div className="App">
      <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/employee" element={<Employee/>} />
            <Route path="/addemployee" element={<AddEmployee/>} />
            <Route path="/updateemployee/:id" element={<UpdateEmployee/>} />
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>    
    </>
  )
}

export default App
