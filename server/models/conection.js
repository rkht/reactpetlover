//MONGO DB CONECTION SUCCESSFULLY
const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/mean89"
mongoose.connect(url)
const db = mongoose.connection
console.log("suucess fully conected to mongodb")
module.exports=db