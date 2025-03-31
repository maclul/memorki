document.addEventListener("DOMContentLoaded", () => {
  const icons = [
    "🍎",
    "🍎",
    "🍌",
    "🍌",
    "🍇",
    "🍇",
    "🍉",
    "🍉",
    "🍒",
    "🍒",
    "🍍",
    "🍍",
    "🥝",
    "🥝",
    "🍑",
    "🍑",
  ];

  for (let i = icons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [icons[i], icons[j]] = [icons[j], icons[i]];
  }

  const buttons = document.querySelectorAll("button");
  let firstChoice = null;
  let secondChoice = null;
  let lockBoard = false;
  let matchedPairs = 0;

  buttons.forEach((button, index) => {
    button.dataset.icon = icons[index];
    button.addEventListener("click", () => {
      if (lockBoard || button.textContent !== "") return;

      button.textContent = button.dataset.icon;

      if (!firstChoice) {
        firstChoice = button;
      } else {
        secondChoice = button;
        lockBoard = true;

        if (firstChoice.dataset.icon === secondChoice.dataset.icon) {
          firstChoice.style.visibility = "hidden";
          secondChoice.style.visibility = "hidden";
          firstChoice = null;
          secondChoice = null;
          lockBoard = false;
          matchedPairs++;
          if (matchedPairs === 8) {
            alert("you win!!!");
          }
        } else {
          setTimeout(() => {
            firstChoice.textContent = "";
            secondChoice.textContent = "";
            firstChoice = null;
            secondChoice = null;
            lockBoard = false;
          }, 700);
        }
      }
    });
  });
});
