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
        document.getElementById("grid").style.display = "table";
    }
}