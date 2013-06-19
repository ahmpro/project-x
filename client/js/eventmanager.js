function EventManager() {
    var T = this;

    this.init = function() {
        _.extend(T, Backbone.Events);

        T.on("player_move", function() {
            app.canvas.ctx.player.fillStyle = '#FFF';
            app.canvas.ctx.player.fillRect(0, 0, app.canvas.player[0].width, app.canvas.player[0].height);

            app.canvas.ctx.player.fillStyle = '#F00';
            app.canvas.ctx.player.fillRect(
                app.player.x-app.player.w/2,
                app.player.y-app.player.h/2, 
                app.player.w,
                app.player.h
            );
        });

        app.canvas.wrap[0].addEventListener("keydown", function(e) {
            var key = e.keyCode;
            switch(key) {
                case 37: app.player.move.left(); break;
                case 38: app.player.move.up(); break;
                case 39: app.player.move.right(); break;
                case 40: app.player.move.down(); break;
            }
            return false;
        }, true);
    }
}