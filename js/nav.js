var lastScrollTop = 0;

// When the user scrolls down 100px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
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