
var media = window.matchMedia("only screen and (max-width: 1000px)");
if (media.matches) {
  $("video").attr("controls","controls");
}
