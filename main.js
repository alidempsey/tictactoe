window.onload = function () {
    one_player();
    two_player();
}

function one_player () {


}

function two_player () {
    document.getElementById("two_player").onclick = function () {
        document.getElementById("start_game").style.display = "none";
        console.log("start_game element is now hidden");
        document.getElementById("grid").style.display = "block";
    }
    var cell = document.getElementsByClassName("cell")
    for (var i = 0; i < 9; i++) {
        cell[i].onclick = function () {
            this.style.background = "url('img/o.png')";
            this.style.backgroundSize = "contain";
            console.log("clicked a cell");
        }
    }
    
}