const Customer = require('../models/Customers');
const Admin=require('../models/Admin');
const CustomerMessage=require('../models/CustomerMessage');
const saltRound = 10;
const param = require('../routes/customer');
const Vehicle = require('../models/Vehicle');

async function showCustomers(req,res) {
    try{
        let customer=await Customer.find({});
        res.render('showCustomers.ejs' , {
            customer:customer
        })
    }catch(err){
        console.log('error=>',err);
        return res.status(404).res.end('something went wrong');
    }
    
}

async function showCustomersMessage(req,res) {
    try{
        let customer=await CustomerMessage.find({});
        res.render('showCustomerMessage.ejs' , {
            customer:customer
        })
    }catch(err){
        console.log('error=>',err);
        return res.status(404).res.end('something went wrong');
    }
    
}
async function addVehicle(req,res) {
    try{
        let vehicle=new Vehicle(req.body);
        console.log(vehicle);
        await vehicle.save();
        res.render('adminPanel.ejs');


    }catch(err){
        console.log('error =>',err)
    }
    
}
async function showVehicles(req,res) {
    try{
        let vehicle= await Vehicle.find({});
        res.render('showBikesAdmin.ejs',{vehicle : vehicle})

    }catch(err){
        console.log('error=>',err)
    }    
}
module.exports={
    showCustomers,
    showCustomersMessage,
    addVehicle,
    showVehicles
}




