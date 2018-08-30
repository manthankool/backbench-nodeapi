var mongoose = require('mongoose');

var User = mongoose.model('User',{

  name:{
    type:String,
    required:true,
    trim:true,
    unique: true,
    minlength:1
  },
  type:{
    type:String,
    required:true,
    trim:true,
    minlength:4
  },
  content:{
    type:String,
    required:true,
    minlength:15
  },
  path:{
    type:String,
    required:true,
    trim:true,
    unique: true,
    minlength:1
  }
});

module.exports = {
  User:User
};
