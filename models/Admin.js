const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps')
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  customerName: { type: String },
  mobileNo: { type: Number },
  whatsappNo: { type: Number },
  password:{type:String},
  createdAt: Date,
  updatedAt: Date
});
AdminSchema.plugin(timestamps,{index:true});
module.exports = mongoose.model('Admin', AdminSchema);