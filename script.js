// ----------------------
// TAB FILTER LOGIC
// ----------------------
const tabs = document.querySelectorAll(".tab-btn");
const cards = document.querySelectorAll(".card");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const status = tab.getAttribute("data-status");

    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    cards.forEach((card) => {
      const cardStatus = card.getAttribute("data-status");
      card.style.display = (status === "all" || status === cardStatus) ? "flex" : "none";
    });
  });
});

// ----------------------
// DARK / LIGHT MODE TOGGLE
// ----------------------
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Load saved theme
const saved = localStorage.getItem("theme");
if (saved === "light") {
  document.documentElement.classList.add("light");
  themeIcon.textContent = "☀️";
}

// Toggle on click
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");

  const isLight = document.documentElement.classList.contains("light");
  themeIcon.textContent = isLight ? "☀️" : "🌙";

  // Save preference
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
