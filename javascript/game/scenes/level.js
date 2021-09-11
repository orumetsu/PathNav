import {mapList, mapConfig} from '../objects/map.js';
import {makeRocket} from "../objects/rocket.js";
import {levelBG} from '../objects/movingBG.js'
import {debugComms} from '../objects/debugComms.js'

export function startLevel(curLevel, tMove) {

    let cycle = 0;

    scene('level', ({level,totalMove}) => {   

        add([
            pos(0, 0.8*height()),
            rect(width(), 0.2*height()),
            layer('ui'),
            color(0.4, 0.4, 0.4),
        ])
        add([
            pos(0, 0.79*height()),
            rect(width(), 0.01*height()),
            layer('ui'),
            color(0.75, 0.75, 0.75),
        ])
        debugComms();
        layers(['bg', 'arena', 'player', 'ui'], 'arena');
        levelBG();
        makeRocket();
        const map = addLevel(mapList[level-1],mapConfig);
        
        // Test Area //
        
        const star = add([
            sprite('star'),
            pos(40 + 10,40 + 10),
            origin('center'),
            layer('player'),
            rotate(0),
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
        
    });

    // Initiate Level
    go('level',{level: curLevel, totalMove: tMove});

}