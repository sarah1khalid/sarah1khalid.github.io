document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh
    
    // Collect form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        service: document.getElementById("service").value,
        message: document.getElementById("message").value,
        ageGroup: document.getElementById("age").value,
        communication: document.querySelector('input[name="communication"]:checked').value,
        followUp: document.getElementById("follow-up").checked
    };
    
    // Store in local storage
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    
    // Confirm data stored
    alert("Data has been saved to local storage!");
});
