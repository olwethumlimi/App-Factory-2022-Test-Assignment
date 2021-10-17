$(document).ready(() => {
  db.collection("form-data")
    .get()
    .then((docs) => {
      // set the averages
      var pizza = 0;
      var pasta = 0;
      var pap = 0;
      var chicken = 0;
      var beef = 0;
      var other = 0;
      docs.forEach((data) => {
        //get each row
        var doc = data.data();
        var foodList = doc["favourite_food"];
        if (foodList.includes("pizza")) pizza++;
        if (foodList.includes("pasta")) pasta++;
        if (foodList.includes("pap and wors")) pap++;
        if (foodList.includes("chicken stir fry")) chicken++;
        if (foodList.includes("beef stir fry")) beef++;
        if (foodList.includes("other")) other++;
      });
      var rows_size = docs.size;
      //covert the average to 1 decimal

      /**
       *   (item  *  total ) * 100  then to 1 decimal
       */
      let pizzaValue = ((pizza / rows_size) * 100).toFixed(1);
      let pastaValue = ((pasta / rows_size) * 100).toFixed(1);
      let papValue = ((pap / rows_size) * 100).toFixed(1);
      let chickenValue = ((chicken / rows_size) * 100).toFixed(1);
      let beefValue = ((beef / rows_size) * 100).toFixed(1);
      let otherValue = ((other / rows_size) * 100).toFixed(1);

      //append the averages to the divs
      $(".like-pizza").html(pizzaValue);
      $(".like-pasta").html(pastaValue);
      $(".like-pap").html(papValue);
      $(".like-chicken").html(chickenValue);
      $(".like-beef").html(beefValue);
      $(".like-other").html(otherValue);
    });
});
