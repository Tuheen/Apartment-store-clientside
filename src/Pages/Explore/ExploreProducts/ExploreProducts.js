import { Alert, Container, Grid, Typography } from '@mui/material';
import React, {useState, useEffect} from 'react';
import useAuth from '../../../hooks/useAuth';
import Product from '../Product/Product';

const ExploreProducts = () => {
const [purchaseSuccess, setPurchaseSuccess] = useState(false);
const { user } = useAuth();
const [products, setProducts] = useState([])

useEffect( () => {
    const url=`https://infinite-ocean-37825.herokuapp.com/storedProduct`
    fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data));
}, [])
    return (
        <Container>
            <Typography variant="h4" sx={{ mb: 3, mt: 5,color: 'info.main' }}>Explore Apartment Collection</Typography>

            {purchaseSuccess && <Alert severity="success">Purchase Success</Alert>}
                <Grid container spacing={2}>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            setPurchaseSuccess={setPurchaseSuccess}
                        >
                        </Product>)
                    }
                </Grid>
        </Container>
    );
};

export default ExploreProducts;