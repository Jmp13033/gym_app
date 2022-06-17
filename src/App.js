import React from 'react'
import "./App.css"
import {Route, Routes} from 'react-router-dom'
import {Box} from "@mui/material"
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import ExerciseDetails from './components/pages/ExerciseDetails'
import Footer from './components/Footer'

export const App = () => {
    return (
        <Box width="400px" sx={{width: {x1: "1488px" }}} m ="auto">
        <Navbar/>
        <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/exercise/:id" element= {<ExerciseDetails/>}/>
        </Routes>
        <Footer/>
        
        </Box>
        
    )
}

export default App;
