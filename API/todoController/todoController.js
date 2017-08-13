'use strict';

var mongoose = require('mongoose');
var Task = mongoose.model('Tasks');

//find all tasks(get)
exports.list_all_tasks = function(req,res){
  Task.find({},function(err,task){
    if(err){
        res.send(err);
    }
    res.json(task);
  });
};

//Post a task
exports.create_a_task = function(req,res){
var new_task = new Task(req.body);
  new_task.save(function(err,task){
    if(err){
      res.send(err);
    }
    res.json(task);
  });
};

//Update a task(PUT)
exports.update_a_task = function(req,res){
  Task.findOneAndUpdate({_id:req.params.taskId}, req.body, {new:true}, function(err,task){
    if(err){
      res.send(err);
    }
    res.json(task);
  });
};

//Read a particular task
exports.read_a_task = function(req,res){
  Task.findById(req.params.taskId, function(err,task){
      if(err){
        res.send(err);
      }
      res.json(task);
  });
};

// Delete a task(Delete)


exports.delete_a_task = function(req,res){
  Task.remove({_id: req.params.taskId}, function(err,task){
    if(err){
      res.send(err);
    }
    res.json({message: "The task was successfully deleted"});
  });
};
