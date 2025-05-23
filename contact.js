document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // CAPTCHA validation
    let captchaInput = document.getElementById("captcha").value;
    if (captchaInput !== "5") {
        alert("CAPTCHA failed! Please try again.");
        return;
    }

    // File size validation
    let fileInput = document.getElementById("file");
    if (fileInput.files.length > 0) {
        let fileSize = fileInput.files[0].size / (1024 * 1024); // Convert to MB
        if (fileSize > 5) {
            alert("File size exceeds 5MB limit!");
            return;
        }
    }

    alert("Form submitted successfully!");
});