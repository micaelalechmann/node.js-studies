let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let taskSchema = new Schema({
    name: {
        type: String,
        required: 'Type your task'
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ['completed', 'pending', 'doing'],
        default: 'pending'
    }
});

module.exports = mongoose.model('Tasks', taskSchema);

