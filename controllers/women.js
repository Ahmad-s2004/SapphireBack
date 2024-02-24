const WomenSchema = require("../models/womenModel");

const WomenApi = async(req, res) => {
    const { title, price, detail, description, color, size, fabric } = req.body;
    const file = req.file.filename;
    if (!title || !price || !detail || !description || !color || !size || !fabric || !file) {
      return res.send({ message: "Please fill required fields" });
    }
  
    try {
      // let existinguser = User.find({ email: email });
      // if (existinguser) {
      //   res.send({ message: "You are already registered" });
      // }
  
      // let hashedPassword = await hashPassword(password);
  
      let data = await new WomenSchema({
        title,
        price, 
        detail, 
        description, 
        color, 
        size, 
        fabric,
        img: file,
      }).save();
      res.send(data);
      
      // res.status(200).send({
      //   success: true,
      //   message: "You registered successfully",
        
      // });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Failed to register",
        error,
      });
    }
  };

  const showWomen = async(req, res) => {
    let data = await WomenSchema.find()
        res.send(data)
  }

  const deleteWomen = async(req, res) => {
    let result = await WomenSchema.findById(req.params.id)
          res.send(result)
}
exports.WomenApi = WomenApi;
exports.showWomen = showWomen;
exports.deleteWomen = deleteWomen;
  