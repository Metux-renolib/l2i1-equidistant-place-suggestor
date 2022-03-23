const PORT = 5000
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({limit : '500kb'}))
app.use(express.urlencoded({ extended: true }))

app.post("/formulaire",(req,res)=>{
  console.log(req.body)
  res.json(req.body)
})

app.get("/api",(req,res) =>{
  res.send("hello");
})

app.listen(5000,()=>{console.log('server started at port 5000')});