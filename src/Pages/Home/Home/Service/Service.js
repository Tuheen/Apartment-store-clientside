import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const { Price, description, url, productName } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    image={url}
                    alt="Apartment Image"
                />
                <CardContent>
                    <Typography variant="h4" sx={{ fontWeight: 300, my: 2, color: '#2196f3'}} component="div">
                        {productName}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 400, color: '#90caf9'}}>
                        {description}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, my: 1, color: '#1565c0'}} component="div">
                        {Price} USD
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;