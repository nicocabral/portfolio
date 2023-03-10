import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import react from '../../img/react.svg';
import aem from '../../img/aem.svg';
import nodejs from '../../img/nodejs.svg';
import angular from '../../img/angular.svg';
import sass from '../../img/sass.svg';
import mongodb from '../../img/mongodb.svg';
import git from '../../img/git.svg';
const Skills = () => {
    return <Box display='flex' flexDirection='column' gap='20px' alignItems='center' justifyContent='center'>
            <Box>
                <Typography variant='h6' component='h6'>
                    Skills
                </Typography>
            </Box>
            <Box display='flex' gap='20px' style={{overflowY: 'auto'}} padding='10px 0'>
                <LazyLoadImage
                    height='60px'
                    width='60px'
                    alt={'React JS'}
                    src={react}/>
                <LazyLoadImage
                    height='60px'
                    width='60px'
                    alt={'Adobe Experience Manager'}
                    src={aem}/>
                <LazyLoadImage
                    height='60px'
                    width='60px'
                    alt={'Node JS'}
                    src={nodejs}/>
                <LazyLoadImage
                    height='60px'
                    width='60px'
                    alt={'Angular'}
                    src={angular}/>
                <LazyLoadImage
                    height='60px'
                    width='60px'
                    alt={'SCSS'}
                    src={sass}/>
                <LazyLoadImage
                    height='60px'
                    width='60px'
                    alt={'Mongo DB'}
                    src={mongodb}/>
                <LazyLoadImage
                    height='60px'
                    width='60px'
                    alt={'GIT'}
                    src={git}/>
            </Box>
    </Box>;
}
 
export default Skills;