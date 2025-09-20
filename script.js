document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('#typed-output', {
        strings: ['Software Engineer', 'Full-stack Fixer', 'API Gardener', 'Cloud Problem Solver', 'AI Workflow Whisperer'],
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
