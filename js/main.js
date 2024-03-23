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


const opencv = () => {
    window.open("https://drive.google.com/file/d/1y6_BxV_v1OdBd8CiKRqi5Pvk4vRW_BX9/view?usp=sharing");
}

const openemail = () => {
    var email = 'tommasocaputi85@gmail.com';
    var subject = '';
    var emailBody = '';
    window.open("mailto:" + email + "?subject=" + subject + "&body=" + emailBody);
}