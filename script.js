document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("yes-btn").addEventListener("click", function() {
        document.getElementById("top-image").src = "images/IMG_9557.png";
        document.getElementById("caption").innerText = "Good Choice, Inshallah next year we will celebrate it together. Flowers and choclates for this year will be delivered in person";
        document.getElementById("yes-btn").style.display = "none";
        document.getElementById("no-btn").style.display = "none";
    });

    document.getElementById("no-btn").addEventListener("click", function() {
        document.getElementById("top-image").src = "images/IMG_9786.png";
        document.getElementById("caption").innerText = "You sure, pick again";
        document.getElementById("no-btn").style.display = "none";
        document.getElementById("yes-btn").style.width = "100%";
    });
});
