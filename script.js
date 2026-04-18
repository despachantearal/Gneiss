const facts = [
  "Gneiss is a high-grade metamorphic rock.",
  "It often shows distinct banding patterns.",
  "Gneiss forms under high temperature and pressure.",
  "It commonly originates from granite or sedimentary rock.",
  "Gneiss is widely used as a construction material."
];

function showFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = facts[random];
}

function analyzeRock() {
  alert("🪨 Analyzing layered structure of gneiss...");
}
