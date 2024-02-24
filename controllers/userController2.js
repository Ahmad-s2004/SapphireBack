const User = require("../models/userModel")

const deleteItem = async(req,res) =>{
  let result = await User.deleteOne({_id: req.params.id})
  if(result){
    res.send(result)
  }else{
    res.send({message:"no record found"})
  }
}
module.exports = deleteItem;