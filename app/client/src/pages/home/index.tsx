import { AppBar, Box, Button, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import bg from '../../assets/main_screen.png'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authService } from '../../store/slices/authService';


function Home () {
    const navigate = useNavigate()
    const token = useSelector((state: any) => state.auth.token);
    const handleClick = () => {
        navigate('/')
        authService.signOut()
    }

    return (
        <>
        <CssBaseline/> 
            <Container sx={{width: '100vw'}} maxWidth={false} disableGutters>
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static" sx={{display: 'flex', alignItems: 'end', backgroundColor: '#172234'}} >
                    <Toolbar>
                        {token 
                            ? 
                            <Button color="secondary" variant="outlined" onClick={handleClick}>Sign Out</Button>
                            :
                            <>
                            <Button color="secondary" variant="outlined" onClick={()=> navigate('/login')} sx={{mr: 3}}>Sign In</Button>
                            <Button variant="contained" color="success" onClick={()=> navigate('/signup')}>Sign Up</Button>
                            </>
                        }
                    
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ 
                backgroundImage: `url(${bg})`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh' }} >
                    <Typography align='center' variant='h2' pt={10} pb={5} color='white'>The chemical  negatively charged</Typography>
                    <Typography align='center' variant='h5' p={10} color='white'>Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. </Typography>
                
            </Box>
        </Container>
        </>
    )
}

export default Home