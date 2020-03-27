//jQuery code
setTimeout(function() {
  $(".boxLoading").fadeOut("fast");
}, 2000);

setTimeout(function() {
  $(".cardLoading").fadeOut("fast");
}, 3000);

//slow scroll when click book marks
let anchorlinks = document.querySelectorAll('a[href^="#"]');

for (let item of anchorlinks) {
  // relitere
  item.addEventListener("click", e => {
    let hashval = item.getAttribute("href");
    let target = document.querySelector(hashval);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    history.pushState(null, null, hashval);
    e.preventDefault();
  });
}

// fix navbar
let navbar = document.querySelector("#nav");

window.onscroll = function() {
  // pageYOffset or scrollY
  if (window.pageYOffset > 1) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};