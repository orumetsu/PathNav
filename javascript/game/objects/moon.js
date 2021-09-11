export function moon() {

    const moon = add([
        sprite('moon'),
        pos(80 + 10,40 + 10),
        origin('center'),
        layer('player'),
        rotate(0),
        color(1,1,1),
        rotate(0.15),
    ])
    moon.action(() => {
        moon.scale = Math.sin(2.5*time())/8+0.875;
    });
    
}