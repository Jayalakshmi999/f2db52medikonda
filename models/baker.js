const mongoose = require("mongoose") 
const bakerySchema = mongoose.Schema({ 
 cakeCost: {
    type:Number,
    min:1,
    max:100
 }, 
 cookieCost: {
    type:Number,
    min:1,
    max:1000
 }, 
 cooldrinkCost: {
    type:Number,
    min:1,
    max:1000
 } 
}) 
 
module.exports = mongoose.model("Bakery", bakerySchema) 