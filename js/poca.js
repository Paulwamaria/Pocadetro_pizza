$(document).ready(function(){
//Decrare variables
var costBySize=0;
var costOfCrust=0;
var costOfToppings=0;
var costOfDelivary=0;
var numberOfPizzas;

//front-end


$("form#pizza-form").submit(function(event) {
  event.preventDefault();

  var sizeOfPizza = $("#dropdown").children("option").filter(":selected").text()
  var selectedCrust=$("input[name='crust']:checked").val();
  //Access the selected toppings and put them in an array
  var toppings=[];
  $.each($("input[name='toppings']:checked"), function(){            
    toppings.push($(this).val());
});
  var delivaryBool=$("input[name='delivary']:checked").val();
  

  $("ul#totalCost").append("<li><span class='contact'>" + delivaryBool + " hi"+ "</span></li>");


});

}

);