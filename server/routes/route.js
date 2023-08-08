const express=require('express');
const route=express.Router(); 

const service=require("../services/render");
const controller=require("../controller/controller");

route.get("/",service.render);
route.get("/form",service.form)
route.post("/api/users", controller.create);
route.get("/api/users",controller.find);

module.exports=route;