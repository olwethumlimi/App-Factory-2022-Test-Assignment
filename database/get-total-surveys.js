$(document).ready(() => {
  //get the document size
  db.collection("form-data")
    .get()
    .then((docs) => {
      //docs.size  return the total rows
      //append the size to the div
      $(".total-surveys").html(docs.size);
    });
});
