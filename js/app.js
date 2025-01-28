/*-------------- Constants -------------*/


/*---------- Variables (state) ---------*/

let flippedCard = [];
let win;
let matchedCards = [];
let back;
let timer;

/*----- Cached Element References  -----*/

const cardsEl = document.querySelectorAll('.memory-cards')
const cards = document.querySelectorAll('.card')
const messageEl = document.querySelectorAll('.msg')
const instEl = document.querySelectorAll('.instructions')
const startBut = document.getElementById('start')

/*-------------- Functions -------------*/

const init = () => {
    flippedCard = [],
    back = 
    win = false,
    matchedCards = []
    
} 


const shuffleCards = () => {
    const cardArray = Array.from(cards)
    for(let i=cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [cards[i], cards[j] = cards[j], cards[i] ]
    }
    shuffleCards(cardArray)

    cardArray.forEach(card => {
        cardContainer.appendChild(card);
        card.style.display = "visible"
    })
}


const flipCard = () => {
    if(flippedCard.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCard.push(this);

        if(flippedCard.length === 2) {
            checkForMatch();
        }
    }
}

const checkForMatch = () => {
    const card1 = firstFlip[0];
    const card2 = firstFlip[2];

    if(card1.data-value === card2.data-value) {
        card1.classList.add["matched"];
        card2.classList.add["matched"];

    }
}





init()

/*----------- Event Listeners ----------*/

startBut.addEventListener("click",(() => {
    const startGame = () => {
        instEl.classList.display = "hidden"
        } 
    startGame()
    shuffleCards()
}))



// .active, .instructions:hover {
//     background-color: rgb(255,255,0)
//   }
  
//   .content {
//     padding: 0 18px;
//     display: none;
//     overflow: hidden;
//     font-size: 15px;
//     line-height: 10pt;
//     float:left;
//     vertical-align: bottom;
//   }

/* <section class="message">
<div class="msg" id="no-match">No match, select again!</div>
<div class="msg" id="match">Great job! Select again!</div>
<div class="msg" id="win">Congratulations! You win!</div>
<div class="msg" id="lose">Too bad! You lose!</div>
</section> */

// .message {
//     text-align: center;
//     visibility: hidden;
//   }
  
//   #no-match {
//     font-size: 25px;
//     color: rgb(255,255,0)
//   }
  
//   #match {
//     font-size: 25px;
//     color: rgb(100, 214, 87);
//   }
  
//   #win {
//     font-size: 40px;
//     color:rgb(43, 223, 226)
//   }
  
//   #lose {
//     font-size: 30px;
//     color: rgb(255,0,0)
//   }
  