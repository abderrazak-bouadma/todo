/**
 * Created with JetBrains WebStorm.
 * User: merzoug
 * Date: 12/26/13
 * Time: 4:53 PM
 * To change this template use File | Settings | File Templates.
 */

    //
Template.todos.todoList = function (){
    return Todos.find();
};

//
Template.todos.events({
    'click': function () {
        Meteor.call('updateTaskStatus', this._id, function (error, result) {
            if (error) {
                console.log("An error happens");
            } else {
                console.log("it seems it's okey !");
            }
        });
    }
});