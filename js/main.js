let links = document.querySelectorAll(".buttons a");
let imgs = document.querySelectorAll(".portfolio");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  });
  link.addEventListener("click", (el) => {
    imgs.forEach((img) => {
      img.style.opacity = 0;
      setTimeout(() => {
        img.style.cssText = "display:none";
      }, 200);
    });
    document
      .querySelectorAll(el.target.getAttribute("data-sec"))
      .forEach((img) => {
        setTimeout(() => {
          img.style.cssText = "display:block";
        }, 200);
      });
  });
});

let scrollBtn = document.querySelector(".scroll");
window.onscroll = function () {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 400) {
    scrollBtn.classList.add("in");
  } else {
    scrollBtn.classList.remove("in");
  }
};
