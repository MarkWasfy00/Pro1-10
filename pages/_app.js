import '../styles/Normalize.css';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { indigo,blue, red, grey } from '@mui/material/colors';
import Header from '../components/Header';
import NextNProgress from "nextjs-progressbar";
import Footer from '../components/Footer';
import Head from 'next/head'
import NoEnough from '../components/NoEnough'
import React from 'react';
import { useRouter } from 'next/router'






const theme = createTheme({
  palette: {
    // mode:'light',
    // primary: {
    //   main:'#00FF00',
    //   light:'#00FF00',
    //   dark:'#00FF00'
    // },
    secondary:{
      main:grey[100]
    },
    background: {
      default:grey[100]
    }
  },
  typography:{
    fontFamily:[
      'Oxanium',
    ]
  },
});


function MyApp({ Component, pageProps }) {

  const [isLoaded , setLoaded] = React.useState(true);
  const router = useRouter()
  const { query } = router

  React.useEffect(() => {
    window.onload = () => {
      setInterval(() => setLoaded(false) , 2000)
    }
  },[])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>MMRLOL</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="MMR or MatchMaking Rating is a number used by League of Legends to represent a player’s skill level. Your MMR determines the opponents you play against and is unique for each game mode. WhatIsMyMMR specifically tracks solo non-premade games played in ranked, normal, and ARAM queues. Read more about MMR on Riot’s website."/>
        <meta name="robots" content="index , follow" />
      </Head>
      {isLoaded && <NoEnough msg={'MMR...'} fw={'800'} />}
      <Header />
      <NextNProgress 
        color={`${blue[600]}`}
        height={2}
      />
      <Component {...pageProps} />
      { query.params && <Footer />}
    </ThemeProvider>
  )
}

export default MyApp
