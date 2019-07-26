var express = require('express');
const api = require('../controllers/user');
var router = express.Router();

// GET: http://localhost:3000/users/
router.get('/', api.list);

// POST: http://localhost:3000/users/register/
router.post('/register/', api.register);

// PUT: http://localhost:3000/users/
router.put('/', api.update);

// DELETE: http://localhost:3000/users/{user_id}
router.delete('/:user_id', api.delete);

module.exports = router;