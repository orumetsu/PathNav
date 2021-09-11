import {debugComms} from '../objects/debugComms.js';
import {startLevel} from './level.js';
import {menuBG} from '../objects/movingBG.js'

export function startMenu() {
    
    let nickname = 'orumetsu'; // Database //

    scene('startMenu', () => {

        debugComms();
        menuBG('bgStart');

        add([
          text('Path-Nav', 0.1*height()),
          origin('center'),
          pos(0.5*width(), 0.2*height()),
        ]);
        add([
          text('Good luck and have fun\n\n' + nickname +'!', 0.05*height()),
          origin('center'),
          pos(0.5*width(), 0.4*height()),
        ]);

        const startButton = add([
          sprite('startButton'),
          origin('center'),
          scale(2),
          pos(0.5*width(), 0.7*height()),
          color(0.7, 0.7, 0.7),
        ]);
        const startText = add([
            text('START', 0.06*height()),
            origin('center'),
            pos(0.5*width(), 0.7*height()),
        ])

        startButton.action(() => {
            if (startButton.isHovered()) {
                startButton.color = rgb(1, 1, 1);
                if(startButton.isClicked()) {
                    startLevel(1, 0);
                }
            }
            else {
                startButton.color = rgb(0.7, 0.7, 0.7);
            }
        });
        
    });

    go('startMenu');

}