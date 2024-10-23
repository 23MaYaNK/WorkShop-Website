const express=require('express');
const app=express();
const customer=require('./routes/customer');
const vehicle=require('./routes/vehicle');
const path=require('path');
const connection=require('./connection');
const common=require('./helper/common')

connection();
common.createadmin();
app.use(express.json());
app.use(customer);
app.use(vehicle);
app.use(express.static('public'));
app.set('views',path.resolve('./views'));
app.set('view engine','ejs');
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running on 3000");
    }
})


