async function startChat() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    console.log("Access granted to camera and mic");
    alert("Camera and microphone access granted. Connecting...");
    // You can replace this with redirect to /chat or match logic later
  } catch (error) {
    console.error("Camera/mic access denied:", error);
    alert("Please allow access to camera and microphone to start chatting.");
  }
}
