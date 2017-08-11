

'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name:{
    type: String;
    Required: "Please enter name of your awesome task";
  },
  created_Date:{
    type : Date,
    default: Date.now
  },
  status:{
    type:[{
      type:String,
      enum: ["pending","ongoing","completed"]
    }],
    default: "pending"
  }
});

module.exports = mongoose.model("Tasks", TaskSchema);
