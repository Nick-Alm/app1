var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Post from the text box */
router.post('/', function(req, res, next) {
  console.log(req.body.name);
  res.render('index', { title: req.body.name });
});

module.exports = router;
