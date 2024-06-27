const AccessoriesSchema = require("../models/accessoriesModel");

const AccessoriesApi = async (req, res) => {
  try {
    const { title, price, detail, description, color, size, fabric } = req.body;
    const file = req.file.filename;

    if (!title || !price || !detail || !description || !color || !size || !fabric || !file) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }
    const newAccessory = new AccessoriesSchema({
      title,
      price,
      detail,
      description,
      color,
      size,
      fabric,
      img: file,
    });

    const savedData = await newAccessory.save();
    res.status(201).json(savedData);
  } catch (error) {
    console.error("Error adding accessory:", error);
    res.status(500).json({ success: false, message: "Failed to add accessory data", error: error.message });
  }
};

const showAccessories = async (req, res) => {
  try {
    const accessories = await AccessoriesSchema.find();
    if(accessories){
      return res.status(200).json(accessories);
    }else{
      return res.status(404).json({message:"No data found"})
    }
  } catch (error) {
    console.error("Error fetching accessories:", error);
    res.status(500).json({ success: false, message: "Failed to fetch accessories", error: error.message });
  }
};

const deleteAccessories = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAccessory = await AccessoriesSchema.findByIdAndDelete(id);
    
    if (!deletedAccessory) {
      return res.status(404).json({ success: false, message: "Accessory not found" });
    }
    return res.status(200).json({ success: true, message: "Accessory deleted successfully", deletedAccessory });
  } catch (error) {
    console.error("Error deleting accessory:", error);
    res.status(500).json({ success: false, message: "Failed to delete accessory", error: error.message });
  }
};

module.exports = {
  AccessoriesApi,
  showAccessories,
  deleteAccessories,
};
