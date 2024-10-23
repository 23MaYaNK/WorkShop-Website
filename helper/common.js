const Admin=require('../models/Admin');
const bcrypt=require('bcrypt');
const saltRound=10;
async function createadmin() {
    try{
        let Customer={
            customerName:'kcpal',
            mobileNo:'9811306157',
            whatsappNo:'9811306157',
            emailId:'k.c.pal1976@gmail.com',
            password: '8860044187',
            usertype:1
        }
       
        let admin=new Admin(Customer);
        await admin.save();
        console.log("Admin has been created successfully")

    }catch(err){
        console.log(err);
    }
    
}
module.exports={
    createadmin
}