// Calculateur de points
function calculateWinner() {
  const a = parseInt(document.getElementById("scoreA")?.value) || 0;
  const b = parseInt(document.getElementById("scoreB")?.value) || 0;
  const result = document.getElementById("result");
  if (!result) return;

  if (a === b) result.textContent = "Égalité parfaite !";
  else if (a > b) result.textContent = "🏆 Joueur A gagne !";
  else result.textContent = "🏆 Joueur B gagne !";
}

// Simulation IA (version simple sans serveur)
async function askAI() {
  const input = document.getElementById("userInput").value.trim();
  const output = document.getElementById("aiResponse");
  if (!input) return;

  output.textContent = "⏳ Le coach réfléchit...";
  setTimeout(() => {
    output.textContent = "🏓 " + getRandomAdvice(input);
  }, 1500);
}

function getRandomAdvice(question) {
  const tips = [
    "Travaille ton service court et précis.",
    "Garde ton regard sur la balle jusqu’à l’impact.",
    "Utilise ton corps, pas seulement ton bras.",
    "Change ton rythme pour surprendre ton adversaire.",
    "Sois patient et place bien la balle avant d’attaquer.",
  ];
  return tips[Math.floor(Math.random() * tips.length)];
}
