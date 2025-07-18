<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Omengles | Chat</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>Omengles Video Chat</h1>
    <p>Connecting you with someone new...</p>
  </header>

  <main class="chat-container">
    <video id="localVideo" autoplay muted playsinline></video>
    <video id="remoteVideo" autoplay playsinline></video>

    <div class="chat-actions">
      <button onclick="findNewPartner()">🔄 Next</button>
      <button onclick="disconnectChat()">❌ Disconnect</button>
      <button onclick="reportUser()">🚨 Report</button>
    </div>
  </main>

  <footer>
    <p>Omengles is anonymous, global, and moderated for safety.</p>
  </footer>

  <script src="/socket.io/socket.io.js"></script>
  <script src="chat.js"></script>
</body>
</html>
