import React from 'react'
import { fromUnixTime , format  } from 'date-fns'
import { grey, red , blue} from '@mui/material/colors';
import { Box } from '@mui/system';
import  style  from '../styles/main.module.scss'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'



function GamingChart({ranked}) {

    const filterList = ranked.historical.map(obj => {
        return {
            ...obj,
            timestamp:format(fromUnixTime(obj.timestamp),"MMM-d"),
        }
    })

    
    const XAxis = filterList.map(itm => itm.timestamp)
    const YAxis = filterList.map(itm => itm.avg)


    const data = {
        labels: XAxis.reverse(),
        datasets: [{
          label: 'MMR HISTORY',
          data: YAxis.reverse(),
          backgroundColor: `${blue[600]}`,
          borderColor: `${blue[600]}`,
          tension:0.3
        }]
    };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            display:true,
            labels: {
                font:{
                    family: 'Oxanium',
                    size:20,
                    color:`${grey[900]}`
                },
            },
          },
          tooltip:{
              backgroundColor:`${grey[900]}`,
              boxWidth:50
          },
          animation: {
            onProgress: function(animation) {
                progress.value = animation.currentStep / animation.numSteps;
            }
          }
        },
        scales: {
            x: {
                grid:{
                    display:false,
                    borderColor:`${grey[900]}`
                },
                ticks:{
                    font:{
                        family: 'Oxanium',
                        weight:500,
                    },
                    // color:'white'
                }
            },
            y: {
                grid:{
                    display:false,
                    borderColor:`${grey[900]}`
                },
                ticks:{
                    font:{
                        family: 'Oxanium',
                        weight:500,
                    },
                    // color:'white'
                },
            },
        },
        elements:{
            point:{
                radius:6,
                hitRadius:30,
                hoverBorderWidth:20,
            }
        }
    };

    


    if(filterList.length){
        return (
            <Box sx={{maxWidth:'55rem',margin:'0 auto'}}>
                <Line data={data} options={options} redraw={true} />
            </Box>
          )
    } else {
        return (
            <Box sx={{maxWidth:'55rem',margin:'0 auto'}} className={style.notFound} >
                <Line data={data} options={options} redraw={true} />
            </Box>
        )
    }
    
  
}

export default GamingChart