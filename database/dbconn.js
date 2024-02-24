const mongoose = require('mongoose')

const dbConnection = () =>{
    try {
     mongoose.connect("mongodb://127.0.0.1:27017/websiteData")
        console.log(`Database connected successfully`)      
    } catch (error) {
        console.log(error) 
    }
}

module.exports = dbConnection;


// mongoose.connect("mongodb://127.0.0.1:27017/userprofile")
// .then(()=>{
//     console.log(`Database connected successfully`.bgGreen)
// }).catch((e)=>{
//     console.log(e)
// })





