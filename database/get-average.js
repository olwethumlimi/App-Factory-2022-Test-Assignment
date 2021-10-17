$(document).ready(() => {
  db.collection("form-data")
    .get()
    .then((docs) => {
      // set the averages
      var average_age = 0;
      var average_eat = 0;
      var average_movies = 0;
      var average_tv = 0;
      var average_radio = 0;
      docs.forEach((data) => {
        //get each row
        var doc = data.data();
        //get the values and increment it
        average_age += doc["age"];
        average_eat += doc["I like to eat out"];
        average_movies += doc["I like to watch movies"];
        average_tv += doc["I like to watch TV"];
        average_radio += doc["I like to listen to the radio"];
      });
      var rows_size = docs.size;
      //covert the average to 1 decimal

      let age = (average_age / rows_size).toFixed(1);
      let eat = (average_eat / rows_size).toFixed(1);
      let movies = (average_movies / rows_size).toFixed(1);
      let tv = (average_tv / rows_size).toFixed(1);
      let radio = (average_radio / rows_size).toFixed(1);

      //append the averages to the divs
      $(".average-age").html(age);
      $(".average-eat").html(eat);
      $(".average-movies").html(movies);
      $(".average-tv").html(tv);
      $(".average-radio").html(radio);
    });
});
