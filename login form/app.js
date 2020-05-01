var evalid = false,
  nvalid = false,
  pvalid = false;
function valid() {
  if (pvalid == true && nvalid == true && evalid == true) {
    $(".button1").removeAttr("disabled");
  }
}
$(".namefull").focusout(function() {
  console.log("Event fired");
  var regexname = /^([a-zA-Z]{3,16})$/;
  if (!this.value.match(regexname)) {
    nvalid = false;
    $(".nameError").css("opacity", "1");
    $(".button1").attr("disabled", true);
  } else {
    nvalid = true;
    $(".nameError").css("opacity", "0");
    valid();
  }
});

$(".emailfull").focusout(function() {
  console.log("Event fired");
  var regexname = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!this.value.match(regexname)) {
    evalid = false;
    $(".emailError").css("opacity", "1");
    $(".button1").attr("disabled", true);
  } else {
    evalid = true;
    $(".emailError").css("opacity", "0");
    valid();
  }
});

$(".passFull").focusout(function() {
  console.log("Event fired");
  var regexname = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!this.value.match(regexname)) {
    pvalid = false;
    $(".passError").css("opacity", "1");
    $(".button1").attr("disabled", true);
  } else {
    pvalid = true;
    $(".passError").css("opacity", "0");
    valid();
  }
});
$(".button1").click(function(e) {
  e.preventDefault();
});
