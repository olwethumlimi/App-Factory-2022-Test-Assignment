 //loop in all the personal details inputs
 $("#personal-details input").map(function () {
    // then get the name attribute
    var name = $(this).attr("name").trim();
    console.log(name);
    //then check if name == date then
    if (name == "date") {
      //then insert the date to the current input
      $(this).val(new Date().toDateString());
      //store the date automatically
      personal_details[name] = $(this).val();
    }
  });