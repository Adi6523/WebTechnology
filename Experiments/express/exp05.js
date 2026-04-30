const express = require('express');
const app = express();  
const port = 3000;

app.get('/about', (req, res) => {
    const currentDate = new Date();
    res.json(
        { message: 'Hello, World!', 
        date: currentDate });
});

app.use((req, res, next) => {
    console.log("Request received at:", new Date());
    next();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});