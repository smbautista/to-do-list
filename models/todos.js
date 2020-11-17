const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todoSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    schedule: {
        type: Date,
        required: true
    }
});

const todoModel = mongoose.model('todo', todoSchema);

module.exports = todoModel;