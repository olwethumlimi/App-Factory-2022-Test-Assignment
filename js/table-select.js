// this is the table data
var table_rows = [
  "I like to eat out",
  "I like to watch movies",
  "I like to watch TV",
  "I like to listen to the radio",
];

$(document).ready((e) => {
  /**
  *
  * the data-text its represent the key in the data begin
  * selected
  * 
  */
//  loop in  each item
  table_rows.map((text, index) => {
    //   use template string for append multiple lines
    $("tbody").append(
      `
      <tr>
      <td>${text}</td>
      <td><input type="radio" data-text="${text}" name="${index}" value="1"  /></td>
      <td><input type="radio" data-text="${text}" name="${index}" value="2" /></td>
      <td><input type="radio" data-text="${text}" name="${index}" value="3" /></td>
      <td><input type="radio" data-text="${text}" name="${index}" value="4" /></td>
      <td><input type="radio" data-text="${text}" name="${index}" value="5" /></td>
      </tr>
  `
    );
  });
  /**
   * when the radio is cliked i check the data text that it belong to
   * which the data text will be the key
   */
  $("tbody input").change(function(){
      
  })
});
