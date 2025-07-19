const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.post('/initiate-chat', (req, res) => {
    // Simulate a new chat partner
    const chatPartner = {
        name: 'John Doe',
        profilePicture: 'https://via.placeholder.com/50'
    };
    res.json(chatPartner);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
