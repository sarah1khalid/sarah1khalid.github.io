document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('nameButton').addEventListener('click', function() {
        let userName = prompt("Please enter your name:");
        if (userName) {
            document.getElementById('nameDisplay').textContent = "Hello, " + userName + "!";
        }
    });

    
    let profileImage = document.getElementById('profileImage');
    profileImage.addEventListener('click', function(event) {
        event.preventDefault();
        let img = profileImage.querySelector('img');
        if (img.classList.contains('enlarged-image')) {
            img.classList.remove('enlarged-image'); // Shrink the image back
        } else {
            img.classList.add('enlarged-image'); // Enlarge the image
        }
    });

    
    window.hoverIn = function(element) {
        element.querySelector('a').style.color = 'pink';
    };

    window.hoverOut = function(element) {
        element.querySelector('a').style.color = 'white';
    };
});
