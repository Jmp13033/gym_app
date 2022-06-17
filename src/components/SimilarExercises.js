import React from 'react'
import { useEffect, useState } from 'react';
import {Box, Typography, Stack} from "@mui/material"
import HorizontalScrollbar from './HorizontalScrollbar';


function SimilarExercises({targetMuscleExercises, equipmentMuscleExercises}) {
 
        return (
        <Box sx ={{mt: {lg: "100px", xs: "30px"}  }}>

            <Typography> Similar exerscises for same muscle group </Typography>
            <Stack direction="row" sx ={{p: "2", position: "relative" }}>
            
            </Stack>

        
        
        
        </Box>
        )
    }

export default SimilarExercises