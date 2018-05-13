// insert HTML-related jQuery onclick and ajax events

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-done").on("click", function(event) {
      var id = $(this).data("id");
      var newdone = $(this).data("newdone");
  
      var newdoneState = {
        completed: newdone
      };
  
      // Send the PUT request.
      $.ajax("/api/todos/" + id, {
        type: "PUT",
        data: newdoneState
      }).then(
        function() {
          console.log("changed done to", newdone);
          // Reload the page to get the updated list
          lotodoion.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newtodo = {
        name: $("#ca").val().trim(),
        completed: $("[name=completed]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/todos", {
        type: "POST",
        data: newtodo
      }).then(
        function() {
          console.log("created new todo");
          // Reload the page to get the updated list
          lotodoion.reload();
        }
      );
    });
  
    $(".delete-todo").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/todos/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted todo", id);
          // Reload the page to get the updated list
          lotodoion.reload();
        }
      );
    });
  });