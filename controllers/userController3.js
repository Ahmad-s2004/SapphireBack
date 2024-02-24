const User = require("../models/userModel")

const showItem = async(req, res) => {
      let data = await User.find()
          res.send(data)
    }
module.exports = showItem;


