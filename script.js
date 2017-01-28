$(document).ready(function() {

  var string = "";
  $('.button, .long').click(function() {
    var val = this.innerText;
    if (string.length > 13 && val != "AC" && val != "CE" && val != "=") {
      var display = string.substr(string.length - 13, 13);

      $('.result').empty().text(display);
      string += val;

    } else {
      if (val === "=") {
        string = string.replace(/÷|x/g, function(match) {
          return (match == "÷") ? "/" : "*";
        });
        string = eval(string);
        if (string.toString().length >= 13) {
          $('.result').empty().text(string.toPrecision(9));
        } else {
          $('.result').empty().text(string);
        }
      } else if (val === "AC") {
        string = "";
        $('.result').empty();
      } else if (val === "CE") {

        string = string.toString().slice(0, -1);

        $('.result').text(string);
      } else {
        string += val;
        $('.result').text(string);
      }
    }
    if (string === "8008") {
      $('#grad').css('background', 'pink');
    } else {
      $('#grad').css('background', 'linear-gradient(#d2eff2, #b05ed1)');
    }
  });

});