document.getElementById('send-btn').addEventListener('click', function() {
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    const message = chatInput.value;
    chatBox.innerHTML += `<p>You: ${message}</p>`;
    chatInput.value = '';
    // Here you would implement the logic to send the message and receive responses
});