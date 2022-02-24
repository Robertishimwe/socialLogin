const express = require("express");
const { database } = require("pg/lib/defaults");
const db = require("./config/database");
const models = require("./models");
User = models.User;
const Sequelize = require("sequelize");
const req = require("express/lib/request");
const usersRoute = require("./route/usersRoute");
const bodyParser = require('body-parser')
db.authenticate()
 .then(()=>{
     console.log('database connected......')
 })

 const app = express()
 app.use(express.json());
//  app.use(bodyParser.json())


app.set('view engine','ejs')


 app.use("/api",usersRoute)

 
 app.listen(3000, ()=>{
    console.log("server runnig")
})