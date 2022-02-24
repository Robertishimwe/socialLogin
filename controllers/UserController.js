const models = require("../models");
const express = require("express");
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = "1041795120653-n5846gedg80f7abh1t3truc8pf1eq47n.apps.googleusercontent.com"
const client = new OAuth2Client(CLIENT_ID);
const app = express()
User = models.User;
Profile = models.Profile;
app.set('view engine','ejs')




class UserController{

 static getAllUsers = async (req,res)=>{
        User.findAll()
        .then(data=>{res.send(data)})
    
    }
 static addProfile = async (req,res)=>{
        const userProfile = {
            googleId:req.body.googleId,
            age:req.body.age,
            address:req.body.address,
            education:req.body.education
            
        }
        Profile.create(userProfile).then(data=>{
            res.send(data)
        }).catch(err=>{
            res.send({message:err.parent.detail})
        })

    
    }

 static getAllProfile = async (req,res)=>{
        Profile.findAll()
        .then(data=>{res.send(data)})
    
    }
    
static getSingleProfile = async (req,res)=>{
       const googleId = req.body.googleId
       await Profile.findOne({ where: { googleId: googleId }})

        .then(user=>{res.send(user)})
    
    }




   










 static login = async (req,res)=>{
        res.render('login')
    
    }
 static getToken = async (req,res)=>{
     const token =req.body.token
     
     
     async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
         const userInfo = {
            name:payload.name,
            googleId:userid,
            email:payload.email
            
        }
        User.create(userInfo).then(data=>{
            res.set(token)
        }).catch(err=>{
            res.send(err)
        })
       console.log(userInfo)
       console.log(payload)

      }
      verify()
      .catch(console.error);

      





    
    }
 static setup = async (req,res)=>{
        res.render('setup')
    
    }

}
    
    
module.exports = UserController;
    
    
    
    