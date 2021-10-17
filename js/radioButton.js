// check box
$("table input").change(function name(params) {
    var key = $(this).attr("name");
    var value = $(this).val();
    radio_buttons_rows[key]=value;
    console.log(radio_buttons_rows);
  });
  