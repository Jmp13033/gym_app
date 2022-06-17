import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData , exerciseOptions, youtubeOptions } from '../../utils/fetchData'

import ExerciseVideos from "../../components/ExerciseVideos";
import Details from '../../components/Details';
import SimilarExercises from '../../components/SimilarExercises';






function ExerciseDetails() {
const [exerciseDetail, setExerciseDetail] = useState({});
const [exerciseVideos, setExerciseVideos] = useState([]);
const [targetMuscleExercises , setTargetMuscleExercises] = useState([]);
const [equipmentMuscleExercises , setEquipmentMuscleExercises] = useState([]);
const { id } = useParams();


useEffect(() => {

    const fetchExerciseData = async () => {

      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);


      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercises = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentMuscleExercises(equipmentExercises);




    }
    fetchExerciseData();

}, [id])




  return (
    <div>
    <Details exerciseDetail ={exerciseDetail}/>
    <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
    <SimilarExercises 
    targetMuscleExercises ={targetMuscleExercises}
    equipmentMuscleExercises ={equipmentMuscleExercises}
    />
  
    </div>
  )
}

export default ExerciseDetails