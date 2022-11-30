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
exports.Bakery_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Bakery.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
 
// Handle Costume delete on DELETE. 
exports.Bakery_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Bakery.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle Costume update form on PUT. 
//Handle Costume update form on PUT. 
exports.Bakery_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Bakery.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.cakeCost)  
               toUpdate.cakeCost = req.body.cakeCost; 
        if(req.body.cookieCost) toUpdate.cookieCost = req.body.cookieCost; 
        if(req.body.cooldrinkCost) toUpdate.cooldrinkCost = req.body.cooldrinkCost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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
exports. secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    console.log(req.session.returnTo)
    console.log("hi")
    res.redirect("/login"); 
  } 