// script.js
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Define themes
const lightTheme = {
  background: "#f5f7fa",
  text: "#000000ff",
  navbarBg: "#fff",
  sectionBg: "#fff",
  cardBg: "#fff",
  footerBg: "#333",
};

const darkTheme = {
  background: "#121212",
  text: "#f5f5f5",
  navbarBg: "#1e1e1e",
  sectionBg: "#1a1a1a",
  cardBg: "#000000ff",
  footerBg: "#0d0d0d",
};

// Apply theme
function applyTheme(theme, isDark) {
  body.style.backgroundColor = theme.background;
  body.style.color = theme.text;

  // Navbar
  document.querySelector(".navbar").style.backgroundColor = theme.navbarBg;
  document.querySelectorAll(".navbar a").forEach(a => a.style.color = theme.text);

  // Sections
  document.querySelectorAll("section").forEach(sec => {
    sec.style.backgroundColor = theme.sectionBg;
    sec.style.color = theme.text;
  });

  // Cards (features, testimonials, pricing)
  document.querySelectorAll(".feature-card, .testimonial-card, .pricing-card").forEach(card => {
    card.style.backgroundColor = theme.cardBg;
    card.style.color = theme.text;
  });

  // Highlighted pricing card - special case (always blue with white text)
  document.querySelectorAll(".pricing-card.highlight").forEach(card => {
    card.style.backgroundColor = "#1a73e8"; // fixed blue
    card.style.color = "#fff"; // fixed white text
    card.querySelectorAll("h3, p, ul li").forEach(el => {
      el.style.color = "#fff";
    });
  });

  // Footer
  document.querySelector(".footer").style.backgroundColor = theme.footerBg;
  document.querySelector(".footer").style.color = theme.text;
}

// State + persistence
let isDark = localStorage.getItem("theme") === "dark";
applyTheme(isDark ? darkTheme : lightTheme, isDark);
themeToggleBtn.textContent = isDark ? "☀️" : "🌙";

// Toggle
themeToggleBtn.addEventListener("click", () => {
  isDark = !isDark;
  applyTheme(isDark ? darkTheme : lightTheme, isDark);
  themeToggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
