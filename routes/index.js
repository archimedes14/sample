var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Sample' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'Sample' });
});

router.get('/login', function(req, res) {
  res.render('signin', { title: 'Sample' });
});

module.exports = router;
