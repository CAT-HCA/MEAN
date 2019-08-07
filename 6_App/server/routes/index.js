var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Users' });
});

router.get('/login', (req, res) => {
    res.render('login.hbs', {
        pageTitle: 'Login'
    });
});

router.get('/register', (req, res) => {
    res.render('register.hbs', {
        pageTitle: 'Register'
    });
});

router.get('/logout', (req, res) => {
    res.render('index.hbs', { pageTitle: 'Users' });
});

router.get('/user_manager', (req, res) => {
    res.render('user_manager.hbs', {
        pageTitle: 'User Manager'
    });
});

module.exports = router;