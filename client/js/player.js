function Player(username) {
    var T = this;

    this.username = username;

    this.x = 300;
    this.y = 300;

    this.w = 10;
    this.h = 10;

    this.speed = 10;

    this.move = {
        up: function() {
            var value = T.speed;
            if (app.map.player.check_move.up(value)) {
                this.y -= value;
            }
        },
        down: function() {
            var value = T.speed;
            if (app.map.player.check_move.down(value)) {
                this.y += value;
            }
        },
        left: function() {
            var value = T.speed;
            if (app.map.player.check_move.left(value)) {
                this.x -= value;
            }
        },
        right: function() {
            var value = T.speed;
            if (app.map.player.check_move.right(value)) {
                this.x += value;
            }
        }
    }

}