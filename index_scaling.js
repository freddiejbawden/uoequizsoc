$(document).ready(function() {
  changeBackdrop();
});
function changeBackdrop() {
  if ($(window).width() < 840) {
    document.getElementById("backdrop").setAttribute("src","images/backdrop_small.jpg");
  } else  {
    document.getElementById("backdrop").setAttribute("src","images/backdrop_large.jpg");
  }
}
