var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("added bootstrap styles for button in index.pug")
  res.render('index', { title: 'Express' });
});

module.exports = router;
