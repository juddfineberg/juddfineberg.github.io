$(function() {
  var sports = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    // var markup = "The weather report... " + "will be here when I finish my homework.";
    var sports =  data.daily.summary;

    $('.sports').html();


    // End of your code


    // $('.weather-report').html(markup);
  }
  $('a.get-sports-scores').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      // url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      url: 'http://api.cbssports.com/fantasy/sports?version=3.0',
'
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleSports
    });
  });
});
