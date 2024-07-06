

document.addEventListener('DOMContentLoaded', (event) => {
    const homeButton = document.getElementById('homeButton');
    const contactForm = document.getElementById('contactForm');

    homeButton.addEventListener('click', () => {
        alert('Hello! You clicked the button.');
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        alert(`Email submitted: ${email}`);
    });
});
