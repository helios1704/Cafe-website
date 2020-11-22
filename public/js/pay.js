//Payment pop-up
var pay = document.getElementById("myPay");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  pay.style.display = "block";
}
span.onclick = function() {
  pay.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == pay) {
    pay.style.display = "none";
  }
}

//Pay
