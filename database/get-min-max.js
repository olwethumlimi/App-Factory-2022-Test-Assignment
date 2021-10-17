$(document).ready(() => {
    db.collection("form-data")
      ///sort the age ascending , so that i can get the min and max age
      .orderBy("age", "asc")
      .get()
      .then((docs) => {
      //store the documents
       var store=[]
        docs.forEach((data) => {
          //get each row
          var doc = data.data();
          store.push(doc);
        });
        
        // check we have data
        if(store.length>0){
            // get the first item is the youngest
            $(".min").html(store[0]["age"])
            // get the last item is the oldest
            $(".max").html(store[store.length-1]["age"])
        }
      });
  });
  