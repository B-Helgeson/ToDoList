// Import the ORM to create functions that will interact with the database.
const   orm = require("../config/orm.js"),

        todo = {
                all: function(cb) {
                    orm.all("todos", function(res) {
                    cb(res);
                    });
                },
                create: function(cols, vals, cb) {
                    orm.create("todos", cols, vals, function(res) {
                    cb(res);
                    });
                },
                update: function(objColVals, condition, cb) {
                    orm.update("todos", objColVals, condition, function(res) {
                    cb(res);
                    });
                }
        };
        
// Export the database functions for the controller (todo_controller.js).
module.exports = todo;