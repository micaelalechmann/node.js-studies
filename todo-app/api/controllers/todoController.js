let mongoose = require("mongoose");
let Task = mongoose.model("Tasks");

exports.getTasks = (req, res) => {
  Task.find({}, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.createTask = (req, res) => {
  let newTask = new Task(req.body);
  newTask.save((err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.getTask = (req, res) => {
  Task.findById(req.params.taskId, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.updateTask = (req, res) => {
  Task.findByIdAndUpdate(
    req.params.taskId,
    req.body,
    { new: true },
    (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    }
  );
};

exports.deleteTask = (req, res) => {
  Task.findByIdAndDelete(
    req.params.taskId, 
    (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};
