const   express = require("express"),
        todo = require("../models/todo.js"),
        router = express.Router();

// Create all our routes and set up logic within those routes where required.
      router.get("/", function(req, res) {
        todo.all(function(data) {
          var hbsObject = {
            todos: data
          };
          console.log(hbsObject);
          res.render("index", hbsObject);
        });
      });
      
      router.post("/api/todos", function(req, res) {
        todo.create([
          "name", "completed"
        ], [
          req.body.name, req.body.completed
        ], function(result) {
          // Send back the ID of the new quote
          res.json({ id: result.insertId });
        });
      });
      
      router.put("/api/todos/:id", function(req, res) {
        var condition = "id = " + req.params.id;
      
        console.log("condition", condition);
      
        todo.update({
          completed: req.body.completed
        }, condition, function(result) {
          if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        });
      });
      
      router.delete("/api/todos/:id", function(req, res) {
        var condition = "id = " + req.params.id;
      
        todo.delete(condition, function(result) {
          if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        });
      });

// Export routes for server.js to use.
module.exports = router;