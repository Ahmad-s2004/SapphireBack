const mongoose = require('mongoose')

const Schema2 = new mongoose.Schema(
    {
        title:{
            type:String,
            // required:true
            // required:[true,'Name is Required']
        },
        price:{
            type:String,
            // required:true,
            unique: false
        },
        detail:{
            type:String,
            // required:true            
        },
        description:{
            type:String,
            // required:true            
        },
        color:{
            type:String,
            // required:true            
        },
        size:{
            type:String,
            // required:true            
        },
        fabric:{
            type:String,
            // required:true            
        },
        img:{
            type:String,
            // required:true            
        }
    },{timestamps: true}
);

const KidsSchema = mongoose.model("kids",Schema2);
module.exports = KidsSchema;
