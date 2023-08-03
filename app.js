let cells = document.querySelectorAll('.row > div')
let board = document.getElementById('board')
let winner = document.querySelector('h2')
let restart = document.querySelector('button')
//HINTS
// IF ELSE STATMENTS ARE FRIENDS
// COMPARISON OPERATORS
// CELL[].TEXTCONTENT
let player1 = 'X'
let player2 = 'O'
var currentplayer = player1






// The loop for placing X's or O's
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked, { once: true })

}



// The 'clicked' event, this is to determine who is clicking
function cellClicked() {
    event.target.textContent = currentplayer;
    if (currentplayer === 'X') {
        currentplayer = 'O'
    } else if (currentplayer === 'O')
        currentplayer = 'X'

    checkWin()
    

}



// This determines the winner of the TIC TAC TOE game using a variety of if statments.
// Hopefully can change this out for loop in a for loop
function checkWin() {
if (player1 == cells[0].textContent && player1 == cells[1].textContent && player1 == cells[2].textContent) {
    winner.innerHTML = (`${player1} YOU WIN!!`)

} else if (player2 == cells[0].textContent && player2 == cells[1].textContent && player2 == cells[2].textContent) {
    winner.innerHTML = (`${player2} YOU WIN!!`) ; 
} else if (player1 == cells[3].textContent && player1 == cells[4].textContent && player1 == cells[5].textContent) {
    winner.innerHTML = (`${player1} YOU WIN!!`)
} else if (player2 == cells[3].textContent && player2 == cells[4].textContent && player2 == cells[5].textContent) {
    winner.innerHTML = (`${player2} YOU WIN!!`)
} else if (player1 == cells[6].textContent && player1 == cells[7].textContent && player1 == cells[8].textContent) {
    winner.innerHTML = (`${player1} YOU WIN!!`)
} else if (player2 == cells[6].textContent && player2 == cells[7].textContent && player2 == cells[8].textContent) {
    winner.innerHTML = (`${player2} YOU WIN!!`)
} else if (player1 == cells[0].textContent && player1 == cells[3].textContent && player1 == cells[6].textContent) {
    winner.innerHTML = (`${player1} YOU WIN!!`)
} else if (player2 == cells[0].textContent && player2 == cells[3].textContent && player2 == cells[6].textContent) {
    winner.innerHTML = (`${player2} YOU WIN!!`)
} else if (player1 == cells[1].textContent && player1 == cells[4].textContent && player1 == cells[7].textContent) {
    winner.innerHTML = (`${player1} YOU WIN!!`)
} else if (player2 == cells[1].textContent && player2 == cells[4].textContent && player2 == cells[7].textContent) {
    winner.innerHTML = (`${player2} YOU WIN!!`)
} else if (player1 == cells[2].textContent && player1 == cells[5].textContent && player1 == cells[8].textContent) {
    winner.innerHTML = (`${player1} YOU WIN!!`)
} else if (player2 == cells[2].textContent && player2 == cells[5].textContent && player2 == cells[8].textContent) {
    winner.innerHTML = (`${player2} YOU WIN!!`)
} else if (player1 == cells[0].textContent && player1 == cells[4].textContent && player1 == cells[8].textContent) {
    winner.innerHTML = (`${player1} YOU WIN!!`)
} else if (player2 == cells[0].textContent && player2 == cells[4].textContent && player2 == cells[8].textContent) {
    winner.innerHTML = (`${player2} YOU WIN!!`)
} else if (player1 == cells[2].textContent && player1 == cells[4].textContent && player1 == cells[6].textContent) {
    winner.innerHTML = (`${player1} YOU WIN!!`)
}else if (player2 == cells[2].textContent && player2 == cells[4].textContent && player2 == cells[6].textContent) {
    winner.innerHTML = (`${player2} YOU WIN!!`)
} else if (player1 == board && player2 == board)
    winner.innerHTML = ('ITS A DRAW')


};

