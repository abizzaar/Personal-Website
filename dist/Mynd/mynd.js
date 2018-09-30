




 var slider = document.getElementById("slider");
 var sliderColorArray = document.getElementsByClassName("rs-path-color");

 var media2 = window.matchMedia("only screen and (max-width: 1000px)");

// jQuery for slider
(function($) {
    "use strict"; // Start of use strict
  
    $("#slider").roundSlider({
      radius: "400px",
      circleShape: "half-bottom",
      sliderType: "min-range",
      showTooltip: false,
      stop: "isStop",
      keyboardAction: false,
      value: 100,
      drag: "check",
      change: "check",
      mouseScrollAction: false
    });
  })(jQuery); // End of use strict

function loading2() {
  $("#slider").roundSlider("option", { "value": slider.options.value-100 });
  var checkValue = 9 - Math.floor((slider.options.value/10));
  var hue = (60 - (checkValue / 9) * 60) + 180;
  for (i = 0; i < sliderColorArray.length; i++) {
    sliderColorArray[i].style.backgroundColor =  "hsl(" + hue + ", 100%, 57%)";
  }
}

/*
let iterations = 0;

function loading() {
  var interval = setInterval(function() {
    $("#slider").roundSlider("option", { "value": slider.options.value-100 });
    var checkValue = 9 - Math.floor((slider.options.value/10));
    var hue = (60 - (checkValue / 9) * 60) + 180;
    for (i = 0; i < sliderColorArray.length; i++) {
      sliderColorArray[i].style.backgroundColor =  "hsl(" + hue + ", 100%, 57%)";
    }
    iterations++;
    if (iterations > 20) {
      clearInterval(interval);
    }
  }, 40);
} 
*/

setTimeout(loading2, 500);

if (media2.matches) {
  $("#slider").roundSlider("option", { "radius": 0.4*screen.width});
}

function check() {
  var checkValue = 9 - Math.floor((slider.options.value/10));
  var hue = (60 - (checkValue / 9) * 60) + 180;
  for (i = 0; i < sliderColorArray.length; i++) {
    sliderColorArray[i].style.backgroundColor =  "hsl(" + hue + ", 100%, 57%)";
  }
}



