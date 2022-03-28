
//WEBAPI CREATE SERVER
const express = require("express");
const router = express.Router()
const indexModel = require("../models/index.model")
//WEBAPI CREATE SERVER

router.get("/",(req,res,next)=>{
    res.send("<h1>gthrejrhgjfkjhrieutihjrugyhfhg api</h1>")
})
router.get("/userRegister",(req,res,next)=>{
    var userDetail = req.query
    //console.log(userDetail)
    indexModel.userRegister(userDetail).then((result)=>{
        res.send({'output':'user register successfully..'})
    }).catch((err)=>{
        console.log(err)
    })
})
module.exports=router;