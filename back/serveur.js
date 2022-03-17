const PORT = 5000
const express = require('express');
const app = express();

app.post("/formulaire",(req,res)=>{
  console.log(req.body)
})

app.listen(5000,()=>{console.log('server started at port 5000')});