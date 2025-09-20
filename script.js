let choices = [];
let currentScreen = 1;

function nextScreen(screenNumber) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  document.getElementById(`screen${screenNumber}`).classList.add('active');
  currentScreen = screenNumber;
}

function choose(type) {
  console.log(`Choice made: ${type}, currentScreen: ${currentScreen}`);
  choices.push(type);

  if (currentScreen < 4) {
    nextScreen(currentScreen + 1);
  } else {
    showResult();
  }
}

function showResult() {
  // Count each choice
  const tally = choices.reduce((acc, choice) => {
    acc[choice] = (acc[choice] || 0) + 1;
    return acc;
  }, {});

  // Find the choice with the highest count
  let maxCount = 0;
  let fate = '';
  for (const [key, value] of Object.entries(tally)) {
    if (value > maxCount) {
      maxCount = value;
      fate = key;
    }
  }

  // Fate messages
  const fateMessages = {
    shadow: "You are bonded with the Shadow Dragon — mysterious, stealthy, and wise beyond measure.",
    flame: "You are bonded with the Flame Dragon — fierce, passionate, and unstoppable.",
    storm: "You are bonded with the Storm Dragon — wild, untamed, and powerful.",
    mind: "You are bonded with the Mind Dragon — clever, strategic, and insightful."
  };

  document.getElementById('resultText').textContent = fateMessages[fate] || "Your destiny is unique and untamed.";

  nextScreen(5);
  choices = [];
}

function restart() {
  choices = [];
  nextScreen(1);
}
