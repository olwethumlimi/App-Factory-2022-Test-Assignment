 //when any personal details input is selected
 $("#personal-details input").change(function () {
    // i get the name attribute as the key of personal_details
    var key = $(this).attr("name").trim();
    var value = $(this).val();
    //update the current value
    personal_details[key] = value;
    console.log(personal_details);
  });
  // end