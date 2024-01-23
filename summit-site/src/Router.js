// Router.js
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Agenda from './pages/Agenda'
import Contact from './pages/Contact' // Ensure these paths are correct
import Guests from './pages/Guests'

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<Agenda />} /> {/* Default route */}
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/contact" element={<Contact />} />
        {/* Additional routes can be added here */}
    </Routes>
)

export default AppRouter
