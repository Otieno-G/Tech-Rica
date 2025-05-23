document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill out all required fields.");
        return;
    }

    alert("Thank you for reaching out! We will get back to you soon.");
});
