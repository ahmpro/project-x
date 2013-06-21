var IO = Backbone.Model.extend({
    flags: {
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
        var key = e.keyCode;
        switch (key){
            case 87:
                io.flags.move.up = 1;
                break;
            case 65:
                io.flags.move.left = 1;
                break;
            case 83:
                io.flags.move.down = 1;
                break;
            case 68:
                io.flags.move.right = 1;
                break;
            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
            //мб?
            //player.change_direction(up/down/left/right);
            case 38:
                io.flags.direct.up = 1;
                break;
            case 37:
                io.flags.direct.left = 1;
                break;
            case 40:
                io.flags.direct.down = 1;
                break;
            case 39:
                io.flags.direct.right = 1;
                break;
        }
    },

    keyup: function(e) {
        var key = e.keyCode;
        switch (key){
            case 87:
                io.flags.move.up = 0;
                io.flags.move_stop.up = 1;
                break;
            case 65:
                io.flags.move.left = 0;
                io.flags.move_stop.left = 1;
                break;
            case 83:
                io.flags.move.down = 0;
                io.flags.move_stop.down = 1;
                break;
            case 68:
                io.flags.move.right = 0;
                io.flags.move_stop.right = 1;
                break;
            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
            case 38:
                io.flags.direct.up = 0;
                break;
            case 37:
                io.flags.direct.left = 0;
                break;
            case 40:
                io.flags.direct.down = 0;
                break;
            case 39:
                io.flags.direct.right = 0;
                break;
        }
    },

    tick: function() {
        // implementation here
        if (io.flags.move.up||io.flags.move_stop.up) {
            io.trigger('player_move', 'up');
        };
        if (io.flags.move.down||io.flags.move_stop.down){
            io.trigger('player_move', 'down');
        };
        if (io.flags.move.left||io.flags.move_stop.left){
            io.trigger('player_move', 'left');
        };
        if (io.flags.move.right||io.flags.move_stop.right) {
            io.trigger('player_move', 'right');
        };
        //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        io.flags.move_stop.up = 0;
        io.flags.move_stop.down = 0;
        io.flags.move_stop.left = 0;
        io.flags.move_stop.right = 0;

    },

    timer: null,
    
});

var io = new IO({
    wrap: $('#map_container')[0],
    layers: {
        player: $('#map_player')[0],
        bg: $('#map_bg')[0],
        ctx: {
            player: $('#map_player')[0].getContext('2d'),
            bg: $('#map_bg')[0].getContext('2d'),
        }
    },

    timer_period: 10,
});

io.timer = setInterval(io.tick, io.get('timer_period'));

io.get('wrap').addEventListener("keydown", io.keydown);
io.get('wrap').addEventListener("keyup", io.keyup);