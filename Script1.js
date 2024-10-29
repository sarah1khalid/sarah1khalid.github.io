// JavaScript source code
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const clearBtn = document.getElementById('clearBtn');

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Capture form data
        const formData = {
            name: form.name.value,
            email: form.email.value,
            rating: form.rating.value,
            services: Array.from(form.services).filter(service => service.checked).map(service => service.value),
            message: form.message.value
        };

        // Store data in local storage
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Form data saved successfully!');
        
        // Clear form fields
        form.reset();
    });

    // Clear button resets the form
    clearBtn.addEventListener('click', function() {
        form.reset();
    });
});
