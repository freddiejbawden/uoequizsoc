function openNav() {
  document.getElementById("sideNav").style.width = "50%";
  return;
}
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}
$(document).click(function(e) {
  if(!$(e.target).closest('#sideNav').length) {
    if (($('#sideNav').css('width') != '0px')) {
      closeNav();
  }
}
});
