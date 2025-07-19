// Get the start button and chat container elements
const startBtn = document.querySelector('.start-btn');
const chatContainer = document.querySelector('.chat-container');

// Add event listener to the start button
startBtn.addEventListener('click', () => {
    // Show the chat container
    chatContainer.style.display = 'block';
    // Hide the start button
    startBtn.style.display = 'none';
    // Initiate a new chat session
    initiateNewChatSession();
});

// Function to initiate a new chat session
function initiateNewChatSession() {
    // Send a request to the server to initiate a new chat session
    fetch('/initiate-chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Update the chat interface with the new chat partner's information
        updateChatInterface(data);
    })
    .catch(error => {
        console.error(error);
    });
}

// Function to update the chat interface
function updateChatInterface(data) {
    // Update the chat partner's name and profile picture
    document.querySelector('.chat-partner-name').textContent = data.name;
    document.querySelector('.chat-partner-profile-picture').src = data.profilePicture;
}
