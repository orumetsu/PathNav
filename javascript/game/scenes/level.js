import {levelBG} from '../objects/movingBG.js'
import {camOperations} from '../objects/camOperations.js'
import {mapList, mapConfig} from '../objects/map.js';
// import RocketSprite from '../objects/player.js'

export function startLevel() {
    
    scene('level', ({level,totalMove}) => {   
        
        layers(['bg', 'arena', 'player', 'ui'], 'player');
        levelBG();
        camOperations();
        const map = addLevel(mapList[level-1],mapConfig);
        console.log(map.width());
        console.log(map.height());
        console.log(map.getPos());

    });

    // Initiate First Level
    go('level',{level: 1, totalMove: 0});

}