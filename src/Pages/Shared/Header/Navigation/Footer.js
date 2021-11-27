import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Container style ={{ backgroundColor: '#1e88e5'}}>
            <Typography variant="h7" sx ={{ fontWeight: 300, color: 'white'}}>
                All Right Reserved By <br /> Digital Apartment Store 
            </Typography>
        </Container>
    );
};

export default Footer;