import React from 'react'
import {Link} from 'react-router-dom'
import {Typography, Button, Stack} from '@mui/material'


    function ExcerciseCard({exercise}) {
    
    return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>

    <Stack direction="row">
    <Button sx={{ml:"21px", color: "#fff", background: "black" , fontSize :"14px", borderRadius:"25%", textTransform :"capitalize"}}>
    {exercise.bodyPart}
    </Button>
    <Button sx={{ml:"21px", color: "#fff", background: "red" , fontSize :"14px", borderRadius:"25%", textTransform :"capitalize"}}>
    {exercise.target}
    </Button>
    
    </Stack>

    <Typography ml="25px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="25px" > {exercise.name}</Typography>
    
    </Link>
    )
    }

export default ExcerciseCard