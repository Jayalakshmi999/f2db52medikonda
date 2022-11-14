var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Bakery_controller = require('../controllers/bakeries'); 
var Bakery_controllers=require('../controllers/bakeries_views')
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 

/* GET detail costume page */ 
router.get('/detail', Bakery_controllers.Bakery_view_one_Page); 
 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/bakeries', Bakery_controller.Bakery_create_post); 

/* GET create costume page */ 
router.get('/create', Bakery_controllers.Bakery_create_Page); 
 
// DELETE request to delete Costume. 
router.delete('/bakeries/:id', Bakery_controller.Bakery_delete); 
 
// PUT request to update Costume. 
router.put('/bakeries/:id', Bakery_controller.Bakery_update_put); 

/* GET create update page */ 
router.get('/update', Bakery_controllers.Bakery_update_Page); 
 
// GET request for one Costume. 
router.get('/bakeries/:id', Bakery_controller.Bakery_detail); 
 
// GET request for list of all Costume items. 
router.get('/bakeries', Bakery_controller.Bakery_list); 
 
module.exports = router; 