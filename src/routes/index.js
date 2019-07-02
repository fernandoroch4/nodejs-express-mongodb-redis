const express = require('express');

const router = express.Router();

router.get('/v1/units/:shortname', (req, res) => {
    const shortname = req.params.shortname;
    res.status(200).send(shortname);
});

module.exports = router;