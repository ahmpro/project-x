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