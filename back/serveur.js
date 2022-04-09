const PORT = 5000
const express = require('express');
const app = express();
const cors = require('cors');
const { algo } = require('./Algo');
const { verifLogin } = require('./verifLogin')

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors());

let jour = " ";
let tab = new Array();
let tabFinal = new Array();

app.use('/login', (req, res) => {
  if(verifLogin(req.body.username,req.body.password)=== true){
    res.send({
      token : req.body.username
    })
  }
  if(verifLogin(req.body.username,req.body.password)=== false){
    res.send({
      token : 'erreur'
    })
  }
  
});

app.post("/formulaire",async (req,res)=>{
  tab = req.body.inputFields
  jour = req.body.dispoFinale
  console.log(tab)
  console.log(jour)
})

app.get("/algo", async(req, res)=>{
  await algo(tab).then(tabFinal => {
    console.log("TabFinal serveur" , tabFinal);
    res.send(JSON.stringify(tabFinal));
  });
})  

app.listen(5000,()=>{console.log('server started at port 5000')});