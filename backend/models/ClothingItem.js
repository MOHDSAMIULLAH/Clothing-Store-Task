const mongoose = require('mongoose');

const clothingItemSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
  });
  
  const ClothingItem = mongoose.model("ClothingItem", clothingItemSchema);
  module.exports = ClothingItem;
