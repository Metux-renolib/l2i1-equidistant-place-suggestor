const PORT = 5000
const express = require('express');
const app = express();
const cors = require('cors');
const { algo } = require('./Algo');

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors());

let jour = " ";
let tab = new Array();
let tabFinal = new Array();

app.post("/formulaire",async (req,res)=>{
  tab = req.body.inputFields
  jour = req.body.dispoFinale
  console.log(tab)
  console.log(jour)
})

app.get("/algo", async(req, res)=>{
  tabFinal = algo(tab)
  console.log(tabFinal)
  res.send(tabFinal)
})  

app.listen(5000,()=>{console.log('server started at port 5000')});