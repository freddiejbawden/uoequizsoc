

function changeBackdrop() {
  if ($(window).width() < 840) {
    $("html").css("background","");
    $("#backdrop").attr("src","images/backdrop_small.jpg");
    $("#main").css("margin", "10px 0 10px");
  } else  {
    $("#backdrop").removeAttr("src");
    console.log( $('#topbar').height());
    $("#main").height($(window).height() - $('#topbar').height());
    $("html").css("background","url(images/backdrop_large.jpg) no-repeat center center");
    $("#main").css("margin", "0");
    //document.getElementById("backdrop").setAttribute("src","images/backdrop_large.jpg");
  }
}
