
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
