import React from 'react'
import {useEffect, useState} from 'react'
import { Pagination } from '@mui/material'
import {Box, Stack, Typography} from "@mui/material"
import {exerciseOptions, fetchData} from '../utils/fetchData';
import ExerciseCard from './ExcerciseCard';


function Exercises({bodyPart, exercises, setExercises}) {
const [currentPage, setCurrentPage] = useState(1);
const exercisesPerPage = 9;
const indexOfLastExcercise = currentPage * exercisesPerPage;
const indexOfFirstExcercise = indexOfLastExcercise - exercisesPerPage;
const currentExercises = exercises.slice(indexOfFirstExcercise, indexOfLastExcercise);

const paginate = (e, value) => {
  window.scrollTo({ top: 1800, behavior: 'smooth' });
  setCurrentPage(value);

}


useEffect(() => {
  const fetchExercisesData = async () => {
    let exercisesData = [];

    if (bodyPart === 'all') {
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    } else {
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
    }

    setExercises(exercisesData);
  };

  fetchExercisesData();
}, [bodyPart]);
  

  return (
    <Box id="exercises"
    sx={{mt: {lg: "110px" } }}
    mt= "50px"
    p="20px"

    
    > 
    <Typography variant='h3' mb="46px">
    Results Everyday!
    
    </Typography>

    <Stack
    direction="row"
    sx = {{gap : {lg: "120px", xs: "60px"}}}
    flexWrap="wrap"
    justifyContent="center"

    >

    {currentExercises.map( (exercise,index) => 
      
      <div>
      
      <ExerciseCard key={index} exercise={exercise}/>

      </div>

    )}
    
    </Stack>

    <Stack mt="100px" alignItems="center">
    {exercises.length > 9 && (

      <Pagination
      color = "standard"
      shape='rounded'
      defaultPage={1}
      count={Math.ceil(exercises.length / exercisesPerPage )}
      size="large"
      page={currentPage}
      onChange= {paginate}
      
      />
    ) }
    
    
    </Stack>
    
    </Box>
  )
}

export default Exercises