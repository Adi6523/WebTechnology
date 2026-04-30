const express = require('express');
const app = express();
const port = 3000;

// Dynamic route for user ID
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send("User ID is: " + userId);
});

// Dynamic route for product name
app.get('/product/:name', (req, res) => {
    const productName = req.params.name;
    res.send("Product name is: " + productName);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});