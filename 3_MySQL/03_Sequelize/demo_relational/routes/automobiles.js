var express = require('express');
const api = require('../controllers/automobiles');
var router = express.Router();

// GET: http://localhost:3000/automobiles/
router.get('/', api.list);

module.exports = router;