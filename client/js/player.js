function Player() {
    var T = this;
    this.x = 450;
    this.y = 275;
    this.speed = 1;
    this.w = 10;
    this.h = 10;

    this.render = function() {

        io.get('layers').ctx.bg.fillStyle = '#888';
        io.get('layers').ctx.bg.fillRect(0, 0, io.get('layers').bg.width, io.get('layers').bg.height);

        io.get('layers').ctx.player.clearRect(0, 0, io.get('layers').player.width, io.get('layers').player.height);

        io.get('layers').ctx.player.fillStyle = '#F00';
        io.get('layers').ctx.player.fillRect(
                T.x-T.w/2,
                T.y-T.h/2,
                T.w,
                T.h
            );
    }

    this.move = function(d) {
        switch (d){
            case 'up': 
                T.y -= T.speed;
                T.render();
                break;
            case 'down': 
                T.y += T.speed;
                T.render();
                break;
            case 'left': 
                T.x -= T.speed;
                T.render();
                break;
            case 'right': 
                T.x += T.speed;
                T.render();
                break;
        }
    }
}