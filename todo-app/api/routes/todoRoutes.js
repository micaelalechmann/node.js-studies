module.exports = (app) => {
    let todoList = require('../controllers/todoController');

    app.route('/tasks')
        .get(todoList.getTasks)
        .post(todoList.createTask);
    
    app.route('/tasks/:taskId')
        .get(todoList.getTask)
        .put(todoList.updateTask)
        .delete(todoList.deleteTask); 
}