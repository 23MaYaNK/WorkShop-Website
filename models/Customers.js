const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps')
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  customerName: { type: String },
  mobileNo: { type: Number },
  whatsappNo: { type: Number },
  id:{type:String},
  usertype: { type: Number, default: 2, enum: [1, 2] },
  createdAt: Date,
  updatedAt: Date
});
customerSchema.plugin(timestamps,{index:true});
module.exports = mongoose.model('Customer', customerSchema);