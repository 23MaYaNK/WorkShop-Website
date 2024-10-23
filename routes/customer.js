const customercontroller=require('../controllers/customercontoller');
const admincontroller=require('../controllers/admincontroller');
const express=require('express');
const routes=express.Router();
routes.use(express.urlencoded({extended:false}));

routes.get('/',(req,res)=>{
    res.render('home.ejs');
})
routes.get('/login',(req,res)=>{
    res.render('adminlogin.ejs');
})

routes.get('/aboutus',(req,res)=>{
    res.render('aboutUs.ejs');
})
routes.get('/contact',(req,res)=>{
    res.render('contactUs.ejs');
})

routes.post('/do/login',(req,res)=>{
    customercontroller.dologin(req,res)
})
routes.post('/add/message',(req,res)=>{
    customercontroller.addMessage(req,res)
})
routes.get('/enquire/Now',(req,res)=>{
   res.render('enquiryNow.ejs');
})
// routes.get('/enquire/Now/:id',(req,res)=>{
//    customercontroller.enquiryForBike(req,res)
// })
routes.post('/do/enquiry',(req,res)=>{
    customercontroller.doEnquire(req,res)
})

routes.get('/show/customers',(req,res)=>{
    admincontroller.showCustomers(req,res)
})
routes.get('/customers/messages',(req,res)=>{
    admincontroller.showCustomersMessage(req,res)
})
routes.get('/show/bikes/customer',(req,res)=>{
    customercontroller.showBikesCustomer(req,res)
})

module.exports=routes;

