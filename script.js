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
const startBtn = document.querySelector('.start-btn');
const popupModal = document.getElementById('popup-modal');
const allowAccessBtn = document.getElementById('allow-access-btn');
const denyAccessBtn = document.getElementById('deny-access-btn');

startBtn.addEventListener('click', () => {
    popupModal.style.display = 'flex';
});

allowAccessBtn.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        console.log('Access granted');
        // You can now use the stream object to access the webcam and microphone
        popupModal.style.display = 'none';
    } catch (error) {
        console.error('Error accessing webcam and microphone:', error);
    }
});

denyAccessBtn.addEventListener('click', () => {
    console.log('Access denied');
    popupModal.style.display = 'none';
});
