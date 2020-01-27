const themeToggle = document.querySelector(".theme-toggle");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");

if (window.localStorage.getItem("theme") === "dark") {
    document.body.classList.toggle("dark-theme", true);
    moon.classList.add("none");
    sun.classList.remove("none");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    moon.classList.toggle("none");
    sun.classList.toggle("none");
    window.localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-theme") ? "dark" : "light"
    );
})