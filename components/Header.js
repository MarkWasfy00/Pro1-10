import React from 'react'
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { blue, grey} from '@mui/material/colors';
import Link from 'next/link'
import { styled } from '@mui/system';
import style from '../styles/main.module.scss'


const StyledLink = styled(Box)({
    height:'100%',
    display:'flex',
    alignItems:'center',
    position:'relative',
    "&:hover":{
        color:blue[600],
        cursor:'pointer',
        transition:'500ms',
        borderBottom:'1px solid white'
    },
})



function Header() {
  return (
    <>
        <Box sx={{
            display:'flex',
            alignItems:"center",
            justifyContent:"space-between",
            p:'0 2rem',
            backgroundColor:grey[900],
            height:'4rem',
            color:grey[100],
            // borderBottom:`${grey[100]} solid 1px`,
            // borderBottomLeftRadius: '15px',
            // borderBottomRightRadius: '15px',
        }} 
        component={'header'} 
        >
            <Link passHref href="/">
                <Typography variant='h4'  sx={{
                    height:'100%',
                    display:'flex',
                    alignItems:'center',
                    fontWeight:'800',
                    color:grey[100],
                    "&:hover":{
                        cursor:'pointer'
                    }
                    }}>
                    MMR
                </Typography>   
            </Link>
            <Box sx={{
                listStyle:'none',
                display:{xs:'none' , md:'flex'},
                gap:'1rem',
                fontWeight:'300',
                height:'100%',
            }} 
            component={'ul'}
            >
                <Link passHref href='/'>
                    <StyledLink component={"li"}>HOME</StyledLink>
                </Link>
                <Link passHref href='/'>
                    <StyledLink className={style.disabled} component={"li"}>ABOUT US</StyledLink>
                </Link>
                <Link  passHref href='/'>
                    <StyledLink className={style.disabled} component={"li"}>CONTACT</StyledLink>
                </Link>
            </Box>
        </Box>
    </>
  )
}

export default Header