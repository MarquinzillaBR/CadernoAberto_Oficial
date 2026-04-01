const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const activeTheme = savedTheme || preferredTheme;

root.setAttribute("data-theme", activeTheme);

if (themeToggle) {
  themeToggle.textContent = activeTheme === "dark" ? "claro" : "escuro";

  themeToggle.addEventListener("click", () => {
    const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    themeToggle.textContent = nextTheme === "dark" ? "claro" : "escuro";
  });
}

const searchInput = document.querySelector("[data-text-search]");

if (searchInput) {
  const searchableCards = [...document.querySelectorAll("[data-search-item]")];

  searchInput.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();

    searchableCards.forEach((card) => {
      const text = (card.getAttribute("data-search-item") || "").toLowerCase();
      card.style.display = text.includes(query) ? "" : "none";
    });
  });
}
