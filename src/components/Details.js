import React from 'react'
import {Typography, Stack, Button} from "@mui/material"
import BodyPartImage from "../assets/icons/body-part.png"
import EquiptmentImage from "../assets/icons/equipment.png"
import TargetImage   from "../assets/icons/target.png"


function Details({exerciseDetail}) {
  const { bodyPart, gifUrl, name, equipment, target} = exerciseDetail;
  const extraDetail = [
    {

      icon: BodyPartImage,
      name: bodyPart,
    }, 
    {

      icon:TargetImage,
      name: target,
    }, 
    {

      icon: EquiptmentImage,
      name: equipment
    }


  ]

  return (
    <Stack gap="60px" sx= {{flexDirection: { lg:"row" }, p: "20px", alignItems: "center"}}>
      <img src={gifUrl} alt={name} loading="lazy" className='detail-img'/>
      <Stack sx = {{gap: {lg: "35px", xs: "20px" }}}>

      <Typography variant='h4'>{name}</Typography>
      <Typography>exercises Keep you strong. {name} {" "}
      is one of the best exercises for your {target} 
      it will help boost your mood and increase your strength.
      </Typography>

      {extraDetail.map((item) => (
      
        <Stack key={item.name} direction="row" gap="24px" alignItems="center">
          <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
            <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
          </Button>
          <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
            {item.name}
            </Typography>
          </Stack>
      ))}


      

      
      
      </Stack>
    

    </Stack>
  )
}

export default Details