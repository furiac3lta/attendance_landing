const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  toggle.innerHTML = document.documentElement.classList.contains("dark")
    ? `<i data-lucide="sun"></i>`
    : `<i data-lucide="moon"></i>`;

  lucide.createIcons();
});

  AOS.init();
  lucide.createIcons();

  const html = document.documentElement;
  const storedTheme = localStorage.getItem("attendance-theme");

  if (storedTheme === "dark") html.classList.add("dark");

  function toggleTheme() {
    html.classList.toggle("dark");
    localStorage.setItem("attendance-theme", html.classList.contains("dark") ? "dark" : "light");
  }

  document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);
  document.getElementById("themeToggleMobile")?.addEventListener("click", toggleTheme);

  /* MENU HAMBURGUESA */
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
    mobileNav.classList.toggle("flex");
  });


