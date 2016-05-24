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

function show_grid() {
    document.getElementById("start_game").style.display = "none";
    console.log("start_game element is now hidden");
    document.getElementById("grid").style.display = "block";
}

function check_winner () {
    for ( i = 0; i < win.length; i++ ) {
        if ( o_spaces.indexOf(win[i][0]) !== -1 && o_spaces.indexOf(win[i][1]) !== -1 && o_spaces.indexOf(win[i][2]) !== -1 ) {
            // o wins!
            document.getElementById("grid").style.margin = "0 100px";
            document.getElementById("start_game").style.display = "none";
            document.getElementById("who_wins").style.display = "inline-block";
            document.getElementById("tie_game").style.display = "none";
            document.getElementById("grid").style.float = "left";
            return;

        }
        if ( x_spaces.indexOf(win[i][0]) !== -1 && x_spaces.indexOf(win[i][1]) !== -1 && x_spaces.indexOf(win[i][2]) !== -1 ) {
            // x wins!
            document.getElementById("grid").style.margin = "0 100px";
            document.getElementById("start_game").style.display = "none";
            document.getElementById("who_wins").style.display = "inline-block";
            document.getElementById("tie_game").style.display = "none";
            document.getElementById("grid").style.float = "left";
            document.getElementById("declare_winner").style.backgroundImage = "url(img/x.png)";
            return;

        }
        if ( o_spaces.length + x_spaces.length >= 9) {
            document.getElementById("grid").style.margin = "0 100px";
            document.getElementById("start_game").style.display = "none";
            document.getElementById("who_wins").style.display = "inline-block";
            document.getElementById("grid").style.float = "left";
            document.getElementById("declare_winner").style.display = "none";
            return;

        }
    }
}

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

function one_player_game () {

    for (var i = 0; i < 9; i++) {

        cell[i].onclick = function () {

            var index = parseInt(this.id);

            if ( this.style.backgroundImage === 'url("img/o.png")' || this.style.backgroundImage === 'url("img/x.png")' ) {
            } else {

                this.style.backgroundImage = 'url("img/o.png")';
                this.style.backgroundSize = "contain";
                o_spaces.push(index);
                console.log("clicked for o");
                check_winner();
            // x is always "computer"; picks a random # 1-9, if backgroundImage = "", puts x.png, break
                if ( o_spaces.length + x_spaces.length < 9) {
                    while (true) {
                    var random = Math.floor((Math.random() * 9) + 1);
                    var x_cell = document.getElementById(random);

                        if ( x_cell.style.backgroundImage === "" ) {

                            x_cell.style.backgroundImage = 'url("img/x.png")';
                            x_cell.style.backgroundSize = "contain";
                            x_spaces.push(random);
                            console.log("clicked for x");
                            break;
                        }
                    }
                }
            }
            check_winner();
        }
    }
}

function two_player_game () {

    for (var i = 0; i < 9; i++) {
        
        var turn = "o"
        
        cell[i].onclick = function () {

            var index = parseInt(this.id);

            if ( this.style.backgroundImage === 'url("img/o.png")' || this.style.backgroundImage === 'url("img/x.png")' ) {
                

            } else {
                
                if (turn === "o") {
                    this.style.backgroundImage = 'url("img/o.png")';
                    this.style.backgroundSize = "contain";
                    o_spaces.push(index);
                    turn = "x";
                    console.log("clicked for o")
                } else {
                    this.style.backgroundImage = 'url("img/x.png")';
                    this.style.backgroundSize = "contain";
                    x_spaces.push(index);
                    turn = "o";
                    console.log("clicked for x")
                }
            }
            check_winner();
        }
    }
}