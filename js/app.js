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
    // {
    //     name: "Pet7",
    //     src: "./assets/Pet7.jpg",
    //     // id: [7, 22],
    //     alt: "alt"
    // },
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
// //     backgrourgb(255,255,0)
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
// //  rgb(255,255,0)
// //   }
  
// //   #match {
// //     font-size: 25px;
// //  rgb(100, 214, 87);
// //   }
  
// //   #win {
// //     font-size: 40px;
// //     color:rgb(43, 223, 226)
// //   }
  
// //   #lose {
// //     font-size: 30px;
// //  rgb(255,0,0)
// //   }

/*-------------- Constants -------------*/

// const cards = [
//     { name: "Pet1", src: "./assets/Pet1.jpg", alt: "alt" },
//     { name: "Pet2", src: "./assets/Pet2.jpg", alt: "alt" },
//     { name: "Pet3", src: "./assets/Pet3.jpg", alt: "alt" },
//     { name: "Pet4", src: "./assets/Pet4.jpg", alt: "alt" },
//     { name: "Pet5", src: "./assets/Pet5.jpg", alt: "alt" },
//     { name: "Pet6", src: "./assets/Pet6.jpg", alt: "alt" },
//     { name: "Pet7", src: "./assets/Pet7.jpg", alt: "alt" },
//     { name: "Pet8", src: "./assets/Pet8.jpg", alt: "alt" },
//     { name: "Pet9", src: "./assets/Pet9.jpg", alt: "alt" },
//     { name: "Pet10", src: "./assets/Pet10.jpg", alt: "alt" },
//     { name: "Pet11", src: "./assets/Pet11.jpg", alt: "alt" },
//     { name: "Pet12", src: "./assets/Pet12.jpg", alt: "alt" },
//     { name: "Pet13", src: "./assets/Pet13.jpg", alt: "alt" },
//     { name: "Pet14", src: "./assets/Pet14.jpg", alt: "alt" },
//     { name: "Pet15", src: "./assets/Pet15.jpg", alt: "alt" }  
// ];

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
    "#FF0000"
];

const cardPickList = [...cards, ...cards];
// const duration = 120

// let cardCount = cardPickList.length;
// console.log(cardPickList)

/*---------- Variables (state) ---------*/

let flippedCard 
let matchedCards
let win
let msg
let isBoardLocked
let timeLeft = 1600

/*----- Cached Element References  -----*/

const gameBoard = document.getElementById('gameboard')


const startGame = document.getElementById('start')
const messageEl = document.querySelector('#msg');
const restartGame = document.getElementById('restart');
const instEl = document.querySelectorAll('.instructions')
const progress = document.getElementById("progress")
const progressBar = document.getElementById("progressBar")
 console.log(restartGame)

/*-------------- Functions -------------*/

// Initialize the game state
const init = () => {
    flippedCard = [],
    matchedCards = [],
    isBoardLocked = false,
    win = false,
    // clearInterval(timer)
    render()
};

const render = () => {
    const shuffleColors = shuffleCards(cardPickList)
     shuffleColors.forEach(color => {
         const card = createCard(color)
         gameBoard.appendChild(card)
         // console.log(card)
     })
}


// Shuffle cards randomly
const shuffleCards = (cardPickList) => {
    for (let i = cardPickList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardPickList[i], cardPickList[j]] = [cardPickList[j], cardPickList[i]];
    }
    return cardPickList
}


const createCard = (color) => {
    const card = document.createElement("div")
    card.classList.add("card")
    card.dataset.color = color
    // console.log(image)

    const cardFront = document.createElement("div")
    cardFront.classList.add("card-front")
    cardFront.style.backgroundColor = color

    // console.log(cardFront)
    // console.log(cardFront.style.backgroundColor)
    
        
    const cardBack = document.createElement("div")
    // cardBack.src = image
    
    // cardBack.src = `${image}`
    // console.log(image)
    cardBack.classList.add("card-back")
    // cardBack.style.backgroundColor = color
    // console.log(cardBack)
    card.appendChild(cardFront)
    card.appendChild(cardBack)
    
    // const flipAllCards = () => {
    //     const cardEls = document.querySelectorAll('.card')
    //     cardEls.forEach(card => card.classList.add('is-flipped'))
    // }
    // for (let i = 0; i < cardEls.length; i++) {
    // cardEls[i].addEventListener("click", flipCard) 
    // }


    // startGame.addEventListener.apply('click', () => {
    //     flipAllCards()
    // })
    card.addEventListener("click", handleClick)

    
    
    return card
}
// 
    //     cardBack.forEach((back, index) => {
            
        // })}
        // buildFront()
//         back.style.visibility = "hidden"        
//         setTimeout(() => {
//             front.style.transform = "rotateY(180deg)"
//         }, 10000)
//         setTimeout(() => {
//             back.style.visibility = "visible"
//         }, 10000)
// })})}

// Flip a card when clicked
const handleClick = function () {
    flipCard.call(this);
};

const flipCard = function () {
    if (win === true || isBoardLocked || this.classList.contains("matched") || flippedCard.includes(this)) {
        return
    } 
    
    this.classList.add('is-flipped');
    flippedCard.push(this);

    // if (flippedCard.length < 2) {
        const timer = setInterval(() => {
          const progressWidth = (timeLeft / 1600) * 100
            progress.style.width = progressWidth + "%"
            timeLeft--
            if (timeLeft < 0) {
                clearInterval(timer)
                isBoardLocked = true
                messageEl.classList.remove('hidden')
                messageEl.textContent = "Time's up! You Lose!"
                restartGame.classList.remove('hidden')
            }
            }, 1000)
    
    // console.log(flippedCard)
    
    if (flippedCard.length === 2) {
        // clearInterval(timer)
        isBoardLocked = true
        checkForMatch()
    }
}


// Check if two flipped cards match
const checkForMatch = () => {
    const [card1, card2] = flippedCard;
 
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add("matched")
        card2.classList.add("matched")
        matchedCards.push(card1, card2);
        flippedCard = [];
        checkForWinner()
    } else {
        messageEl.classList.remove('hidden')
        messageEl.textContent = "No match. Try again."
        setTimeout(() => {
            card1.classList.remove('is-flipped');
            card2.classList.remove('is-flipped');
            flippedCard = [];
            isBoardLocked = false
        }, 1000);
    }

    // checkForWinner();
};

// Check if all cards have been matched
const checkForWinner = () => {
    if (matchedCards.length === cardPickList.length) {
        win = true
        messageEl.classList.remove('hidden')
        messageEl.textContent = "Congratulations!! You won!"
        isBoardLocked = false
        clearInterval(timer)
        restartGame.classList.remove('hidden')
    } else {
        messageEl.classList.remove('hidden')
        messageEl.textContent = "Great match! Keep going!!"
        isBoardLocked = false
    }
};

// const resetGame = () => {
//     flippedCard = [],
//     matchedCards= [],
//     win = false;
//     render()
// }
// Handle card click event

// Attach event listeners
restartGame.addEventListener("click", init);

// Attach click events to each card

init();