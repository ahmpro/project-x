function Map() {
    var T = this;

    this.w = 900;
    this.h = 550;

    var check_move = {
        up: function(value) {
            if (T.player.y - value > 0) {
                T.player.y -= value;                
                return true;
            }
            return false;
        },
        down: function(value) {
            if (T.player.y + value < T.h) {
                T.player.y += value;
                return true;
            }
            return false;
        },
        left: function(value) {
            if (T.player.x - value > 0) {
                T.player.x -= value;
                return true;
            }
            return false;
        },
        right: function(value) {
            if (T.player.x + value < T.w) {
                T.player.x += value;
                return true;
            }
            return false;
        }
    }

    this.set_player = function(p) {
        T.player = p;
        T.player.check_move = check_move;
    }

}