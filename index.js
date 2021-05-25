const express = require('express')
const app = express()
const port = 3000 || process.env.PORT;
const path = require('path')

app.use(express.static(__dirname));

app.get('/pagina1',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'index.html'))
   
})
 
app.get('/pagina2',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'index2.html'))
}) 

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})

