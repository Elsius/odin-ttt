let board = document.getElementById('boardTTT')

function clearBoard(){
    board.innerHTML = ''
}
function newBoard(){
    //create board elements, looped 9x for each button
    for (i = 0; i < 9; i++){
        let card = document.createElement('div');
        card.textContent = 'x'
        card.setAttribute('class','tttCard')
        board.appendChild(card)
    }
}