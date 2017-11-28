$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var title = $("#title").val();
    var time = $("#time").val();
    var age = parseInt($("input#age").val());

    console.log(title + ", " + time + ", " + age);


   if (age < 18) {
    var tickType = "Child";
    var price = 15;
  } else if (age > 65) {
    var tickType = "Senior";
    var price = 10;
  } else {
    var tickType = "Adult";
    var price = 20;
  }

  if (time === "8AM-2PM") {
    price -= 5;
  }


    $(".title-output").text(title);
    $(".age-output").text(tickType);
    $(".time-output").text(time);
    $(".price-output").text(price);

    $("#output").show();


    event.preventDefault();
  });
});
