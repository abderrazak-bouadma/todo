Todos = new Meteor.Collection("todos");


if (Todos.find().count() == 0) {
  Todos.insert({done:false,text:"Must change the world",date:new Date('Jul 28, 2013')}, function(){console.log("Inserted a new todo")});
  Todos.insert({done:true,text:"Must master Meteor",date:new Date('Jul 29, 2013')}, function(){console.log("Inserted a new todo")});
  Todos.insert({done:false,text:"Must buy milk",date:new Date('Jul 31, 2013')}, function(){console.log("Inserted a new todo")});
}

