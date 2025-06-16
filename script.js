document.addEventListener('DOMContentLoaded', () => {
    // This ensures the script runs after the entire HTML document is loaded

    const myButton = document.getElementById('myButton');

    if (myButton) {
        myButton.addEventListener('click', () => {
            alert('Button clicked! You can add more interactive JavaScript here.');
            console.log('My button was clicked!');
            // Example of changing text content
            const heroSection = document.getElementById('hero');
            if (heroSection) {
                const paragraph = heroSection.querySelector('p');
                if (paragraph) {
                    paragraph.textContent = 'You just clicked the button, and I changed this text with JavaScript!';
                }
            }
        });
    } else {
        console.warn('Button with ID "myButton" not found.');
    }

    // You can add more JavaScript functionality here.
    // For example, dynamic content loading, form validation, animations, etc.

    console.log('JavaScript is loaded and ready!');
});