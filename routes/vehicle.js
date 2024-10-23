const customercontroller=require('../controllers/customercontoller');
const admincontroller=require('../controllers/admincontroller');
const express=require('express');
const routes=express.Router();
routes.use(express.urlencoded({extended:false}));

routes.get('/add/vehicle',(req,res)=>{
    res.render('addVehicle.ejs');
})

routes.post('/add/new/vehicle',(req,res)=>{
    admincontroller.addVehicle(req,res)
})
routes.get('/show/customers',(req,res)=>{
    admincontroller.showCustomers(req,res)
})
routes.get('/customers/messages',(req,res)=>{
    admincontroller.showCustomersMessage(req,res)
})
routes.get('/show/bikes/admin',(req,res)=>{
    admincontroller.showVehicles(req,res)
})
routes.get('/admin/panel',(req,res)=>{
    res.render('adminPanel.ejs');
})


module.exports=routes;