import React from 'react'
import { Container, MenuItem, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { grey  } from '@mui/material/colors';
import { Button } from '@mui/material';
import style from '../styles/main.module.scss';
import { styled } from '@mui/system';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import { Alert } from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Collapse } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from 'next/router';




const searchColor = grey[100]

const StyleText = styled(TextField)({
    width:100,
    '.MuiOutlinedInput-root':{
        '& fieldset': {
            borderColor: searchColor,
        },
        "& input":{
            color:searchColor,
        },
        ".MuiSelect-outlined":{
            color:searchColor
        },
        '&:hover fieldset': {
            borderColor: searchColor,
            borderWidth: '0.15rem',
        },
        '&.Mui-focused fieldset': {
            borderColor: searchColor,
        },

    },
    '.MuiInputLabel-root':{
        color:searchColor,
        '&.Mui-focused': {
            color: searchColor,
        },
    },
})



// 


function Search() {
    
    const [open, setOpen] = React.useState(false);
    const [region , setRegion] = React.useState('eune')
    const [username , setUsername] = React.useState('')
    const [loadingBtn , setloadingBtn] = React.useState(false)
    const router = useRouter()


    const checker = (e) => {
        e.preventDefault();
        if(username){
            setloadingBtn(true)
            router.push(`${region}/${username}`,undefined, { shallow: true })
        }else {
            setOpen(true)
        }
    }
    
  return (
    <>
        <video id={style.vidPlayer} autoPlay muted loop>         
            <source src='/lool.mp4' type="video/mp4"/>       
        </video>
        
        <Container maxWidth='lg' sx={{
            pt:'2rem'
            }}>

            <Collapse sx={{position:'fixed',top:'2rem',left:'50%',width:'50%',transform:"translateX(-50%)"}} in={open}>
                <Alert
                severity="error"
                action={
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setOpen(false);
                    }}
                    >
                    <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
                >
                Please Enter a Username
                </Alert>
            </Collapse>
            <Typography align="center" gutterBottom sx={{
                fontSize:{xs:'3rem',sm:"4rem",md:"6rem"},
                fontWeight:'800',
                color:grey[100],
                // textShadow: `2px 2px 2px ${red[500]}`,
                
            }} >GET YOUR REALTIME MMR</Typography>
            <form className={style.form}>
                <StyleText sx={{flexGrow:'.5'}} label='Summoner' value={username} onChange={ (e) => setUsername(e.target.value)} required placeholder="250IQ"  variant="outlined"  />
                <StyleText  variant="outlined" label="Region" select value={region} onChange={(e) => setRegion(e.target.value)}>
                    <MenuItem value='eune' >EUNE</MenuItem>
                    <MenuItem value='euw' >EUW</MenuItem>
                    <MenuItem value='na' >NA</MenuItem>
                    <MenuItem value='kr' >KR</MenuItem>
                </StyleText>
                {/* <Button  sx={{display:`${loadingBtn ? 'none':'block'}`}} color="secondary" size="large" onClick={checker} variant="contained" type="submit">Search</Button> */}
                <LoadingButton sx={{'&:disabled':{backgroundColor:'white'}}} loading={loadingBtn}  color="secondary" size="large" onClick={checker} variant="contained" type="submit"  >Search</LoadingButton>
            </form>
            <Box sx={{position:'fixed',bottom:"2rem",left:{xs:'1rem',md:'50%'},right:{xs:'1rem',md:'unset'},transform:{xs:'none',md:'translateX(-50%)'},zIndex:'10'}}>
                <Accordion sx={{backgroundColor:grey[900],color:'white'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography sx={{fontWeight:'600'}}>What Affects Your MMR?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{fontSize:{xs:'.8rem' ,md:'1rem'}}}>
                        League Points increase or decrease every time you play, based on your result. But the amount by which they increase or decrease varies based on your hidden MMR. If your MMR is considerably higher than that of your current bracket, you are expected to more often. And when you do win, your reward is smaller. But if you lose, the punishment is greater. MMR changes every time you lose or win a ranked game. Normal games do not count. That is why, if you want to learn a new champion or test a new strategy, you should play unranked.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{backgroundColor:grey[900],color:'white'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography sx={{fontWeight:'600'}}>What Is MMR in League of Legends</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{fontSize:{xs:'.8rem' ,md:'1rem'}}}>
                        If you play LoL, you’ve probably asked yourself more than once: “What’s my MMR? Where can I find a LoL MMR checker that will help me discover my League MMR?” Using our tool, you can actually calculate your MMR in League of Legends. Read on to learn how to use it.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    </>
  )
}

export default Search

