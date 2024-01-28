const express=require('express')
const path=require('path');
const bodyParser=require("body-parser")

const app=express()
const port=3000;

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.get('/',(req,res)=>{
    //console.log(path.join(__dirname+"/index.html"))
    res.sendFile(path.join(__dirname+"/index.html"))
})

app.get('/api/v1/userdata',(req,res)=>{
    res.json({
        name: 'sumo',
        email: 'sumo@gmail.com',
        password: '11111',
    })
})

app.post("/api/v1/login",(req,res)=>{
    res.send(`<h1>DONE Mr. ${req.body.email} </h1>`)
     console.log(req.body);
})

app.post("/api/v2/register",(req,res)=>{
    const userName=req.body.name;
    const userEmail=req.body.email;
    const userPassword=req.body.password;

    res.json({
        success: true,
        name: userName,
        email:userEmail,
        password:userPassword
    })
})

app.listen(port, ()=>{
    console.log(`server is working on port : ${port}`)
})