$(function() {
  $(".devouredBurger").on("click", function(event) {
      console.log("Click")
    var id = $(this).data("id");
    var newDevoured = $(this).data("newDevoured");

    var burgerInBelly = {
      devoured: "true"
    };

    $.ajax("/api/burger/" + id,{
        type: "PUT",
        data: burgerInBelly
    })
     .then(function(){
         console.log("Burger is in my Belly", newDevoured)
     })
    //Add a burger
    $(".create-form").on("click", function(event) {
      event.preventDefault();
      console.log("click");

      var newBurger = {
        burgerName: $("#addBurger").val().trim()
          
      };

      $.ajax("/api/burger", {
          type: "POST",
          data: newBurger
      })
      .then(function(){
          console.log("A New Burger was Added");
          location.reload();
      })
    });
  });
});
