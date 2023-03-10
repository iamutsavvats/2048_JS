document.addEventListener("DOMContentLoaded", () => {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const resultDisplay = document.getElementById('result')
    const width = 4
    let squares = []

    function createBoard() {
        for(let i = 0; i < width*width; i++) {
            square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            squares.push(square)
        }
    }   
    createBoard()

    function generate() {
        randomNumber = Math.floor(Math.random() * squares.length)
        if(squares[randomNumber].innerHTML == 0) {
            squares[randomNumber].innerHTML = 2;
        }
    }
})