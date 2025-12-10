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
