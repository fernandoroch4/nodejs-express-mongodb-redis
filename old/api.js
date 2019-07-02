const express = require('express');
const data = require('./data');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res
    .status(200)
    .send("It's works!");
});

app.get('/api/v1/shortnames/:id', async (req, res) => {
    try {
        const result = await data.getUnit(req.params.id);
        res
        .status(result.status)
        .send(result.data); 
    } catch (error) {
        res
        .status(500)
        .send('Error');
    }       
});

app.listen(3000, () => console.log('listening on port 3000'));