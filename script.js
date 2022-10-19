var menu_btn = document.getElementById("menu_btn");
var side_nav = document.getElementById("side_nav");
var menu_img = document.getElementById("menu_img");

side_nav.style.right = "-250px";

menu_btn.onclick = function () {
  if (side_nav.style.right == "-250px") {
    side_nav.style.right = "0";
    menu_img.src = "images/close.png";
  } else {
    side_nav.style.right = "-250px";
    menu_img.src = "images/menu.png";
  }
};

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});
