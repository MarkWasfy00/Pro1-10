import React from 'react'
import {Typography } from '@mui/material';



function ErrPage() {
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
            }} >
               404 PAGE NOT FOUND
            </Typography>
    </>
  )
}

export default ErrPage