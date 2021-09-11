export function blackhole() {

    const blackhole = add([
        sprite('blackhole'),
        pos(80 + 10,0 + 10),
        origin('center'),
        layer('player'),
        rotate(0),
        color(1,1,1),
        'blackhole',
    ])
    blackhole.action(() => {
        blackhole.scale = Math.sin(2.5*time())/8+0.875;
        blackhole.angle += dt()/2;
    });
    
}

export function moon() {

    const moon = add([
        sprite('moon'),
        pos(80 + 10,40 + 10),
        origin('center'),
        layer('player'),
        rotate(0),
        color(1,1,1),
        rotate(0.15),
        'moon',
    ])
    moon.action(() => {
        moon.scale = Math.sin(2.5*time())/8+0.875;
    });
    
}

export function star() {
    let cycle = 0;

    const star = add([
        sprite('star'),
        pos(40 + 10,40 + 10),
        origin('center'),
        layer('player'),
        rotate(0),
        'star',
    ])

    star.action(() => {
        star.scale = Math.sin(2.5*time())/8+0.875;
    });

    loop(1, () => {
        switch (cycle) {
            case 0:
                star.color = rgb(1,0,0);
                break;
            case 1:
                star.color = rgb(1,0.64,0);
                break;
            case 2:
                star.color = rgb(1,1,0);
                break;
            case 3:
                star.color = rgb(0,1,0);
                break;         
            case 4:
                star.color = rgb(0,1,1);
                break; 
            case 5:
                star.color = rgb(0,0,1);
                break; 
            case 6:
                star.color = rgb(1,0,1);
                break; 
            default:
                star.color = rgb(1,0,0);
                break;
        }
        cycle++;
        cycle = cycle % 7;
    });
    
}