/*
const btn = document.querySelector(".btn-mode-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});
*/
const toggleColorMode = e =>{
    if (e.currentTarget.classList.contains("light--hidden")){
      document.documentElement.setAttribute("theme", "light-theme");

      localStorage.setItem("theme", "light-theme");
      return;
    }

    document.documentElement.setAttribute("theme", "dark-theme");

    localStorage.setItem("theme", "dark-theme");
};

const toggleColorButtons = document.querySelectorAll(".btn-mode-toggle")

toggleColorButtons.forEach(btn =>{
  btn.addEventListener("click", toggleColorMode);
});
