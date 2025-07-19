// script.js
const userCountElement = document.getElementById('user-count');
const getStartedButton = document.getElementById('get-started');

// Update user count
userCountElement.textContent = '100';

// Add event listener to get started button
getStartedButton.addEventListener('click', () => {
  // Redirect to sign up page or open sign up modal
  window.location.href = '/signup';
});
