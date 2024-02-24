const NewInSchema = require("../models/newInModel");

const NewInApi = async(req, res) => {
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
  
      let data = await new NewInSchema({
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
  const showNewIn = async(req, res) => {
    let data = await NewInSchema.find()
        res.send(data)
  }
  const deleteNewIn = async(req, res) => {
    let result = await NewInSchema.findById(req.params.id)
        res.send(result)
  }
  exports.showNewIn = showNewIn;
  exports.NewInApi = NewInApi;
  exports.deleteNewIn = deleteNewIn;

  
  
  