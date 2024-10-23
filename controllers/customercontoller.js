const Customer = require('../models/Customers');
const Admin=require('../models/Admin');
const Vehicle=require('../models/Vehicle');
const CustomerMessage=require('../models/CustomerMessage');
const saltRound = 10;
const params = require('../routes/customer');
const bcrypt = require('bcrypt');




async function dologin(req, res) {
    try {
        const { mobileNo, password } = req.body;

        // Fetch the user from the database (assuming you fetch the user by email)
        const customer = await Admin.findOne({ mobileNo: mobileNo });
        
        if (!customer) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Logging to make sure values are correct
        console.log('customer password hash:',password);
        console.log('Provided password:', req.body.password);

        // Compare the provided password with the hashed password
       

        if (!(password==req.body.password)) {
            return res.status(400).json({ message: 'Invalid password' });
        }
        else{

            // Continue with login success logic
            
            res.render('adminPanel.ejs');
            
        }

    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};



async function addMessage(req,res) {
    try{
        const customer=new CustomerMessage(req.body);
        console.log(customer);
        await customer.save();
        res.render('contactUs.ejs');

    }catch(err){
        console.log(err);
        return res.status(501).end('error occur', err);
    }
    
}



async function doEnquire(req,res) {
try{
    console.log('enquiry body ',req.body)
    let customer=new Customer(req.body)
    await customer.save();
    res.render('home.ejs');

}   catch(err){
    console.log('error occur', err);
    res.status(404).end('something went wrong') 
}
}



async function showBikesCustomer(req,res) {
    try{
        let vehicle=await Vehicle.find({});
        res.render('showBikesCustomer.ejs',{
            vehicle:vehicle
        })

    }catch(err){
        console.log('error =>',err)
    }
    
}

// async function enquiryForBike(req,res) {
//     try{
//         let id=req.params.id;
//         let customer=new Customer(req.body);
//         customer.id=id;
//        await customer.save();
//        res.render('home.ejs');


//     }catch(err){
//         console.log('error=>', error)
//     }
    
// }


module.exports = {
     dologin,
     addMessage ,
     doEnquire,
     showBikesCustomer,
    // enquiryForBike}
}
