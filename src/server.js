const express = require('express');

const app = express();
app.use(express.json());

app.use('/api', require('./routes'));

const PORT = process.env.EXPRESS_PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));