// Event Handling

// Button click
document.getElementById("clickButton").addEventListener("click", function() {
    alert("Button clicked!");
});

// Hover effects
const hoverElement = document.getElementById("hoverElement");
hoverElement.addEventListener("mouseover", function() {
    hoverElement.style.backgroundColor = "yellow";
});
hoverElement.addEventListener("mouseout", function() {
    hoverElement.style.backgroundColor = "";
});

// Keypress detection
document.getElementById("keyInput").addEventListener("keypress", function(event) {
    console.log(`Key pressed: ${event.key}`);
});

// Secret action (double-click and long press)
let timer;
const secretButton = document.getElementById("secretButton");

secretButton.addEventListener("dblclick", function() {
    alert("Double-click detected!");
});

secretButton.addEventListener("mousedown", function() {
    timer = setTimeout(function() {
        alert("Long press detected!");
    }, 1000);
});

secretButton.addEventListener("mouseup", function() {
    clearTimeout(timer);
});

// Interactive Elements

// Button to change text and color
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", function() {
    colorButton.textContent = "Color Changed!";
    colorButton.style.backgroundColor = "green";
});

// Image gallery
let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;
const galleryImage = document.getElementById("galleryImage");

document.getElementById("nextImage").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
});

// Tabs functionality
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tabcontent");
    for (let content of tabContents) {
        content.style.display = "none";
    }
    const tabLinks = document.getElementsByClassName("tablink");
    for (let link of tabLinks) {
        link.classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Form Validation

document.getElementById("myForm").addEventListener("submit", function(event) {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Required field check
    if (username === "") {
        alert("Username is required!");
        event.preventDefault();
    }

    // Email format validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }

    // Password length validation
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        event.preventDefault();
    }
});
