function EventManager() {
    var T = this;

    this.init = function() {
        _.extend(T, Backbone.Events);

        T.on("player_move", function() {
            app.canvas.ctx.player.clearRect(0, 0, app.canvas.player[0].width, app.canvas.player[0].height);

            app.canvas.ctx.player.fillStyle = '#F00';
            app.canvas.ctx.player.fillRect(
                app.player.x-app.player.w/2,
                app.player.y-app.player.h/2, 
                app.player.w,
                app.player.h
            );

            var head_x = 0, head_y = 0,
                size_x = 5, size_y = 5;
            switch(app.player.direction) {
                case app.directions.left:
                    head_x = -1; head_y = 0; break;
                case app.directions.up:
                    head_x = 0; head_y = -1; break;
                case app.directions.right:
                    head_x = 1; head_y = 0; break;
                case app.directions.down:
                    head_x = 0; head_y = 1; break;
            }

            app.canvas.ctx.player.fillStyle = '#00F';
            app.canvas.ctx.player.fillRect(
                app.player.x - size_x/2 + (app.player.w/2) * head_x,
                app.player.y - size_y/2 + (app.player.h/2) * head_y, 
                size_x,
                size_y
            );

        });

        app.canvas.wrap[0].addEventListener("keydown", function(e) {
            var key = e.keyCode;
            switch(key) {
                case 37+app.directions.left:
                    app.player.rotate.left(); break;

                case 37+app.directions.up:
                    app.player.rotate.up(); break;

                case 37+app.directions.right:
                    app.player.rotate.right(); break;

                case 37+app.directions.down:
                    app.player.rotate.down(); break;

                case app.directions.W:
                    app.player.move.up(); break; 

                case app.directions.A:
                    app.player.move.left(); break;

                case app.directions.S:
                    app.player.move.down(); break;

                case app.directions.D:
                    app.player.move.right(); break;
            }
            return false;
        }, true);
    }
}