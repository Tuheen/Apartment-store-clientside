import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AllReviews = () => {
    const [ reviews, setReviews ] = useState([]);

    useEffect( () => {
        const url =`https://infinite-ocean-37825.herokuapp.com/reviews`;
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <Container sx={{backgroundColor: '#90caf9', py: 5}}>
            <Typography sx={{py: 4, color: '#e3f2fd'}} variant="h2" component="h2">
                Explore Customers' Feedback!
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell sx={{py: 3, color: '#1976d2', fontSize: 18}} >Customer</TableCell>
                    <TableCell sx={{py: 3, color: '#1976d2', fontSize: 18}}  align="right">Review</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reviews.map((row) => (
                    <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                        {row.Reviewer}
                        </TableCell>
                        <TableCell align="right">{row.review}</TableCell>
                        
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            </Container>
    );
};

export default AllReviews;