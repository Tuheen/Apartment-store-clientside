import React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material';
import { useState } from 'react';

const AddProduct = () => {
    const [purchaseInfo, setPurchaseInfo] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        purchaseInfo[field] = value;
        // console.log(purchaseInfo);
        setPurchaseInfo(purchaseInfo);
    }

    const handlePurchaseSubmit = e => {
        const addingProduct = {
            ...purchaseInfo
        }
        fetch('https://infinite-ocean-37825.herokuapp.com/storedProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addingProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

        e.preventDefault();
    }

    return (
        <div>
            <h3>Add A Product</h3>
            <Container>
                <form onSubmit={handlePurchaseSubmit}>
                    <TextField
                        sx={{ width: '90%', m: 1}}
                        id="outlined-size-small"
                        name="productName"
                        onBlur={handleOnBlur}
                        defaultValue="Product Name"
                        size="small"
                    />
                    <TextField

                        sx={{ width: '90%', m: 1}}
                        id="outlined-size-small"
                        name="description"
                        onBlur={handleOnBlur}
                        defaultValue="Product Description"
                        size="small"
                    />
                    <TextField

                        sx={{ width: '90%', m: 1}}
                        id="outlined-size-small"
                        name="url"
                        onBlur={handleOnBlur}
                        defaultValue="Image URL"
                        size="small"
                    />
                    <TextField

                        sx={{ width: '90%', m: 1}}
                        id="outlined-size-small"
                        name="Price"
                        onBlur={handleOnBlur}
                        defaultValue="Product Price"
                        size="small"
                    />
                    <Button type= "submit" variant="contained">Add the Product</Button>
                </form>
            </Container>
        </div>
    );
};

export default AddProduct;