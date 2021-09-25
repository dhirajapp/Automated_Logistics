const mongoose = require('mongoose');

const CustomersSchema = mongoose.Schema({
      name: String,
      city: String

}, {
    timestamps: true
});
module.exports=mongoose.model('Customers', CustomersSchema);