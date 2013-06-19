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
            app.login(username);
        }, 500);
    }
});