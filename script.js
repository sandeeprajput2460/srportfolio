// Show popup and play sound on page load
window.onload = function () {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("welcomeSound").play();
}

// Close popup only with button
function closePopup() {
    document.getElementById("overlay").style.display = "none";
}


function loadHTML(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(err => console.error(`Error loading ${url}:`, err));
}

// Load navbar and footer dynamically
loadHTML('navbar', 'navbar.html');
loadHTML('footer', 'footer.html');


const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Scroll to top on click
topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});



