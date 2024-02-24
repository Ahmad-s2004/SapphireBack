const mongoose = require('mongoose')

const Schema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
            // required:[true,'Name is Required']
        },
        email:{
            type:String,
            required:true,
            unique: true
        },
        password:{
            type:String,
            required:true            
        },
        img:{
            type:String,
            required:true            
        }
    },{timestamps: true}
);

const User = mongoose.model("users",Schema);
module.exports = User;
