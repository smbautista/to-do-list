//import model
const TodoModel = require('./../models/todos');

async function getTasks (req,res) {
    try {
        const todos = await TodoModel.find();
        if(!todos) return res.status(400).send("Something is wrong ");
        res.render('index',{title: "todos", data: todos});
    } catch (error) {
        res.status(500).send(error);
    }
}

async function addTask (req,res) {
    try {
        const todoToSave = await new TodoModel(req.body);
        const todo = await todoToSave.save();
        if(!todo) return res.status(400).send("Something is error");
        res.redirect('/tasks');
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateTaskForm (req,res){
    try {
        const todos = await TodoModel.find({_id:req.params.id});
        if(!todos) return res.status(400).send("Something is error");

        res.render('update',{title: "todos", data: todos[0]});
    } catch (error) {
        res.status(500).send(error);
    }
}

// finds id from task to compare which task to update
async function updateTask (req,res){
    try {
        const todos = await TodoModel.findByIdAndUpdate({_id:req.body.id},{
            task : req.body.task,
            schedule : req.body.schedule
        },(err,data)=>{
            if(err){
                console.log(err);
                return err
            }
            res.redirect('/tasks')
        });
       
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

// finds id from task to compare which task to delete
async function deleteTask (req,res){
    try {
        console.log(req.body.id);
        TodoModel.findByIdAndDelete({ _id : req.body.id},(err,data)=>{
            if(err){
                console.log(err);
                return err
            }
            res.redirect("/tasks");
        })
        
    } catch (error) {
        console.log(error);
    }
}



// exported objects used in taskRoutes
module.exports = {
    getTasks,
    addTask,
    deleteTask,
    updateTaskForm,
    updateTask
}

