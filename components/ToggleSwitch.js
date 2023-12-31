if (typeof window !== "undefined") {
  /* Dark/light Mode Toggle */
  const toggleSwitch = document.querySelector(
    '.themeSwitch input[type="checkbox"]'
  );

  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
      toggleSwitch.checked = false;
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }

  toggleSwitch.addEventListener("change", switchTheme, true);

  if (currentTheme === "light") {
    toggleSwitch.checked = true;
  }

  /* End Dark/Light Mode Toggle */
}
