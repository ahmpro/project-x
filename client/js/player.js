function Player(username) {
    var T = this;

    this.username = username;

    this.x = 300;
    this.y = 300;

    this.w = 11;
    this.h = 11;

    this.speed = 10;
    this.direction = 0;

    this.move = {
        up: function() {
            if (app.map.player.check_move.up(T.speed)) {
                this.y -= T.speed;
                app.events.trigger("player_move");
            }
        },
        down: function() {
            if (app.map.player.check_move.down(T.speed)) {
                this.y += T.speed;
                app.events.trigger("player_move");
            }
        },
        left: function() {
            if (app.map.player.check_move.left(T.speed)) {
                this.x -= T.speed;
                app.events.trigger("player_move");
            }
        },
        right: function() {
            if (app.map.player.check_move.right(T.speed)) {
                this.x += T.speed;
                app.events.trigger("player_move");
            }
        }
    }

    this.rotate = {
        up: function() {
            T.direction = app.directions.up;
            app.events.trigger("player_move");
        },
        down: function() {
            T.direction = app.directions.down;
            app.events.trigger("player_move");
        },
        left: function() {
            T.direction = app.directions.left;
            app.events.trigger("player_move");
        },
        right: function() {
            T.direction = app.directions.right;
            app.events.trigger("player_move");
        }
    }

}