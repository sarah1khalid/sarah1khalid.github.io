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
                feedback: document.getElementById("feedback").value,
                ageGroup: document.getElementById("age").value,
                websiteSource: document.getElementById("websiteSource").value,
                features: Array.from(document.querySelectorAll('input[name="features"]:checked')).map(el => el.value), // Collect selected features
                communication: document.querySelector('input[name="communication"]:checked') 
                               ? document.querySelector('input[name="communication"]:checked').value 
                               : 'No preference' // Default value if none selected
            };

            // Store in local storage
            localStorage.setItem("contactFormData", JSON.stringify(formData));

            // Confirm data stored
            alert("thank you for your feedback!");

            // Reset form
            form.reset();
        });
    }
});