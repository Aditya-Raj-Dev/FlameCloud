import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LocationCheck from '../Pages/LocationCheck'
import Home from '../Pages/Home'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/locationcheck" element={<LocationCheck/>}/>
        </Routes>
    </div>
  )
}

export default AllRoute