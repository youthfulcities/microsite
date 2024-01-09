import { ThemeProvider } from '@mui/material'
import React from 'react'
import './App.css'
import Header from './Header'
import MainSection from './MainSection'
import Titles from './Titles'
import muiTheme from './muiTheme'

const App = () => {
    const theme = muiTheme()

    const appStyle = {
        backgroundColor: '#253D88',
        color: '#fff',
        minHeight: '100vh', // Ensures the content takes at least the height of the viewport
        overflow: 'hidden',
    }

    return (
        <ThemeProvider theme={theme}>
            <div width="100%" style={appStyle}>
                <Header />
                <Titles />
                <MainSection />
            </div>
        </ThemeProvider>
    )
}

export default App
