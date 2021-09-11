export function levelBG() {

    const randBG = choose(['bg1','bg2']);
    const tileSize = height()/2;

    for(let i = 0; i <= 4; i++){
        for(let j = 0; j <=1; j++){
            const startBG = add([
                sprite(randBG,{
                    animSpeed: 1,
                    frame: 0,
                    width: tileSize,
                    height: tileSize,
                }),
                pos(i*tileSize,j*tileSize),
                'bg',
                layer('bg'),
            ]);
            startBG.play('animate');
        };
    };

    render('bg', (bg) => {
        bg.move(-4, 0);
        if (bg.pos.x < -tileSize){
            for(let i = 0; i<=1; i++){
                const newBG = add([
                    sprite(randBG,{
                        animSpeed: 1,
                        frame: 0,
                        width: tileSize,
                        height: tileSize,
                    }),
                    pos(5*tileSize + bg.pos.x, i*tileSize),
                    'bg',
                    layer('bg'),
                ]);
                newBG.play('animate');
                destroy(bg);
            };
        };
    });

}

export function menuBG(BGtype) {

    // BGtype -> 'bgStart' atau 'bgEnd'
    for(let i = 0; i <= 2; i++){
        const startBG = add([
            sprite(BGtype, {
                width: height(),
                height: height(),
            }),
            pos(i*height(),0),
            'bg',
            layer('bg'),
        ]);
    };

    render('bg', (bg) => {
        bg.move(-4, 0);
        if (bg.pos.x < -height()){
            const newBG = add([
                            sprite(BGtype, {
                                width: height(),
                                height: height(),
                            }),
                            pos(3*height() + bg.pos.x, 0),
                            'bg',
                            layer('bg'),
                        ]);
            destroy(bg);
        };
    });

}