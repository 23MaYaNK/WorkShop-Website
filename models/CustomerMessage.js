const mongoose=require('mongoose');
const timestamps = require('mongoose-timestamps')
const Schema=mongoose.Schema;
const customerMessage=new Schema({
    customerName:{type:String},
    mobileNo:{type:String},
    emailId:{type:String},
    whatsappNo:{type:String},
    message:{type:String},
    createdAt: Date,
     updatedAt: Date
})
customerMessage.plugin(timestamps,{index:true});
module.exports=mongoose.model('customerMessage',customerMessage);