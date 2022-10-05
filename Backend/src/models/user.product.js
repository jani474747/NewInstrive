const mongoose = require("mongoose");
// const autenticate=require("../middlewares/autanticate")

const productSchema = new mongoose.Schema(
  {
   
    companyname : {type:String,required:true},
    headOffice : {type:String,required:true},
    Country : {type:String,required:true},
    city : {type:String,required:true},
    contactNumber : {type:Number,required:true},
    url : {type:String,required:true},
    name : {type:String,required:true},
    Designation : {type:String,required:true},
    keyContact : {type:Number,required:true},
    keyEmail : {type:String,required:true},
    img : {type:String,required:true},
    tell_us_about:{type:String,required:true},
    fb_link : {type:String,required:true},
    vision_missing : {type:String,required:true},
    Management_name : {type:String,required:true},
    Management_Designation : {type:String,required:true},
    profile:{type:String,required:true},
    linkedin:{type:String,required:true},
    
  },
  {
    versionKey: false,
    timestamps: true,
  },

);

module.exports=mongoose.model("product",productSchema)