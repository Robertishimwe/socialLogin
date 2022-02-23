const express = require("express");
const { database } = require("pg/lib/defaults");
const db = require("./config/database");
const models = require("./models");
User = models.User;
const Sequelize = require("sequelize");
const req = require("express/lib/request");
db.authenticate()
 .then(()=>{
     console.log('database connected......')
 })

 const app = express()
 app.get("/",(req,res)=>{
    User.findAll()
    .then(data=>{
        res.send(data)
    })
 })

 app.listen(7000, ()=>{
    console.log("server runnig")
})