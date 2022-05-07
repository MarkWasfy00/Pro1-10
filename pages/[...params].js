import React from 'react'
import { green, grey, red } from '@mui/material/colors';
import axios from 'axios'
import { Container, Grid, Typography } from '@mui/material';
import GamingChart from '../components/GamingChart';
import { fromUnixTime , format  } from 'date-fns'
import { Box } from '@mui/system';
import NoEnough from '../components/NoEnough';
import Head from 'next/head';

function FindMMR({mmr,username,region,code,msg}) {
  if(code === 200){
    const ranked = mmr.ranked
    return (
      <>
        <Head>
          <title>{username} MMR</title>
        </Head>
        <main>
          <Container maxWidth="lg" sx={{pt:'2rem',color:`${grey[100]}`}}>
            <Typography sx={{fontWeight:'600',fontSize:{xs:'2.5rem' , md:'5rem'}}} align='center'>{username}</Typography>
            <Typography sx={{fontWeight:'300',fontSize:'1rem',mt:{xs:'-1rem' ,  md:'-2rem'}}} align='center'>#{region}</Typography>
            <Box sx={{display:'flex',justifyContent:"center",alignItems:'center',gap:'.5rem'}}>
              <Typography sx={{fontWeight:'500',fontSize:{xs:'2rem',md:'3rem'}}}>Average MMR : {ranked.avg}</Typography>
              <Typography sx={{fontWeight:'500',fontSize:{xs:'1rem',md:'2rem'},color:`${ranked.err > 50 ? green[500] : red[500]}`}}>±{ranked.err}</Typography>
            </Box>
            <Typography sx={{fontWeight:'500',fontSize:'2rem',pb:'1rem'}} align='center'>CLOSEST RANK : {ranked.closestRank}</Typography>
            <GamingChart ranked={ranked} />
            <Typography sx={{fontWeight:'500',fontSize:'1rem'}} align='center'>Last Updated : {format(fromUnixTime(ranked.timestamp),'MMM-d')}</Typography>
          </Container>
        </main>
      </>
    )
  } else {
    return <NoEnough msg={msg} />
  }
}


export default FindMMR

export async function getServerSideProps(context){
  const {query} = context
  const {params} = query
  const region = params[0]
  const username = params[1]
  
  
  try {
    const info = await axios.get(`https://${region}.whatismymmr.com/api/v1/summoner?name=${encodeURI(username)}`)
    if(info.data.ranked.avg){
      return {
        props:{
          mmr:info.data,
          username:username,
          region:region,
          code:200,
          msg:'SUCCESS'
        }
      };
    } else {
      return {
        props:{
          mmr:info.data,
          username:username,
          region:region,
          code:101,
          msg:'PLAYER DO NOT PLAY ENOUGH RANKED GAMES',
        }
      };
    }
  } catch(err){
    //err.response.data.error.message || code
    return {
      props:{
        mmr:null,
        username: username,
        region:region,
        code:err.response.data.error.code,
        msg:err.response.data.error.message
      }
     }
  }
}

