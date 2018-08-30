var _ = require('lodash');

var {User} = require('./models/user');
var {ObjectID} = require('mongodb');


var {mongoose} = require('./db/mongoose');

var express = require('express');
var bodyParser = require('body-parser');


var app =express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/browse/:path',(req,res) => {
  var path = req.params.path;

  User.findOne({path:path}).then((file) => {
    if(!file){
      return res.status(404).send('File is not available');
    }
    return res.status(200).send({file});
  }).catch((e) => res.status(400).send());
});

app.post('/create',(req,res) => {
  var newUser = new User({
    name:req.body.name,
    path:req.body.path,
    content:req.body.content,
    type:req.body.type

  });
  newUser.save().then((doc) => {
    res.status(200).send(doc);
  },(err) => {
    res.status(400).send(err);
  });
});

app.delete('/delete/:path',(req,res)=> {
  var path = req.params.path;

  User.deleteMany({path:path}).then((file) => {
    if(!file){
      return res.status(404).send();
    }
      return res.status(200).send({file});
  }).catch((e) => {
    console.log(e);
    res.status(400).send()
  });
});

app.patch('/update/:id',(req,res) => {
  var id = req.params.id;
  var body = _.pick(req.body,['name','content','path']);
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  User.findOneAndUpdate(id,{$set:body},{new:true}).then((file) => {
    if(!file){
      return res.status(404).send();
    }
    else{
      return res.send({file});
    }



  }).catch((e) => {res.status(400).send()});
});

app.get('/browse',(req,res) => {
  User.find().then((file) => {
    return res.status(200).send({file});
  },(e) => {
    return res.status(400).send(e);
  });
});

app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});
