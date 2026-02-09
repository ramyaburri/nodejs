const mongoose = require("mongoose");
const { required } = require("zod/mini");
const laptopSchema = new mongoose.Schema({
    pid:{type:Number,required:true},
    pname:{type:String,required:true},
    pcost:{type:Number},
    pqty:{type:Number,required:true},
    pimg:{type:String,required:true}
})
module.exports=mongoose.model("Laptop",laptopSchema);