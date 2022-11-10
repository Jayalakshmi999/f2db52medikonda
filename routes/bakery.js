var express = require('express');
const Bakery_controlers= require('../controllers/bakeries');
var router = express.Router();

/* GET home page. */
router.get('/', Bakery_controlers.Bakery_view_all_Page ); 

module.exports = router;
