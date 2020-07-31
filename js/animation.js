// TODO bug with Django and Java
myID = document.getElementsByClassName("skill-bar-filled");
var myScrollFunc = function() {
  var y = window.scrollY;
  if (y > 500) {
    for (var i = 0; i < myID.length; i++) {
      var current = document.getElementsByClassName("skill-bar-filled");
      current[0].className = current[0].className.replace("skill-bar-filled", "skill-bar-filled-animation");
      };
    }
};

window.addEventListener("scroll", myScrollFunc);