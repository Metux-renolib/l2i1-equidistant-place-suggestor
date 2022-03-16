const PORT = 5000
const express = require('express');
const app = express();
const axios = require('axios');

app.post("/formulaire",(req,res)=>{
  console.log(req.body.user1)
})

app.listen(5000,()=>{console.log('server started at port 5000')});