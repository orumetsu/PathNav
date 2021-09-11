import {mapList, mapConfig} from '../objects/map.js';
import {rocket} from "../objects/rocket.js";
import {levelBG} from '../objects/movingBG.js'
import {debugComms} from '../objects/debugComms.js'
import { moon } from '../objects/moon.js';
import { star } from '../objects/star.js';
import { blackHole } from '../objects/blackHole.js';

export function startLevel(curLevel, tMove) {

    scene('level', ({level,totalMove}) => {   

       let initialPosition = vec2(10,10);
       let mapLevel = mapList[level-1];

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
        const map = addLevel(mapLevel,mapConfig);
        blackHole();
        star();
        moon();
        rocket(initialPosition,mapLevel);
    });
    // Initiate Level
    go('level',{level: curLevel, totalMove: tMove});

}