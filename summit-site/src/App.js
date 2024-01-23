import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import React from 'react'
import './App.css'
import Header from './components/Header'
import muiTheme from './Themes/muiTheme'
import RightDrawer from './components/RightDrawer'
import AppRouter from './Router' // Import the router component

const App = () => {
    const theme = muiTheme()
    const appStyle = {
        backgroundColor: '#253D88',
        color: '#fff',
        minHeight: '100vh',
        overflow: 'hidden',
    }

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div width="100%" style={appStyle}>
                    <Header />
                    <RightDrawer />
                    <AppRouter />
                </div>
            </Router>
        </ThemeProvider>
    )
}

export default App
