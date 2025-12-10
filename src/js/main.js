import shuffleLetters from "shuffle-letters";

const links = document.querySelectorAll(".suffleletters");

links.forEach((link) => {
  let isAnimating = false;
  let canAnimate = true;

  link.addEventListener("mouseenter", () => {
    if (!isAnimating && canAnimate) {
      isAnimating = true;
      canAnimate = false;

      shuffleLetters(link, {
        iterations: 4,
        fps: 40,
      });

      setTimeout(() => {
        isAnimating = false;
      }, 600);
    }
  });

  link.addEventListener("mouseleave", () => {
    setTimeout(() => {
      canAnimate = true;
    }, 100);
  });
});
// CUSTOM CURSOR

document.addEventListener("DOMContentLoaded", function () {
  var cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
  ///.cardscta chamger sur élément qui grandissent
  var linkElements = document.querySelectorAll(".link, .cards-cta");
  linkElements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
      cursor.classList.add("scale-up");
    });

    element.addEventListener("mouseleave", function () {
      cursor.classList.remove("scale-up");
    });
  });
});
