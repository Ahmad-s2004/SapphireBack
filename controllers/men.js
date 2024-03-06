const MenSchema = require("../models/menModel");


const MenApi = async(req, res) => {
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
  
      let data = await new MenSchema({
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
  const showMen = async (req, res) => {
    try {
        // Use the MenSchema model to find data in the MongoDB collection
        let data = await MensSchema.find();

        // Send the retrieved data as a response
        res.send(data);
    } catch (error) {
        // Handle errors and send an appropriate response
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
};
  const deleteMen = async(req, res) => {
    let result = await MenSchema.findById(req.params.id)
        res.send(result)
  }
  exports.MenApi = MenApi;
  exports.showMen = showMen;
  exports.deleteMen = deleteMen;
  
  
