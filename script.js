// Add event listeners to subscribe buttons
document.querySelectorAll('.subscribe-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Redirect to payment page
        window.location.href = 'payment.html';
    });
});

// Add hover effects (already in CSS, but can add more JS if needed)
document.querySelectorAll('.package').forEach(package => {
    package.addEventListener('mouseenter', () => {
        // Additional hover effect if needed
    });

    package.addEventListener('mouseleave', () => {
        // Additional leave effect if needed
    });
});
