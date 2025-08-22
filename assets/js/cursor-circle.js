const circle = document.getElementById("cursorCircle");
let mouseX = 0;
let mouseY = 0;

// Update mouse position
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate using GSAP ticker
gsap.ticker.add(() => {
  gsap.to(circle, {
    x: mouseX - 5,
    y: mouseY - 5,
    duration: 0.2,
    ease: "power2.out",
  });
});
