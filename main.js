window.onload = function () {
    document.getElementById("one_player").onclick = function () {
        show_grid();
        one_player_game();
    }
    document.getElementById("two_player").onclick = function () {
        show_grid();
        two_player_game();
    }
}

var cell = document.getElementsByClassName("cell")
var o_spaces = [];
var x_spaces = [];
var win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7], 
];

// Make the starting game choices and winning messages go away. Show only the game grid.
function show_grid() {
    document.getElementById("start_game").style.display = "none";
    console.log("start_game element is now hidden");
    document.getElementById("grid").style.display = "block";
}
// Check to see if "o" or "x" have won, or if there is a tie game.
function check_winner () {
    //compare current "o" occupied spaces to an array holding all winning combinations
    for ( i = 0; i < win.length; i++ ) {
        
        if ( o_spaces.indexOf(win[i][0]) !== -1 && o_spaces.indexOf(win[i][1]) !== -1 && o_spaces.indexOf(win[i][2]) !== -1 ) {
            console.log("o has won");
            // o wins! move grid to left, show the "o wins" text and pic
            document.getElementById("start_game").style.display = "none";
            document.getElementById("grid").style.margin = "0 100px";
            document.getElementById("grid").style.float = "left";
            document.getElementById("tie_game").style.display = "none";
            document.getElementById("who_wins").style.display = "inline-block";
            return true;
        }
        
        if ( x_spaces.indexOf(win[i][0]) !== -1 && x_spaces.indexOf(win[i][1]) !== -1 && x_spaces.indexOf(win[i][2]) !== -1 ) {
            console.log("x has won");
            // x wins! move grid to left, show the "x wins" text and pic
            document.getElementById("start_game").style.display = "none";
            document.getElementById("grid").style.margin = "0 100px";
            document.getElementById("grid").style.float = "left";
            document.getElementById("tie_game").style.display = "none";
            document.getElementById("who_wins").style.display = "inline-block";
            document.getElementById("declare_winner").style.backgroundImage = "url(img/x.png)";
            return true;
        }
    }

    if ( o_spaces.length + x_spaces.length == 9) {
        console.log("tie game");
        // tie game! move grid to left, show the "its a tie" text and pic
        document.getElementById("start_game").style.display = "none";
        document.getElementById("grid").style.margin = "0 100px";
        document.getElementById("grid").style.float = "left";
        document.getElementById("who_wins").style.display = "inline-block";
        document.getElementById("declare_winner").style.display = "none";
        return true;
    }
    return false;
}

/* 
One player game vs. computer.
Player is always "o" and always goes first.
After "o's" turn, computer will select a random unoccupied square for "x".
Game play continues until a win, or until all squares are used and a tie game.
*/
function one_player_game () {
    // each square on the grid is a cell.  there are 9 cells.
    for (var i = 0; i < 9; i++) {
        // this code block must run each time a cell is clicked.  cell will only be clicked on "o's" turn.
        cell[i].onclick = function () {
            var index = parseInt(this.id);
            // check to make sure cell is empty. if not empty, do nothing!
            if ( this.style.backgroundImage === 'url("img/o.png")' || this.style.backgroundImage === 'url("img/x.png")' ) {

            } else {
                // put the "o" pic in the cell. add the id of the cell (number between 1 and 9) to an array.
                this.style.backgroundImage = 'url("img/o.png")';
                this.style.backgroundSize = "contain";
                o_spaces.push(index);
                console.log("clicked for o");
                // check winner at this point, so that computer does NOT take turn if "o" has won the game
                if ( !check_winner() ) {
                    // stops computer from taking turn if NO available spaces (danger: infinite loop!!)
                    if ( o_spaces.length + x_spaces.length < 9 ) {
                        while (true) {
                        // generate random number between 1 and 9, and select the corresponding cell
                        var random = Math.floor((Math.random() * 9) + 1);
                        var x_cell = document.getElementById(random);
                            // only proceed if the random cell is currently empty
                            if ( x_cell.style.backgroundImage === "" ) {
                                // put the "x" pic in the cell. add the id of the cell (number between 1 and 9) to an array.
                                x_cell.style.backgroundImage = 'url("img/x.png")';
                                x_cell.style.backgroundSize = "contain";
                                x_spaces.push(random);
                                console.log("clicked for x");
                                break;
                            }
                        }
                    }
                }
            }
            // after computer takes turn, check again for a win or tie game.
            check_winner();
        }
    }
}
/*
Two player game; "o" and "x" take turns clicking empty squares.
"o" always goes first, then "x", then "o", etc, until the game is won or tied with no spaces left.
Erroneous clicks can NOT be undone!
*/
function two_player_game () {
    // each square on the grid is a cell.  there are 9 cells.
    for (var i = 0; i < 9; i++) {
        // "o" always goes first.
        var turn = "o"
        // this code block must run each time a cell is clicked.
        cell[i].onclick = function () {
            var index = parseInt(this.id);
            // check to make sure cell is empty. if not empty, do nothing!
            if ( this.style.backgroundImage === 'url("img/o.png")' || this.style.backgroundImage === 'url("img/x.png")' ) {
            } else {
                if (turn === "o") {
                    // put the "o" pic in the cell. add the id of the cell (number between 1 and 9) to an array.
                    this.style.backgroundImage = 'url("img/o.png")';
                    this.style.backgroundSize = "contain";
                    o_spaces.push(index);
                    // switch turns now, so "x" can go.
                    turn = "x";
                    console.log("clicked for o")
                } else {
                    // put the "x" pic in the cell. add the id of the cell (number between 1 and 9) to an array.
                    this.style.backgroundImage = 'url("img/x.png")';
                    this.style.backgroundSize = "contain";
                    x_spaces.push(index);
                    // switch turns now, so "o" can go.
                    turn = "o";
                    console.log("clicked for x")
                }
            }
            // check for a win or tie game.
            check_winner();
        }
    }
}