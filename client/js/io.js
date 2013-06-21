var IO = Backbone.Model.extend({

    tick: function() {
        // implementation here
    },
    timer: null,
    
});

var io = new IO({
    wrap: $('#map_container')[0],
    layers: {
        player: $('#map_player')[0],
        bg: $('#map_bg')[0],
    },

    timer_period: 50,
});

io.timer = setInterval(io.tick, io.get('timer_period'));