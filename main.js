
// create player objects
const playerFactory = ()=>{
    
}

// create game board
const gameBoard = (()=>{
    'use strict';

    const game_container = document.getElementById("game_container");
    let squares = [];
    for (let i = 0; i < 9; i++){
        
        const square = document.createElement('div');
        square.style.float = "left";
        if (i%3 == 0){
            square.style.clear = "left";
        }
        square.style.height = "98px";
        square.style.width = "98px";
        square.classList.add("box");
        squares.push(square);
        game_container.appendChild(square);
    };
    return {squares};
})();

const gameLogic = (()=>{

    'use strict';
    const squares = gameBoard.squares;
    const game_container = document.querySelector("#game_container");
    const modal = document.getElementById("modal");
    const modal_restart = document.getElementById("modal_restart");
    const reset = document.getElementById("reset");
  
    let game_state = "play";

    function check_winner(array, x_or_o, player){
        
        let result = array.every(e=> e.innerHTML != "");
        
        for (let i = 0; i < 7; i+=3){
            if (array[i].innerHTML == x_or_o && array[i+1].innerHTML == x_or_o && array[i+2].innerHTML == x_or_o){
                modal.innerHTML = player + " WINS!";
                game_container.style.pointerEvents = "none";
                modal_restart.classList.add("show");
                array[i].classList.add("winner");
                array[i+1].classList.add("winner");
                array[i+2].classList.add("winner");
                game_state = "end";
            }
        }
        for (let i = 0; i < 3; i++){
            if (array[i].innerHTML == x_or_o && array[i+3].innerHTML == x_or_o && array[i+6].innerHTML == x_or_o){
                modal.innerHTML = player + " WINS!";
                game_container.style.pointerEvents = "none";
                modal_restart.classList.add("show");
                array[i].classList.add("winner");
                array[i+3].classList.add("winner");
                array[i+6].classList.add("winner");
                game_state = "end";
            }
        }
        if (array[0].innerHTML == x_or_o && array[4].innerHTML == x_or_o && array[8].innerHTML == x_or_o){
            modal.innerHTML = player + " WINS!";
            game_container.style.pointerEvents = "none";
            modal_restart.classList.add("show");
            array[0].classList.add("winner");
            array[4].classList.add("winner");
            array[8].classList.add("winner");
            game_state = "end";
        }
        else if (array[2].innerHTML == x_or_o && array[4].innerHTML == x_or_o && array[6].innerHTML == x_or_o){
            modal.innerHTML = player + " WINS!";
            game_container.style.pointerEvents = "none";
            modal_restart.classList.add("show");
            array[2].classList.add("winner");
            array[4].classList.add("winner");
            array[6].classList.add("winner");
            game_state = "end";
        }
        else if (result == true && game_state == "play"){
            modal.innerHTML = "IT'S A TIE!"
            game_container.style.pointerEvents = "none";
            modal_restart.classList.add("show");
        }
    }
    
    let j = 0;
    for (let i = 0; i < squares.length; i++){
        
        squares[i].addEventListener("click",()=>{
            
            if (squares[i].innerHTML == ""){
                if (j%2 ==0){
                    squares[i].innerHTML = "X";
                }
                else{
                    squares[i].innerHTML = "O";
                }
                j++;
            }
            //on each click, run a game logic function that sees if game has been won yet
            check_winner(squares, "X", "PLAYER ONE");
            check_winner(squares, "O", "PLAYER TWO");
        });
    }

    reset.addEventListener("click", ()=>{
        for (let i = 0; i < 9; i++){
            squares[i].innerHTML = "";
            squares[i].classList.remove("winner");
        }
        j = 0;
        modal.innerHTML = "";
        game_container.style.pointerEvents = "auto";
        modal_restart.classList.remove("show");
        game_state = "play";
    })
})();

