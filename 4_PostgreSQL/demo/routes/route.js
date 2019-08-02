var express = require('express');
const controller = require('../controllers/controller');
var router = express.Router();

// GET: http://localhost:3000/inventory/manufacturers
router.get('/manufacturers', controller.listManufacturers);
// GET: http://localhost:3000/inventory/automobiles
router.get('/automobiles', controller.listAutomobiles);

module.exports = router;