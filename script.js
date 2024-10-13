document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
    form.addEventListener("submit", function(event) {
    event.preventDefault();
    // Retrieve user inputs and trim whitespace
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const passsword = document.getElementById("password").value.trim();
    // initize validation variables
    let isValid = true;
    let massage = [];
    // Username validation
    if (username.length < 3) {
        isValid = false;
        massage.push("Username must be at least 3 characters long.");
    }
    // Email validation
    if (!email.include("@") ||!email.include(".")) {
        isValid = false;
    massage.push("Email must contain '@' and '.'");
    }
    //Password validation
    if (passsword.length < 8) {
        isValid = false;
        massage.push("Password must be at least 8 characters long.");
    }
    // Display feedback
    feedbackDiv.style.display = "block";
    if (isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745"; // Green for success
    } else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545"; // Red for errors
    }
});
});
