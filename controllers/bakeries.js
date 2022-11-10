var Bakery = require('../models/baker'); 
 
// List of all Costumes 
exports.Bakery_list = async function(req, res) { 
        try{ 
            bakeries = await Bakery.find(); 
            res.send(bakeries); 
        } 
        catch(err){ 
            res.status(500); 
            res.send(`{"error": ${err}}`); 
        }   
    
}; 
 
// for a specific Costume. 
exports.Bakery_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Bakery detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
// Handle Costume create on POST. 
exports.Bakery_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Bakery(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.cakeCost = req.body.cakeCost; 
    document.cookieCost = req.body.cookieCost; 
    document.cooldrinkCost = req.body.cooldrinkCost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume delete form on DELETE. 
exports.Bakery_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Bakery delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.Bakery_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Bakery update PUT' + req.params.id); 
}; 
// VIEWS 
// Handle a show all view 
exports.Bakery_view_all_Page = async function(req, res) { 
    try{ 
        bakeries = await Bakery.find(); 
        res.render('bakery', { title: 'Bakery Search Results', results: bakeries }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 