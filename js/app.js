// /*-------------- Constants -------------*/

// const cards = [
//     {
//         name: "Pet1",
//         src: "./assets/Pet1.jpg",
//         // id: [1,16],
//         alt: "alt"
//     },
//     {
//         name: "Pet2",
//         src: "./assets/Pet2.jpg",
//         // id: [2, 17],
//         alt: "alt"
//     },
//     {
//         name: "Pet3",
//         src: "./assets/Pet3.jpg",
//         // id: [3, 18],
//         alt: "alt"
//     },
//     {
//         name: "Pet4",
//         src: "./assets/Pet4.jpg",
//         // id: [4, 19],
//         alt: "alt"
//     },
//     {
//         name: "Pet5",
//         src: "./assets/Pet5.jpg",
//         // id: [5, 20],
//         alt: "alt"
//     },
//     {
//         name: "Pet6",
//         src: "./assets/Pet6.jpg",
//         // id: [6, 21],
//         alt: "alt"
//     },
//     {
//         name: "Pet7",
//         src: "./assets/Pet7.jpg",
//         // id: [7, 22],
//         alt: "alt"
//     },
//     {
//         name: "Pet8",
//         src: "./assets/Pet8.jpg",
//         // id: [8, 23],
//         alt: "alt"
//     },
//     {
//         name: "Pet9",
//         src: "./assets/Pet9.jpg",
//         // id: [9, 24],
//         alt: "alt"
//     },
//     {
//         name: "Pet10",
//         src: "./assets/Pet10.jpg",
//         // id: [10, 25],
//         alt: "alt"
//     },
//     {
//         name: "Pet11",
//         src: "./assets/Pet11.jpg",
//         // id: [11, 26],
//         alt: "alt"
//     },
//     {
//         name: "Pet12",
//         src: "./assets/Pet12.jpg",
//         // id: [12, 27],
//         alt: "alt"
//     },
//     {
//         name: "Pet13",
//         src: "./assets/Pet13.jpg",
//         // id: [13, 28],
//         alt: "alt"
//     },
//     {
//         name: "Pet14",
//         src: "./assets/Pet14.jpg",
//         // id: [14, 29],
//         alt: "alt"
//     },
//     {
//         name: "Pet15",
//         src: "./assets/Pet15.jpg",
//         alt: "alt"
//     }  
// ]

// const cardPickList = [...cards, ...cards]
// let cardCount = cardPickList.length



// /*---------- Variables (state) ---------*/

// let flippedCard = [];
// let win;
// let matchedCards = [];
// // let noMatch = []

// /*----- Cached Element References  -----*/

// const cardEls = document.querySelectorAll('.card')
// const frontEls = document.querySelectorAll('.front')
// const messageEl = document.querySelectorAll('.msg')
// const instEl = document.querySelectorAll('.instructions')
// const startBut = document.getElementById('start')
// const timeLeft = document.getElementById("timer-countdown-inner-blue")
// const countdownBar = document.getElementById("timer.countdown")



// /*-------------- Functions -------------*/

// const init = () => {
//     flippedCard = [],
//     win = false,
//     matchedCards = []
//     // noMatch = []
    
// } 
// // init()

// const handleClick = () => {
//     shuffleCards()
//     flipCard()

// }
// const buildFront = (cardElement) => {
//     frontEls.forEach((card => {
//         card.style.backgroundImage = `url(${cardElement.src})`
//         // card.classList.toggle = "is-flipped"   
//     console.log(card)
//     }))

// }

// const shuffleCards = () => {
//     // for(let i = 0; i < cardCount; i++) {
//         for(let i = cardPickList.length-1; i > 0; i--) {
//         const randomIndex = Math.floor(Math.random() * (i + 1))
//         [cardPickList[i], cardPickList[randomIndex]] = [cardPickList[randomIndex], cardPickList[i]]
//         // const card = cardPickList[randomIndex]
//         //     const front = buildFront(card)
//         //     cardPickList.splice(randomIndex, 1) //remove image from list to prevent duplicates
//         }
//     // }
 

//         // setTimeout(() => {
//     // }, 8000)

//     }



// const flipCard = () => {
//     if(flippedCard.length < 2 && !this.classList.contains('is-flipped')) {
//         this.classList.add('is-flipped');
//         flippedCard.push(this);
//         runTimer()

//         if(flippedCard.length === 2) {
//             checkForMatch();
//             clearInterval(timer)
//         }
//     }
// }

// const checkForMatch = () => {
//     const card1 = flippedCard[0];
//     const card2 = flippedCard[1];

//     if(card1.name === card2.name) {
//         matchedCards.push(card1,card2);

//         checkForWinner()
//     }
//     if(card1.name !== card2.name) {
//         card1.push(noMatch);
//         card2.push(noMatch);
//     }
//  }
 
// const runTimer = () => {
//     var startTimer = setInterval(barCount,5);
//     const barCount = () => {
//         if(timeLeft.clientWidth < countdownBar.clientWidth) {
//             timeLeft.style.width = timeLeft.clientWidth + 1 + 'px'
//         } else {
//             timeLeft.style.width = countdownBar.clientWidth + 'px'
//             clearInterval(startTimer)
//             win = false
//         }
//     }
// }

// // const checkForWinner = () => {}





