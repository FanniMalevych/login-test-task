import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Box, Container, Typography } from '@mui/material';
import bg from '../../assets/main_screen.png'

const style = css({
    backgroundImage: bg
})

const Cotainer = styled.div`
    background-image: bg
`

function Main () {
    return (
        <>
            <Container>
        <Box sx={{ 
            backgroundImage: `url(${bg})`, 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        height: '100vh' }} >
        <Typography align='center' variant='h3'>The chemical  negatively charged</Typography>
            <Typography align='center' variant='h5'>Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. </Typography>
            <h1> Main page</h1>
            </Box>
      </Container>
            
         
        </>
    )
}

export default Main