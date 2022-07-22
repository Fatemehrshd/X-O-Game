var cells = document.getElementsByClassName("cell");
var buttons = [[cells[0], cells[1], cells[2]],
               [cells[3], cells[4], cells[5]],
               [cells[6], cells[7], cells[8]]];

var flags = [[null, null, null],
             [null, null, null],
             [null, null, null]];

var ply = "x";
var score_x = document.getElementById("x_score");
var score_o = document.getElementById("o_score");
var score_draw = document.getElementById("draw_score")
var x_counter = 0;
var o_counter = 0;
var draw_counter = 0;
var x_won = 0;
var o_won = 0;
var draw = 0;
var winner = document.getElementById("winner");
var new_game = document.getElementById("new_game");


function clicked(x, y){
    if(document.getElementById('pp').checked != true && document.getElementById('pc').checked != true){
        alert("Select Mode!")
    }
    else{
        if(x_won != 1 && o_won != 1 && draw != 1){
            if(document.getElementById('pp').checked == true){
                if(flags[x][y] == null){
                    if(ply == "x"){
                        flags[x][y] = "x";
                        ply = "o";
                        buttons[x][y].innerHTML = "x";
                        buttons[x][y].classList.add("x");
                    }
            
                    else if(ply == "o"){
                        flags[x][y] = "o";
                        ply = "x";
                        buttons[x][y].innerHTML = "o";
                        buttons[x][y].classList.add("o");
                    }
                    check_game();
                }
            }
            else if(document.getElementById('pc').checked == true){
                if(flags[x][y] == null){
                    flags[x][y] = "x";
                    buttons[x][y].innerHTML = "x";
                    buttons[x][y].classList.add("x");
                    check_game();

                    var flag = false;
                    for(let  i = 0; i < 3; i++){
                        for(let  j = 0; j < 3; j++){
                            if(flags[i][j] == null){
                                flag = true;
                            } 
                        }
                    }
                    if(flag == true){
                        if(x_won != 1){
                            while(flags[x][y] != null){
                                x = Math.floor(Math.random() * 3);
                                y = Math.floor(Math.random() * 3);
                            }
                            flags[x][y] = "o"
                            buttons[x][y].innerHTML = "o";
                            buttons[x][y].classList.add("o");
                            check_game();
                        }
                    }
                }
            }
        }       
    }
}


function check_game(){

    if ((flags[0][0] == "x" && flags[0][1] == "x" && flags[0][2] == "x") ||
        (flags[1][0] == "x" && flags[1][1] == "x" && flags[1][2] == "x") ||
        (flags[2][0] == "x" && flags[2][1] == "x" && flags[2][2] == "x") ||
        (flags[0][0] == "x" && flags[1][1] == "x" && flags[2][2] == "x") ||
        (flags[0][0] == "x" && flags[1][0] == "x" && flags[2][0] == "x") ||
        (flags[0][1] == "x" && flags[1][1] == "x" && flags[2][1] == "x") ||
        (flags[0][2] == "x" && flags[1][2] == "x" && flags[2][2] == "x") ||
        (flags[0][2] == "x" && flags[1][1] == "x" && flags[2][0] == "x")) {
            x_counter++;
            x_score.innerHTML = x_counter;
            x_won = 1;
            // alert("X is the winner!");
    }
    else if ((flags[0][0] == "x" && flags[0][1] == "x" && flags[0][2] == "x") ||
        (flags[1][0] == "o" && flags[1][1] == "o" && flags[1][2] == "o") ||
        (flags[2][0] == "o" && flags[2][1] == "o" && flags[2][2] == "o") ||
        (flags[0][0] == "o" && flags[1][1] == "o" && flags[2][2] == "o") ||
        (flags[0][0] == "o" && flags[1][0] == "o" && flags[2][0] == "o") ||
        (flags[0][1] == "o" && flags[1][1] == "o" && flags[2][1] == "o") ||
        (flags[0][2] == "o" && flags[1][2] == "o" && flags[2][2] == "o") ||
        (flags[0][2] == "o" && flags[1][1] == "o" && flags[2][0] == "o")) {
            o_counter++;
            o_score.innerHTML = o_counter;
            o_won = 1;
            // alert("O is the winner!");
    }
    var cnt = 0;
    for(let  i = 0; i < 3; i++){
        for(let  j = 0; j < 3; j++){
            if(flags[i][j] != null){
                cnt++;
            }
        }
        if(cnt == 9 && x_won != 1 && o_won != 1){
            draw = 1;
            draw_counter++
            score_draw.innerHTML = draw_counter;
        }
    }
    if(x_won == 1 || o_won == 1 || draw == 1){
        show_result();
    }
}


function show_result(){
        if(x_won == 1){
            winner.innerHTML = "X Wone The Game!";
        }
        else if(o_won == 1){
            winner.innerHTML = "O Wone The Game!";
        }
        else if(draw == 1){
            winner.innerHTML = "Draw!";
        }  
}


function game_over(){
    for(let  i = 0; i < 3; i++){
        for(let  j = 0; j < 3; j++){
            buttons[i][j].innerHTML="";
            buttons[i][j].classList.remove("x");   
            buttons[i][j].classList.remove("o");       
            flags[i][j]=null;
            x_won = 0;
            o_won = 0;
            draw = 0;
        }
    }
    winner.innerHTML = "Result";
}