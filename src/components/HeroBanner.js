import React from 'react'
import {Box, Stack, Typography, Button} from "@mui/material"
import Hero from "../assets/images/gym.png"
import { Block } from '@mui/icons-material'

function HeroBanner() {
  return (

    <Box  
    sx={{
      mt: {lg: "212px", xs:"70px"},
      ml: {sm: "50px", }

    }} position="relative" p="20px">
    
    
    
    
    
    

    <Typography color ="#FF2625" fontWeight= "600" fontSize="26px">

    Fitness is a way of life.
    </Typography>

    <Typography fontWeight="700"  
    sx= {{fontSize: { lg:"44px", xs:"44px"}}}
    mb="23px"
    mt={"30px"}
    >
    Get Stronger, Live Healthy, <br/> Be More Active.
    
    </Typography>
    <Typography 
    fontSize="22px" 
    lineHeight= "35px"
    mb={4}

    
    
    >
    Exercises to get you started.
    
    </Typography>

    <Button color='error' variant='contained' href='#exercises' sx={{backgroundColor:"#ff2625", padding: "10px"}}>Explore Exercises</Button>
<Typography fontWeight="600" color="#ff2625"  sx={{opacity:.4}} display= {{lg:"block", xm: "none"}} fontSize="200px">
Exercise

</Typography>
    <img src={Hero} className="hero-banner-img" alt='hero'/>
    </Box>

  )
}

export default HeroBanner