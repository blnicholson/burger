$(function() {
  $(".devouredBurger").on("click", function(event) {
    console.log("Click");
    var id = $(this).data("id");
    var newDevoured = $(this).data("newDevoured");

    var burgerInBelly = {
      devoured: "true"
    };

    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: burgerInBelly
    }).then(function() {
      console.log("Burger is in my Belly", newDevoured);
      location.reload();
    });
  });
  //     //Add a burger
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
   userValidation();
    var newBurger = {
      burger_name: $("#addBurger")
        .val()
        .trim(),
      devoured: 0
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("A New Burger was Added");
      location.reload();
    });
  });
});
function userValidation(){
    var input = $("#addBurger").val();
    if(input===""){
        alert("Please enter a burger name");
    }
    
}