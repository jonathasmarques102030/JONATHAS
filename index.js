const express = require('express')
const app = express()
const ejs = require("ejs")
const port = 2004

app.set("view engine","ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
    res.render("./views/index")
});

app.listen(port, ()=>{
    console.log('servidor iniciando')
})