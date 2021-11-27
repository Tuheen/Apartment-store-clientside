import { Button, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import PurchaseModal from '../PurchaseModal/PurchaseModal';

const Product = ({product, setPurchaseSuccess}) => {
    const { productName, Price, description, url } = product;
    const [openPurchase, setPurchaseOpen] = React.useState(false);
    const handlePurchaseOpen = () => setPurchaseOpen(true);
    const handlePurchaseClose = () => setPurchaseOpen(false);
    return (
            <>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{py: 3, px: 2}}>
                        <Card sx={{ minWidth: 275, border: 1, boxShadow: 1 }}>
                            <CardMedia
                                component="img"
                                sx={{py: 5}}
                                style = {{ margin: '0 auto'}}
                                image={url}
                            />
                            <CardContent>
                                <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" component="div">
                                {productName}
                                </Typography>
                                <Typography variant="h4" color="text.secondary">
                                    {Price} BDT 
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {description}
                                </Typography>
                            </CardContent>
                            <Button onClick={handlePurchaseOpen} sx={{my: 2}} variant="contained">Purchase</Button>
                        </Card>
                    </Box>
                </Grid>
                <PurchaseModal
                    product={product}
                    openPurchase={openPurchase}
                    handlePurchaseClose={handlePurchaseClose}
                    setPurchaseSuccess={setPurchaseSuccess}
                ></PurchaseModal>
            </>
    );
};

export default Product;