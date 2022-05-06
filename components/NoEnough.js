import React from 'react'
import {Typography } from '@mui/material';


function NoEnough({msg}) {
  return (
    <>
        <Typography sx={{
            position:'fixed',
            inset:'0 0 0 0',
            width:'100%',
            height:'100vh',
            backgroundColor:'white',
            overflow:'hidden',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
            }}>{msg}</Typography>
    </>
  )
}

export default NoEnough