// Save data on form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        contactMethod: document.querySelector('input[name="contactMethod"]:checked').value,
        topics: document.getElementById('topics').value,
        services: Array.from(document.querySelectorAll('input[name="services"]:checked')).map(el => el.value),
        feedback: document.getElementById('feedback').value
    };

    localStorage.setItem('contactFormData', JSON.stringify(formData));
    alert('Form data saved!');
});

// Clear form data on reset
document.getElementById('contactForm').addEventListener('reset', function() {
    localStorage.removeItem('contactFormData');
});
