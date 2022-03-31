const PORT = 5000
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors());


app.post("/formulaire",async (req,res)=>{
  const tab = req.body.inputFields
  const jour = req.body.dispoFinale
  console.log(tab)
  console.log(jour)
})

app.listen(5000,()=>{console.log('server started at port 5000')});