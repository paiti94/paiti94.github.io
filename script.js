document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('#typed-output', {
        strings: ['Senior Data Engineer','Fullstack Developer', 'AI Enthusiast', 'Technology Enthusiast'],
        typeSpeed: 60,            // Speed in milliseconds for each character
        backSpeed: 40,            // Speed in milliseconds to delete a character
        backDelay: 2000,          // Time before backspacing
        startDelay: 500,          // Time before typing starts
        loop: true,               // Loop the typing animation
        showCursor: true,         // Show the cursor blinking
        cursorChar: '|',          // Character for cursor
        autoInsertCss: true,      // Insert CSS for cursor & fadeOut into HTML
    });
});