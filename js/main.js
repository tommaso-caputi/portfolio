document.addEventListener("DOMContentLoaded", function () {
    var currentLocation = window.location.href;
    var homeLink = document.getElementById("home-link");
    var aboutLink = document.getElementById("about-link");

    if (currentLocation.includes("index.html")) {
        homeLink.classList.add("active");
    } else if (currentLocation.includes("about.html")) {
        aboutLink.classList.add("active");
    }
});
