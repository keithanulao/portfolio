const typingTitle = document.getElementById('typing-title');
const text = "Hello, my name is Keith L. Anulao";
let index = 0;
let direction = 1; // 1 for typing, -1 for backspacing

function animateTitle() {
    let cursor = '<span class="blinking-cursor">|</span>';
    if (direction === 1) {
        typingTitle.innerHTML = text.substring(0, index) + cursor; // Add cursor after each character
        if (index > text.length) {
            direction = -1;
            setTimeout(animateTitle, 5000); // Pause before backspacing
        } else {
            setTimeout(animateTitle, 100);
        }
        index++; // Increment index after adding the character
    } else {
        typingTitle.innerHTML = text.substring(0, index) + cursor; // Add cursor after each character
        if (index < 0) {
            direction = 1;
            setTimeout(animateTitle, 500); // Pause before typing again
        } else {
            setTimeout(animateTitle, 50);
        }
        index--; // Decrement index after removing the character
    }
}

animateTitle(); // Start the animation