const express = require('express');
const controller = require('../controller');
const logger = require('../logger');

const router = express.Router();

router.get('/v1/units/:shortname', async (req, res) => {
    const shortname = `shortname-${req.params.shortname}`;
    const data = await controller.getData(shortname);

    logger.save(req, data);

    res.status(data.status).send(data.message);    
});

module.exports = router;