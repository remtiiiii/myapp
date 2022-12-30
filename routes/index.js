var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , message: 'REEM' });

});

router.get('/get', function(req, res, next) {
  res.send('hello get');

});

module.exports = router;
