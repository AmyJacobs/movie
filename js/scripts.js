function Movie(title, time, age, price) {
  this.title = title;
  this.time = time;
  this.age = age;
  this.price = price;
}

// Movie.prototype.type = function() {
//   if (age < 18) {
//     return "Child";
//   } else if (age > 65) {
//     return "Senior";
//   } else {
//     return "Adult";
//   }
// }

Movie.prototype.priceCalc = function() {
  if (Movie.age < 18) {
    price = 15;
  } else if (Movie.age > 65) {
    price = 10;
  } else {
    price = 20;
  }

  if (time === "8AM-2PM") {
    price -= 5;
  }
  return price;
}


$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var time = $("#time").val();
    var age = parseInt($("input#age").val());
    var price = 0;

    var myMovie = new Movie(title,time,age,price);

    console.log(myMovie);


    $(".title-output").text(myMovie.title);
    $(".age-output").text(myMovie.age);
    $(".time-output").text(myMovie.time);
    $(".price-output").text(myMovie.priceCalc(price));

    $("#output").show();



  });
});
