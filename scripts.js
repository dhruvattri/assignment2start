document.addEventListener("DOMContentLoaded", function() {
    // Function to change background color based on input
    function changeColor(input) {
        var color = "";
        if (input < 0 || input > 100) {
            color = "red";
        } else if (input <= 20) {
            color = "green";
        } else if (input <= 40) {
            color = "blue";
        } else if (input <= 60) {
            color = "orange";
        } else if (input <= 80) {
            color = "purple";
        } else if (input <= 100) {
            color = "yellow";
        }
        document.body.style.backgroundColor = color;
    }

    // Event listener for the "Change Custom Color" button
    document.getElementById("change-custom-color").addEventListener("click", function() {
        var userInput = prompt("Enter a number between 0 and 100:");
        changeColor(parseInt(userInput));
    });

    // Event listener for the "Change Random Color" button
    document.getElementById("change-random-color").addEventListener("click", function() {
        var randomInput = Math.floor(Math.random() * 100) + 1;
        changeColor(randomInput);
    });

    // Object to map dropdown values to image sources
    var imageSources = {
        "1": "img/img1.jpg",
        "2": "img/img2.jpg",
        "3": "img/img3.jpg"
    };

    // Event listener for the "image-select" dropdown
    document.getElementById("image-select").addEventListener("change", function() {
        var imageSrc = imageSources[this.value] || "img/img4.jpg";
        document.getElementById("display-image").src = imageSrc;
    });
});
