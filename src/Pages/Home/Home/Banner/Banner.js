import React from 'react';
import Grid from '@mui/material/Grid';
import img from '../../../../images/banner-img.jpg'
import { Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// const bannerBg= {
//     background: `url(${bg})`
// }

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 700,
    // color: 'rgb(124, 134, 224, 0.9)'
}

const Banner = () => {
    return (
        <Container sx={{backgroundColor: 'rgb(24, 134, 224, 0.05)', flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{...verticalCenter, textAlign: 'left'}} >
                    <Box>
                        <Typography variant="h3" style={{color: '#2962ff'}}>
                            Your Apartment Style <br /> Solution
                        </Typography>
                        <Typography variant= "h6" sx={{ my: 3, fonstSize: 13, color: '#82b1ff', fontWeight: 300}}>
                            Explore Our Trendy Collection to Match Your Lifestyle
                            <br /> Today
                        </Typography>
                        
                            <Link style={{textDecoration: 'none'}} to="/explore">
                                <Button variant="contained" style={{backgroundColor: '#2979ff', color:'#e3f2fd'}} >Check Collection</Button>
                            </Link>
                        
                    </Box>
                </Grid>
                <Grid style={verticalCenter} item xs={12} md={6} >
                    <img style={{ width: '98%', height: '60%' }} src={img} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;