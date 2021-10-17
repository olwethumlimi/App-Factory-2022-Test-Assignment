async function SubmitForm() {
  //combine the objects in to one
  Object.keys(radio_buttons_rows).map((key) => {
    //convert the values to int
    radio_buttons_rows[key] = parseInt(radio_buttons_rows[key]);
  });
  var surveyForm = { ...personal_details, ...radio_buttons_rows };
  //convert the age to int
  surveyForm["age"] = parseInt(personal_details.age);
  surveyForm["favourite_food"] = favourite_food;

  //add the form to the database
 await db.collection("form-data").add(surveyForm);
 window.location.replace("index.html");
}
