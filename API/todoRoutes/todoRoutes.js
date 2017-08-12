'use strict';

module.exports = function(app){

  var todoList = require("../todoController/todoListController");

  //todoList Routes

  app.route("/tasks").get(todoList.list_all_tasks);

  app.route("/tasks").post(todoList.create_a_task);

  app.route("/tasks/:taskId").get(todoList.get_a_task);

  app.route("/tasks/:taskId").put(todoList.update_a_task);

  app.route("/tasks/:taskId").delete(todoList.delete_a_task);

};
