document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("top-image").src = "images/IMG_9557.png";
    document.getElementById("caption").innerText = "Good Choice, Inshallah next year we will celebrate in the same spot";
    document.getElementById("yes-btn").style.display = "none";
    document.getElementById("no-btn").style.display = "none";
});

document.getElementById("no-btn").addEventListener("click", function() {
    document.getElementById("top-image").src = "images/IMG_9786.png";
    document.getElementById("caption").innerText = "You sure, pick again";
    document.getElementById("no-btn").style.display = "none";
    document.getElementById("yes-btn").style.width = "100%";
});
