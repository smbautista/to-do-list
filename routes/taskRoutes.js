//declaring constant variable express to connect client and back-end
const express = require("express")

//variable used to get express
const router = express.Router()
const task = require("./../controllers/taskController")

// defining all the routes
// All routes will start /tasks
// /tasks
// /tasks/add
// /tasks/delete

// define every routes for taskController specific functions  
router.get("/",task.getTasks)
router.post("/add",task.addTask)
router.post("/delete",task.deleteTask)
router.get('/update/:id',task.updateTaskForm)
router.post('/update',task.updateTask)

module.exports = router


