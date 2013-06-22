var IO = Backbone.Model.extend({
    keyboard: {
        flag: {},

        keys : {
            'W': 87, 'A': 65, 'S': 83, 'D': 68,
            'arrow up': 38, 'arrow down': 40,
            'arrow left': 37, 'arrow right': 39,
        },
    },

    keydown: function(e) {
        var keyCode = e.keyCode;

        if (this.keyboard.flag[''+keyCode]) {
            this.keyboard.flag[''+keyCode].free = false;
        } else {
            this.keyboard.flag[''+keyCode] = {
                free: false,
                keyCode: keyCode,
            };
        }
    },

    keyup: function(e) {
        this.keyboard.flag[''+e.keyCode].free = true;
    },

    tick: function() {
        _.each(this.keyboard.flag, function(key) {
            switch(key.keyCode) {
                case this.keyboard.keys['W']:
                    this.trigger('player_move', 'up'); break;

                case this.keyboard.keys['A']:
                    this.trigger('player_move', 'left'); break;

                case this.keyboard.keys['S']:
                    this.trigger('player_move', 'down'); break;

                case this.keyboard.keys['D']:
                    this.trigger('player_move', 'right'); break;

                case this.keyboard.keys['arrow up']:
                    this.trigger('player_direct', 'up'); break;

                case this.keyboard.keys['arrow down']:
                    this.trigger('player_direct', 'left'); break;

                case this.keyboard.keys['arrow left']:
                    this.trigger('player_direct', 'down'); break;

                case this.keyboard.keys['arrow right']:
                    this.trigger('player_direct', 'right'); break;
            }

            if (key.free) {
                delete(this.keyboard.flag[''+key.keyCode]);
            }

        }, this);
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