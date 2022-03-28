//SERVER RURING
const express = require('express');
const bodyParse = require('body-parser');
const http = require('http');
const path = require('path');
//SERVER RURING..................

// const session = require('express-session')

const indexController = require('./server/controller/index.controller')

const app =express();
//SERVER RURING

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));
// app.use(session({'secret':'rohitkushwaha'}))
app.use(express.static(path.join(__dirname, 'build')));
//SERVER RURING

app.use('/webapi',indexController);
//SERVER RURING

// app.get('*' , function(req,res){
//     var mypath=path.join(__dirname,'build/index.html')
//     res.sendFile(mypath)
// })

http.createServer(app).listen(3000,()=>{
    console.log('server Running');
});
//SERVER RURING
