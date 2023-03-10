import {Box, Divider} from '@mui/material';
import Card from '@mui/material/Card';
import { FaCircle } from 'react-icons/fa';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const AboutMe = () => {
    return <Box display='flex' flexDirection='column' gap='20px' width='100%' alignItems='center' justifyContent='center'>
            <Typography variant='h6' component='h6'>
                ABOUT ME
            </Typography>
            <Card sx={{ minWidth: 345 }}>
                <CardContent>
                    <Box display='flex' gap='20px' flexDirection='column'>
                        <Box display='flex' gap='5px'>
                            <Typography>
                                <FaCircle fontSize='12px'/>
                            </Typography>
                            <Typography>
                                <FaCircle fontSize='12px'/>
                            </Typography>
                            <Typography>
                                <FaCircle fontSize='12px'/>
                            </Typography>
                        </Box>
                        <Divider />
                        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                            Experienced Full Stack Engineer with a demonstrated history of working in the web application industry. Skilled in AEM, React,Node js Express and AWS LAMBDA,Next JS, Angular 7, GIT Version control, MYSQL, MongoDB, Back-End (Restful API) and front end Web Development.
                            I have worked with different Web application such as ECOM, Pharmaceutical, Payment Portals and CMS with includes the integration of API.

                        </Typography>
                    </Box>
                    
                </CardContent>
            </Card>
    </Box>;
}
 
export default AboutMe;