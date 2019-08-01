var express = require('express');
const api = require('../controllers/manufacturers');
var router = express.Router();

// GET: http://localhost:3000/manufacturers/
router.get('/', api.list);

module.exports = router;