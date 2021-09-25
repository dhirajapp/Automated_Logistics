const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
      name: String,
      price: Number

}, {
    timestamps: true
});
module.exports=mongoose.model('Item', ItemSchema);