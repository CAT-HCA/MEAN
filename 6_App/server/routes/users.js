var express = require('express');
const controller = require('../controllers/users');
var router = express.Router();

// GET: http://localhost:3000/users
router.get('/', controller.listUsers);
// GET: http://localhost:3000/users/:id
router.get('/:id', controller.listUser);
// POST: http://localhost:3000/users
router.post('/', controller.createUser);
// PUT: http://localhost:3000/users/:id
router.put('/:id', controller.updateUser);
// DELETE: http://localhost:3000/users/:id
router.delete('/:id', controller.deleteUser);

module.exports = router;