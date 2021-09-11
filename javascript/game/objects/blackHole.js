export function blackHole() {

    const blackhole = add([
        sprite('blackhole'),
        pos(80 + 10,0 + 10),
        origin('center'),
        layer('player'),
        rotate(0),
        color(1,1,1)
    ])
    blackhole.action(() => {
        blackhole.scale = Math.sin(2.5*time())/8+0.875;
        blackhole.angle += dt()/2;
    });

    
}