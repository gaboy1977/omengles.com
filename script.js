async function startChat() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    document.getElementById('localVideo').srcObject = stream;
    console.log("Access granted to webcam and mic");
  } catch (err) {
    console.error("Access denied:", err);
    alert("Please enable your camera and microphone to start chatting.");
  }
}
