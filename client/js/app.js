$('#btn_login').click(function() {
    router.navigate('game', {trigger: true});
});

router.navigate('welcome', {trigger: true});
router.navigate('game', {trigger: true});

var player = new Player();
player.render();

$('#map_player').focus();

io.on('player_move', player.move);
io.on('player_direct', player.direct);