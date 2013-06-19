$("#btn_login").click(function() {
    var logging = function(action) {
        if (action == "hide") {
            $("#btn_login").css("margin-right", "16px");
            $("#logging").hide();
        } else {
            $("#btn_login").css("margin-right", "0");
            $("#logging").show();
        }
    };

    var username = $("#user_login").val();
    if (username != "") {
        logging("show");

        window.setTimeout(function(){ // todo: App.login(username, callback);  
            logging("hide");
            $("#login_screen").hide();
            $("#game_screen").show();
        }, 500);
        map_init();
    }
});

function press(e){
    keyCode=e.keyCode;
    switch(keyCode){
    case 37: if (position_x>0) position_x-=10;break;
    case 38: if (position_y>0) position_y-=10;break;
    case 39: if (position_x<890) position_x+=10;break;
    case 40: if (position_y<540) position_y+=10;break;
    }
    return false;
}

var canvas_map=document.getElementById("map");
//document.getElementById("map_container").addEventListener("keydown", press, true);
canvas_map.addEventListener("keydown", press, true);
var ctx_map=canvas_map.getContext("2d");

var position_x = 445;
var position_y = 270;

function map_init(){
    //getting list of objects from server, players' position on map
    //paint this objects on map
    ctx_map.fillStyle="#ff0000";
    ctx_map.fillRect(position_x,position_y,10,10);

    setInterval(function(){     
        
        ctx_map.fillStyle = '#FFF';
        ctx_map.fillRect(0, 0, canvas_map.width, canvas_map.height);
        // т.е. на каждом "тике интервала" надо снова все заливать ,tk
        drow_palyer();
    }, 5)
}

function drow_player(x,y,derection){
    ctx_map.fillStyle = '#F00';
    ctx_map.fillRect(position_x, position_y, 10, 10);
}