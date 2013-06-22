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
    },

    keydown: function(e) {
        var key = e.keyCode;
        switch (key){
            case 87:
                this.flags.move.up = 1;
                break;
            case 65:
                this.flags.move.left = 1;
                break;
            case 83:
                this.flags.move.down = 1;
                break;
            case 68:
                this.flags.move.right = 1;
                break;
            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
            case 38:
                this.trigger('player_direct', 'up');
                break;
            case 37:
                this.trigger('player_direct', 'left');
                break;
            case 40:
                this.trigger('player_direct', 'down');
                break;
            case 39:
                this.trigger('player_direct', 'right');
                break;
        }
    },

    keyup: function(e) {
        var key = e.keyCode;
        switch (key){
            case 87:
                this.flags.move.up = 0;
                this.flags.move_stop.up = 1;
                break;
            case 65:
                this.flags.move.left = 0;
                this.flags.move_stop.left = 1;
                break;
            case 83:
                this.flags.move.down = 0;
                this.flags.move_stop.down = 1;
                break;
            case 68:
                this.flags.move.right = 0;
                this.flags.move_stop.right = 1;
                break;
        }
    },

    tick: function() {
        // implementation here
        if (this.flags.move.up||this.flags.move_stop.up) {
            this.trigger('player_move', 'up');
        };
        if (this.flags.move.down||this.flags.move_stop.down){
            this.trigger('player_move', 'down');
        };
        if (this.flags.move.left||this.flags.move_stop.left){
            this.trigger('player_move', 'left');
        };
        if (this.flags.move.right||this.flags.move_stop.right) {
            this.trigger('player_move', 'right');
        };
        //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        this.flags.move_stop.up = 0;
        this.flags.move_stop.down = 0;
        this.flags.move_stop.left = 0;
        this.flags.move_stop.right = 0;

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

_.bindAll(io);

io.timer = setInterval(io.tick, io.get('timer_period'));

io.get('wrap').addEventListener("keydown", io.keydown);
io.get('wrap').addEventListener("keyup", io.keyup);