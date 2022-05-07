import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Footer() {
  return (
    <Box sx={{borderTop:'1px black solid',position:'fixed',bottom:'0',left:'0',right:'0',zIndex:'-99'}}>
        <Typography sx={{fontSize:{xs:'.5rem' , md:'.7rem'},p:{xs:'1rem' , md:'1rem 8rem'},color:'white'}} align='center'>MMR LOL isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</Typography>
    </Box>
  )
}

export default Footer