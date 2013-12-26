/**
 * Created with JetBrains WebStorm.
 * User: merzoug
 * Date: 12/26/13
 * Time: 4:52 PM
 * To change this template use File | Settings | File Templates.
 */

Meteor.methods({
    updateTaskStatus: function (taskId) {
        var task = Todos.find({_id:taskId});
        if (task.done) {
            Todos.update({_id:taskId},{$set:{done:false}});
        } else {
            Todos.update({_id:taskId},{$set:{done:"test"}});
        }
    }
});