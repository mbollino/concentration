const cards = [
  "#DFFF00",
  "#DE3163",
  "#6495ED",
  "#0000FF",
  "#000000",
  "#00FF00",
  "#800080",
  "#00FFFF",
  "#808080",
  "#FF0000",
];

const cardPickList = [...cards, ...cards];

/*---------- Variables (state) ---------*/

let flippedCard;
let matchedCards;
let win;
let msg;
let isBoardLocked;
let timeLeft;
let timer;

/*----- Cached Element References  -----*/

const gameBoard = document.getElementById("gameboard");
const startGame = document.getElementById("start");
const messageEl = document.querySelector("#msg");
const progress = document.getElementById("progress");
const progressBar = document.getElementById("progressBar");
const playButton = document.getElementById("play");

/*-------------- Functions -------------*/

const init = () => {
  (flippedCard = []),
    (matchedCards = []),
    (isBoardLocked = false),
    (win = false),
    (timeLeft = 60);
    messageEl.classList.add('hidden')
  render();
};

const render = () => {
  const shuffleColors = shuffleCards(cardPickList);
  shuffleColors.forEach((color) => {
    const card = createCard(color);
    gameBoard.appendChild(card);
  });
};

const shuffleCards = (cardPickList) => {
  for (let i = cardPickList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardPickList[i], cardPickList[j]] = [cardPickList[j], cardPickList[i]];
  }
  return cardPickList;
};

const createCard = (color) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.color = color;

  const cardFront = document.createElement("div");
  cardFront.classList.add("card-front");
  cardFront.style.backgroundColor = color;

  const cardBack = document.createElement("div");
  cardBack.classList.add("card-back");

  card.appendChild(cardFront);
  card.appendChild(cardBack);

  card.addEventListener("click", handleClick);

  return card;
};

const handleClick = function () {
  flipCard.call(this);
};

const flipCard = function () {
  if (
    win === true ||
    isBoardLocked ||
    this.classList.contains("matched") ||
    flippedCard.includes(this)
  ) {
    return;
  }

  this.classList.add("is-flipped");
  flippedCard.push(this);

  if (flippedCard.length === 2) {
    isBoardLocked = true;
    checkForMatch();
  }
};

const startTimer = () => {
  timer = setInterval(() => {
    const progressWidth = (timeLeft / 60) * 100;
    progress.style.width = progressWidth + "%";
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timer);
      isBoardLocked = true;
      messageEl.classList.remove("hidden");
      messageEl.textContent = "Time's up! You Lose!";
      gameBoard.innerHTML = "";
    }
  }, 1000);
};

const play = () => {
  startTimer();
  init(); 
};

const checkForMatch = () => {
  const [card1, card2] = flippedCard;

  if (card1.dataset.color === card2.dataset.color) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedCards.push(card1, card2);
    flippedCard = [];
    checkForWinner();
  } else {
    messageEl.classList.remove("hidden");
    messageEl.textContent = "No match. Try again.";
    setTimeout(() => {
      card1.classList.remove("is-flipped");
      card2.classList.remove("is-flipped");
      flippedCard = [];
      isBoardLocked = false;
    }, 1000);
  }
};

const checkForWinner = () => {
  if (matchedCards.length === cardPickList.length) {
    win = true;
    messageEl.classList.remove("hidden");
    messageEl.textContent = "Congratulations!! You won!";
    isBoardLocked = false;
    clearInterval(timer);
    gameBoard.innerHTML = "";
  } else {
    messageEl.classList.remove("hidden");
    messageEl.textContent = "Great match! Keep going!!";
    isBoardLocked = false;
  }
};

playButton.addEventListener("click", play);
