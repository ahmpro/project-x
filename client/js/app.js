var Router = Backbone.Router.extend({

    routes: {
        'welcome': 'welcome',
        'game': 'game'
    },

    welcome: function() {
        $('body>div').hide();
        $('#welcome_screen').show();
    },

    game: function() {
        $('body>div').hide();
        $('#game_screen').show();
    }
});
var router = new Router();
Backbone.history.start();

$('#btn_login').click(function() {
    router.navigate('game', {trigger: true});
});

router.navigate('welcome', {trigger: true});
router.navigate('game', {trigger: true});

var player = new Player();
player.render();

$('#map_player').focus();

io.on('player_move', player.move);