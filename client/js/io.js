var IO = Backbone.Model.extend({
    flags: {//добавить флаг на поднятие клафиши
        move: {
            up: 0,
            down: 0,
            left: 0,
            right: 0
        },

        move_stop: {
            up: 0,
            down: 0,
            left: 0,
            right: 0
        },

        direct: {
            up: 0,
            down: 0,
            left: 0,
            right: 0
        }
    },

    keydown: function(e) {
        //читаем клавиши и ставим флаги
        var key = keyCode;
        switch (key){
            case 87:
                flags.move.up = 1;
                break;
            case 65:
                flags.move.left = 1;
                break;
            case 83:
                flags.move.down = 1;
                break;
            case 68:
                flags.move.right = 1;
                break;
            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
            case 38:
                flags.direct.up = 1;
                break;
            case 37:
                flags.direct.left = 1;
                break;
            case 40:
                flags.direct.down = 1;
                break;
            case 39:
                flags.direct.right = 1;
                break;
        }
    },

    keyup: function(e) {
        //читаем клавиши и снимаем флаги
        var key = keyCode;
        switch (key){
            case 87:
                flags.move.up = 0;
                flags.move_stop.up = 1;
                break;
            case 65:
                flags.move.left = 0;
                flags.move_stop.left = 1;
                break;
            case 83:
                flags.move.down = 0;
                flags.move_stop.down = 1;
                break;
            case 68:
                flags.move.right = 0;
                flags.move_stop.right = 1;
                break;
            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
            case 38:
                flags.direct.up = 0;
                break;
            case 37:
                flags.direct.left = 0;
                break;
            case 40:
                flags.direct.down = 0;
                break;
            case 39:
                flags.direct.right = 0;
                break;
        }
    },

    tick: function() {
        //читаем флаги и говорим player'y куда идти, смотреть
        // implementation here
        this.trigger('player_move', 'up');
        //if sum(flag.move) > 2 error;
        //or
        //if (flags.move.up * flags.move.down == 1) error;
        if (flags.move.up||flags.move_stop.up) {
            player.move(up);
        };
        if (flags.move.down||flags.move_stop.down){
            player.move(down);
        };
        if (flags.move.left||flags.move_stop.left){
            player.move(left);
        };
        if (flags.move.right||flags.move_stop.right) {
            player.move(right);
        };
        //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        //
        //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        flags.move_stop.up = 0;
        flags.move_stop.down = 0;
        flags.move_stop.left = 0;
        flags.move_stop.right = 0;

    },

    timer: null,
    
});

var io = new IO({
    wrap: $('#map_container')[0],
    layers: {
        player: $('#map_player')[0],
        bg: $('#map_bg')[0],
    },

    timer_period: 10,
});

io.timer = setInterval(io.tick, io.get('timer_period'));

io.wrap.addEventListener("keydown", io.keydown);
io.wrap.addEventListener("keyup", io.keyup);