const express = require('express');

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'Wooden Table',
            price: 300,
            image: 'https://www.example.com/images/wooden-table.jpg'
        },
        {
            id: 2,
            name: 'Leather Sofa',
            price: 1200,
            image: 'https://www.example.com/images/leather-sofa.jpg'
        },
        {
            id: 3,
            name: 'Dining Chair',
            price: 150,
            image: 'https://www.example.com/images/dining-chair.jpg'
        },
        {
            id: 4,
            name: 'Glass Coffee Table',
            price: 450,
            image: 'https://www.example.com/images/glass-coffee-table.jpg'
        },
        {
            id: 5,
            name: 'Bookshelf',
            price: 220,
            image: 'https://www.example.com/images/bookshelf.jpg'
        },
        {
            id: 6,
            name: 'Queen Bed Frame',
            price: 800,
            image: 'https://www.example.com/images/queen-bed-frame.jpg'
        },
        {
            id: 7,
            name: 'Office Desk',
            price: 350,
            image: 'https://www.example.com/images/office-desk.jpg'
        },
        {
            id: 8,
            name: 'Recliner Chair',
            price: 600,
            image: 'https://www.example.com/images/recliner-chair.jpg'
        },
        {
            id: 9,
            name: 'Floor Lamp',
            price: 120,
            image: 'https://www.example.com/images/floor-lamp.jpg'
        },
        {
            id: 10,
            name: 'Kitchen Island',
            price: 950,
            image: 'https://www.example.com/images/kitchen-island.jpg'
        }
    ];
    
    if (req.query.search) {
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(req.query.search.toLowerCase())
        );
        res.send(filteredProducts);
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
