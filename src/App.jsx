import React from 'react'
import Navbar from './component/Header/Navbar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard/Dashboard'
import Shipment from './component/Shipment/Shipment'
import Create from './component/Shipment/Create'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/shipment' element={<Shipment />} />
        <Route path='/create' element={<Create />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App