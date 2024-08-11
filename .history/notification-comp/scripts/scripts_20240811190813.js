function showNotification(type, message) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    const notifications = document.getElementById('notification-container');
    notifications.appendChild(notification);

    // Trigger the show animation
    requestAnimationFrame(() => {
        notification.classList.add('show');
    });

    // Hide the notification after 4 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hide');

        // Remove the notification from the DOM after the animation ends
        setTimeout(() => {
            notifications.removeChild(notification);
        }, 400); 
    }, 4000); // Duration to show the notification (4 seconds)
}

// Event listener for the button
document.querySelector('button').addEventListener('click', () => {
    showNotification('success', 'This is a success message!');
});
