window.onload = function () {
    one_player_game();
    two_player_game();
}

function one_player_game () {


}

function two_player_game () {

    document.getElementById("two_player").onclick = function () {

        document.getElementById("start_game").style.display = "none";
        console.log("start_game element is now hidden");
        document.getElementById("grid").style.display = "block";

    }

    var cell = document.getElementsByClassName("cell")
    var o_spaces = [];
    var x_spaces = [];
    
    for (var i = 0; i < 9; i++) {
        
        var turn = "o"
        
        cell[i].onclick = function () {

            var index = parseInt(this.id);

            if ( this.style.backgroundImage === 'url("img/o.png")' || this.style.backgroundImage === 'url("img/x.png")' ) {
                this.style.background = "none";

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
        function check_winner () {
            for ( i = 0; i < win.length; i++ ) {
                console.log('check for winner');
                console.log(o_spaces);
                console.log(x_spaces);
                if ( win[i][0] in o_spaces.sort() && win[i][1] in o_spaces.sort() && win[i][2] in o_spaces.sort() ) {
                    console.log('o wins');
                    break;
                }
                if ( win[i][0] in x_spaces.sort() && win[i][1] in x_spaces.sort() && win[i][2] in x_spaces.sort() ) {
                    console.log('x wins');
                    break;
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
        

        // for (var i = 0; i < win.length; i++) {
        //     for (var j = 0; j < o_spaces.length; j++) {
        //         if ( o_spaces[j].sort() == win[i][j].sort() ) {
        //             // o wins!
        //             document.getElementById("grid").style.display = "none";
        //             document.getElementById("start_game").style.display = "none";
        //             document.getElementById("who_wins").style.display = "block";

        //         } else if ( x_spaces[j].sort() == win[i][j].sort() ) {
        //             // x wins!
        //             document.getElementById("grid").style.display = "none";
        //             document.getElementById("start_game").style.display = "none";
        //             document.getElementById("who_wins").style.display = "block";
        //             document.getElementById("who_wins").style.backgroundImage = "url(img/x.png)";

        //         } else {}
        //     }
        // }

    }

}