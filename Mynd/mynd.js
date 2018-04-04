




// jQuery for slider
(function($) {
    "use strict"; // Start of use strict
  
    $("#slider").roundSlider({
      radius: 0.35 * screen.width,
      circleShape: "half-bottom",
      sliderType: "min-range",
      showTooltip: false,
      stop: "isStop",
      keyboardAction: false,
      value: 50,
      mouseScrollAction: true
    });
  })(jQuery); // End of use strict



  setInterval(graphic, 1000);

    
  function graphic() {
    var sliderColorArray = document.getElementsByClassName("rs-path-color");
    var hue = (60 - (checkValue / 9) * 60) + 180;
    for (i = 0; i < sliderColorArray.length; i++) {
      sliderColorArray[i].style.backgroundColor =  "hsl(" + hue + ", 100%, 57%)";
    }




  }