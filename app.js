const express = require('express');
const app = express();

const port = 3000
const bodyParser = require('body-parser');

app.set("view engine","ejs");

app.use(bodyParser.json());

// require all request to encoded
app.use(bodyParser.urlencoded({extended: true}))

//import mongo connection 
const connectToMongo = require('./utils/db_connection');
connectToMongo();
// for front-end use, ex public images
app.use(express.static(__dirname + '/public'));


const taskRoute = require("./routes/taskRoutes")


app.use('/tasks',taskRoute)


app.get('*',(req,res) =>{
    res.send("404 Page");
})

app.listen(port,()=> console.log(`Server listening at port ${port}`));