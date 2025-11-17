const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  toggle.innerHTML = document.documentElement.classList.contains("dark")
    ? `<i data-lucide="sun"></i>`
    : `<i data-lucide="moon"></i>`;

  lucide.createIcons();
});
