// check box
$(".check-radio-button input").change(function name(params) {
  var value = $(this).val();
  //first remove the value if exist
  if (favourite_food.includes(value)) {
    favourite_food = favourite_food.filter((e) => e != value);
  } else {
    // the add the value
    favourite_food.push(value);
  }
  console.log(favourite_food);
});
