import React from 'react';
import Style from './Home.module.scss';
import { FaLaptopCode } from 'react-icons/fa';
import {Box, Typography} from '@mui/material';
import {info} from '../../info/Info';
import AboutMe from './AboutMe';
import Skills from './Skills';

export default function Home() {

   return (
      <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' margin={{xs: '8% 5%', md: '8% 20%', lg: '8% 20%'}} gap='30px'>
         <Box component={'main'} display={'flex'} flexDirection={'column'} alignItems={'center'}
            justifyContent={'center'}>
            <Box>
               <Typography variant='h1' component='h1'>
                  <FaLaptopCode/>
               </Typography>
            </Box>
            <Box display='flex' sx={{
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center',
               gap: '10px'
            }}>
               <Typography variant='h4' component='h4' display='flex' gap='5px'>
                  Hi, I'm 
                  <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                  {info.firstName}
                  </span> <span className={Style.hand}>🤚</span>
               </Typography>
               <Typography>
                  I'm {info.position}.
               </Typography>
            </Box>
         </Box>
         <Box>
            <AboutMe/>
         </Box>
         <Box>
            <Skills/>
         </Box>
      </Box>
   )
}