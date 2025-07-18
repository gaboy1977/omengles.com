// Server-side: inside your Socket.io logic
const recentMatches = {}; // { userId: [matchedIds] }

function canPair(a, b) {
  return !(recentMatches[a]?.includes(b));
}

function pairUsers(aSocket, bSocket) {
  const a = aSocket.id;
  const b = bSocket.id;

  if (!canPair(a, b)) return false;

  recentMatches[a] = [...(recentMatches[a] || []), b];
  recentMatches[b] = [...(recentMatches[b] || []), a];

  // Proceed to match and emit 'matchFound'
}
