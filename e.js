document.getElementById("contactBtn").addEventListener("click", function() {
    alert("Redirecting to the Contact Page!");
    window.location.href = "contact.html";
});

document.querySelector("#login form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    alert("Login successful! Redirecting...");
    window.location.href = "dashboard.html"; // Example redirect
});