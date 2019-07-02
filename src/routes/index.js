const express = require('express');
const controller = require('../controller');

const router = express.Router();

router.get('/v1/units/:shortname', async (req, res) => {
    const shortname = `shortname-${req.params.shortname}`;
    const data = await controller.getData(shortname);
    res.status(data.status).send(data.message);    
});

module.exports = router;