// /*----------- Event Listeners ----------*/

// startBut.addEventListener("click", shuffleCards)

// for(let i = 0; i < cardEls.length; i++) {
//     cardEls[i].addEventListener("click", handleClick)
// }
          

   
    



// // .active, .instructions:hover {
// //     background-color: rgb(255,255,0)
// //   }
  
// //   .content {
// //     padding: 0 18px;
// //     display: none;
// //     overflow: hidden;
// //     font-size: 15px;
// //     line-height: 10pt;
// //     float:left;
// //     vertical-align: bottom;
// //   }

// /* <section class="message">
// <div class="msg" id="no-match">No match, select again!</div>
// <div class="msg" id="match">Great job! Select again!</div>
// <div class="msg" id="win">Congratulations! You win!</div>
// <div class="msg" id="lose">Too bad! You lose!</div>
// </section> */

// // .message {
// //     text-align: center;
// //     visibility: hidden;
// //   }
  
// //   #no-match {
// //     font-size: 25px;
// //     color: rgb(255,255,0)
// //   }
  
// //   #match {
// //     font-size: 25px;
// //     color: rgb(100, 214, 87);
// //   }
  
// //   #win {
// //     font-size: 40px;
// //     color:rgb(43, 223, 226)
// //   }
  
// //   #lose {
// //     font-size: 30px;
// //     color: rgb(255,0,0)
// //   }

/*-------------- Constants -------------*/

const cards = [
    { name: "Pet1", src: "./assets/Pet1.jpg", alt: "alt" },
    { name: "Pet2", src: "./assets/Pet2.jpg", alt: "alt" },
    { name: "Pet3", src: "./assets/Pet3.jpg", alt: "alt" },
    { name: "Pet4", src: "./assets/Pet4.jpg", alt: "alt" },
    { name: "Pet5", src: "./assets/Pet5.jpg", alt: "alt" },
    { name: "Pet6", src: "./assets/Pet6.jpg", alt: "alt" },
    { name: "Pet7", src: "./assets/Pet7.jpg", alt: "alt" },
    { name: "Pet8", src: "./assets/Pet8.jpg", alt: "alt" },
    { name: "Pet9", src: "./assets/Pet9.jpg", alt: "alt" },
    { name: "Pet10", src: "./assets/Pet10.jpg", alt: "alt" },
    { name: "Pet11", src: "./assets/Pet11.jpg", alt: "alt" },
    { name: "Pet12", src: "./assets/Pet12.jpg", alt: "alt" },
    { name: "Pet13", src: "./assets/Pet13.jpg", alt: "alt" },
    { name: "Pet14", src: "./assets/Pet14.jpg", alt: "alt" },
    { name: "Pet15", src: "./assets/Pet15.jpg", alt: "alt" }  
];

const cardPickList = [...cards, ...cards];
let cardCount = cardPickList.length;

/*---------- Variables (state) ---------*/

let flippedCard = [];
let win = false;
let matchedCards = [];

/*----- Cached Element References  -----*/

const cardEls = document.querySelectorAll('.card');
const frontEls = document.querySelectorAll('.front')
const messageEl = document.querySelectorAll('.msg');
const startBut = document.getElementById('start');
const instEl = document.querySelectorAll('.instructions')
const timeLeft = document.getElementById("timer-countdown-inner-blue")
const countdownBar = document.getElementById("timer-countdown")

/*-------------- Functions -------------*/

// Initialize the game state
const init = () => {
    flippedCard = [];
    win = false;
    matchedCards = [];
    buildFront()
};


// Shuffle cards randomly
const shuffleCards = () => {
    for (let i = cardPickList.length - 1; i > 0; i--) {
        console.log(cardPickList)
        const j = Math.floor(Math.random() * (i + 1));
        [cardPickList[i], cardPickList[j]] = [cardPickList[j], cardPickList[i]];
    }
};

const buildFront = () => {
        frontEls.forEach((card, index) => {
            card.style.backgroundImage = `url(${cardPickList[index].src})`
            // card.classList.toggle = "is-flipped"   
        console.log(card)
        })
    }

// Flip a card when clicked
const flipCard = function () {
    if (flippedCard.length < 2 && !this.classList.contains('is-flipped')) {
        this.classList.add('is-flipped');
        flippedCard.push(this);

        if (flippedCard.length === 2) {
            setTimeout(checkForMatch, 8000);
        }
    }
};

// Check if two flipped cards match
const checkForMatch = () => {
    const [card1, card2] = flippedCard;

    if (card1.dataset.name === card2.dataset.name) {
        matchedCards.push(card1, card2);
        flippedCard = [];
    } else {
        setTimeout(() => {
            card1.classList.remove('is-flipped');
            card2.classList.remove('is-flipped');
            flippedCard = [];
        }, 1000);
    }

    checkForWinner();
};

// Check if all cards have been matched
const checkForWinner = () => {
    if (matchedCards.length === cardCount) {
        win = true;
        alert("Congratulations! You win!");
    }
};

// Handle card click event
const handleClick = function () {
    flipCard.call(this);
};

// Attach event listeners
startBut.addEventListener("click", shuffleCards);

// Attach click events to each card
for (let i = 0; i < cardEls.length; i++) {
    cardEls[i].addEventListener("click", handleClick);
}
  
init();