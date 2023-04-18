var lastScrollTop = 0;

window.addEventListener("scroll", scrollFunction);


function scrollFunction() {

  var st = window.pageYOffset || document.documentElement.scrollTop; 
  if (st > lastScrollTop) {
    document.getElementById("navBar").classList.add("right");

  } else if (st < lastScrollTop) {
    document.getElementById("navBar").classList.remove("right");
  } // else was horizontal scroll

  lastScrollTop = st <= 0 ? 0 : st;

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navBar").classList.add("navBarScroll");
  } else {
    document.getElementById("navBar").classList.remove("navBarScroll");
  }

}

function burgerClick() {
  let menu = document.getElementById("mobile-navBar-slideOut");
  let burger = document.getElementById("mobile-navBar-burger");

  menu.classList.toggle("mobile-navBar-slideOut-opened");
  burger.classList.toggle("mobile-navBar-slideOut-opened");
}