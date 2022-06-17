import React, {useState} from 'react'
import {Box} from "@mui/material"
import HeroBanner from '../HeroBanner.js'
import SearchExercizes from '../SearchExercizes.js'
import Exercises from '../Exercises.js'


function Home() {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    console.log(bodyPart);

return (
    <Box>

        <HeroBanner/>
        <SearchExercizes setBodyPart={setBodyPart} bodyPart={bodyPart} setExercises={setExercises}/>
        <Exercises setExercises={setExercises}  bodyPart={bodyPart} exercises={exercises}/>
    </Box>
)
}

export default Home