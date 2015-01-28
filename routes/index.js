var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Msgr' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'Msgr' });
});

router.get('/login', function(req, res) {
  res.render('signin', { title: 'Msgr' });
});

module.exports = router;