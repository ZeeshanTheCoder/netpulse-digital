
const trailContainer = document.getElementById("trailContainer");

// Random color generator
function getRandomColor() {
  const colors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#FF6FF2"];
  return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener("mousemove", (e) => {
  const dot = document.createElement("div");
  dot.classList.add("trail-dot");
  dot.style.left = `${e.clientX}px`;
  dot.style.top = `${e.clientY}px`;
  dot.style.backgroundColor = getRandomColor();

  trailContainer.appendChild(dot);

  // Animate dot (fade out and scale up)
  gsap.to(dot, {
    opacity: 0,
    scale: 2,
    duration: 0.6,
    ease: "power1.out",
    onComplete: () => {
      dot.remove();
    },
  });
});