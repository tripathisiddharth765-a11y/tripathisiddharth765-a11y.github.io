const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  root.classList.add("light");
  themeIcon.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  root.classList.toggle("light");
  const light = root.classList.contains("light");
  localStorage.setItem("theme", light ? "light" : "dark");
  themeIcon.textContent = light ? "☀" : "☾";
});

const progress = document.getElementById("progress");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
}, { passive: true });

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
