// const { hashPassword } = require("../helpers/userAuth")
const { hashPassword } = require("../helpers/userAuth");
const User = require("../models/userModel");
const WomenSchema = require("../models/womenModel");
const NewInSchema = require("../models/newInModel");
const MenSchema = require("../models/menModel");
const HomeSchema = require("../models/homeModel");
const KidsSchema = require("../models/kidsModel");
const AccessoriesSchema = require("../models/accessoriesModel");


const userGet = async(req, res) => {
  const { name, email, password } = req.body;
  const file = req.file.filename;
  if (!name || !email || !password || !file) {
    return res.send({ message: "Please fill required fields" });
  }

  try {
    let existinguser = User.find({ email: email });
    if (existinguser) {
      res.send({ message: "You are already registered" });
    }

    let hashedPassword = await hashPassword(password);

    let data = await new User({
      name,
      email,
      password: hashedPassword,
      img: file,
    }).save();
    res.send(data);
    
    res.status(200).send({
      success: true,
      message: "You registered successfully",
      
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to register",
      error,
    });
  }
};
module.exports = userGet;





