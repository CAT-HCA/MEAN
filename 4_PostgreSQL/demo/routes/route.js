var express = require('express');
const controller = require('../controllers/controller');
var router = express.Router();

// GET: http://localhost:3000/inventory/manufacturers
router.get('/manufacturers', controller.listManufacturers);
// GET: http://localhost:3000/inventory/manufacturers/:id
router.get('/manufacturers/:id', controller.listManufacturer);
// POST: http://localhost:3000/inventory/manufacturers
router.post('/manufacturers', controller.createManufacturer);

// GET: http://localhost:3000/inventory/automobiles
router.get('/automobiles', controller.listAutomobiles);
// GET: http://localhost:3000/inventory/automobiles/:id
router.get('/automobiles/:id', controller.listAutomobilesFormanufacturer);
// POST: http://localhost:3000/inventory/automobiles/:id
router.post('/automobiles/:id', controller.createAutomobileFormanufacturer);
// PUT: http://localhost:3000/inventory/automobiles/:id
router.put('/automobiles/:id', controller.updateAutomobile);
// DELETE: http://localhost:3000/inventory/automobiles/:id
router.delete('/automobiles/:id', controller.deleteAutomobile);

module.exports = router;