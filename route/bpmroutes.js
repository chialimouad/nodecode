// routes/dataRoute.js
const express = require('express');
const router = express.Router();
const DataController = require('../controller/bpmcontroller');

router.post('/data', DataController.saveData);

module.exports = router;
