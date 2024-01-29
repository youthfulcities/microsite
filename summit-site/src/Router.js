import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Agenda from './pages/Agenda'
import People from './pages/People'

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<Agenda />} /> {/* Default route */}
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/people" element={<People />} />
        
       
    </Routes>
)

export default AppRouter
