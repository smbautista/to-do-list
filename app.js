const express = require('express');
const app = express();
const port = 3000
const bodyParser = require('body-parser');
urlEncodeParser = (bodyParser.urlencoded({extended: true}))
app.set("view engine","ejs");
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
// let name = [{name:"Jisoo",age:"25"},{name:"Jennie",age:"24"},{name:"Rosie",age:"23"},{name:"Lisa",age:"23"}];
let name = []
app.get("/home",(req,res) =>{
    res.render("index",{title:"To-Do-List",data: name});
});

//test routes for testing
app.get('/all',(req, res)=>{
    res.json(name);
})
app.post('/add',urlEncodeParser, (req, res)=>{
    console.log(req.body);
    name.push(req.body);
    res.redirect("/");
})

app.post('/delete',urlEncodeParser,(req,res)=>{
    console.log(req.body.index);
    name.splice(req.body.index,1)
    // name.pop(req.body);
    res.redirect("/");
})

app.get("/",(req,res) =>{
    res.render("index",{title:"To-Do-List", data: name});
});


app.get("/about",(req,res) =>{
    res.send("About Page");
});

app.get('*',(req,res) =>{
    res.send("404 Page");
})

app.listen(port,()=> console.log(`Server listening at port ${port}`));