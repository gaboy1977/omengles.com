// Update user count dynamically
const userCountElement = document.getElementById('user-count');
let userCount = 212;

// Function to update user count
function updateUserCount() {
    userCountElement.textContent = userCount;
}

// Simulate user count increment
setInterval(() => {
    userCount++;
    updateUserCount();
}, 10000); // Update every 10 seconds

updateUserCount();
