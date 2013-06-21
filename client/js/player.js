function Player() {
    var T = this;
    this.x = 450;
    this.y = 275;
    this.speed = 1;
    this.direction = 0;
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

        io.get('layers').ctx.player.fillStyle = '#000';

        var head_x = 0, head_y = 0,
            size_x = 5, size_y = 5;
        switch(T.direction) {
            case 0:
                head_x = -1; head_y = 0; break;
            case 1:
                head_x = 0; head_y = -1; break;
            case 2:
                head_x = 1; head_y = 0; break;
            case 3:
                head_x = 0; head_y = 1; break;
        };
        io.get('layers').ctx.player.fillRect(
            T.x - size_x/2 + (T.w/2) * head_x,
            T.y - size_y/2 + (T.h/2) * head_y,
            size_x,
            size_y
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

    this.direct = function(d) {
        switch (d){
            case 'up': 
                if (T.direction!=1) {
                    T.direction = 1;
                    T.render();
                };
                break;
            case 'down': 
                if (T.direction!=3) {
                    T.direction = 3;
                    T.render();
                };
                break;
            case 'left': 
                if (T.direction!=0) {
                    T.direction = 0;
                    T.render();
                };
                break;
            case 'right':
                if (T.direction!=2) {
                    T.direction = 2;
                    T.render();
                };
                break;
        }
    }
}