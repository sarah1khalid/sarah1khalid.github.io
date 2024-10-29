document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent page refresh

            // Collect form data
            const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                service: document.getElementById("service").value,
                message: document.getElementById("message").value,
                ageGroup: document.getElementById("age").value,
                communication: document.querySelector('input[name="communication"]:checked') 
                               ? document.querySelector('input[name="communication"]:checked').value 
                               : 'No preference', // Default value if none selected
                followUp: document.getElementById("follow-up") 
                           ? document.getElementById("follow-up").checked 
                           : false // Check if follow-up checkbox exists
            };

            // Store in local storage
            localStorage.setItem("contactFormData", JSON.stringify(formData));

            // Confirm data stored
            alert("Data has been saved to local storage!");

            // Reset form
            form.reset();
        });
    }
});