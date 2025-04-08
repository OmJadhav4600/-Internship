// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Show confirmation message
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.textContent = "Your message has been sent successfully!";
    
    // Animate the confirmation message into view
    confirmationMessage.style.display = "block";
    
    // Clear form after submission (optional)
    document.getElementById("contactForm").reset();

    // Hide the message after a few seconds
    setTimeout(function() {
        confirmationMessage.style.display = "none";
    }, 5000); // Hide message after 5 seconds
});
