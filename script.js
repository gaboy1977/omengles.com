// script.js
const userCountElement = document.querySelector('#user-count');
const getStartedButton = document.querySelector('#get-started');

if (userCountElement && getStartedButton) {
  // Update user count
  userCountElement.textContent = '100';

  // Add event listener to get started button
  getStartedButton.addEventListener('click', () => {
    // Redirect to sign up page or open sign up modal
    window.location.href = '/signup';
  });
} else {
  console.error('Required elements not found in the DOM.');
}
