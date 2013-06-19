function Application() {
    var T = this;

    this.login = function (username) {
        T.player = new Player(username);
        T.map.set_player(T.player);
        T.events.trigger("player_move");
    }

    this.init = function() {
        T.events.init();
    }

    this.directions = {
        left: 0,
        up: 1,
        right: 2,
        down: 3,
        W: 87,
        A: 65,
        S: 83,
        D: 68
    }

    this.canvas = {
        wrap: $("#map_container"),
        bg: $("#map_bg"),
        items: $("#map_items"),
        players: $("#map_players"),
        player: $("#map_player"),
        ctx: {
            bg: $("#map_bg")[0].getContext("2d"),
            items: $("#map_items")[0].getContext("2d"),
            players: $("#map_players")[0].getContext("2d"),
            player: $("#map_player")[0].getContext("2d")
        }
    }

    this.map = new Map();
    this.events = new EventManager();
}