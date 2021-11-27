import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';

const Services = () => {
    const [ products, setProducts ] = useState([]);

    useEffect( () => {
        const url =`http://localhost:5000/storedProduct/homePage`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{backgroundColor: '#e3f2fd', py: 3}}>
            <Typography sx={{ fontWeight: 600, my: 3, color: '#90caf9'}} variant="h2" component="div">
                Trendy Apartments!
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                
            {
                products.map(product =><Service
                            key={product._id}
                            service={product}
                        ></Service>)
            }
            </Grid>
            </Container>
        </Box>
    );
};

export default Services;