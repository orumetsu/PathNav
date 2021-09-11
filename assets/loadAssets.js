loadRoot('assets/');

// Load Background
loadSprite('bgStart', 'bg/bgstart.png');
loadSprite('bgEnd', 'bg/bgend.png');
for(let i=1; i<=2; i++){
    loadSprite('bg'+String(i), 'bg/lv/bg'+String(i)+'.png',{
        sliceX: 4,
        sliceY: 1,
        anims: {
            animate: {
                from: 0,
                to: 3,
            },
        },
    });
};

// Load Blocks
// loadSprite('air', 'level/air.png');
loadSprite('floor', 'level/floor.png');
loadSprite('green_target', 'level/green_target.png');
loadSprite('red_target', 'level/red_target.png');

// Load Multipliers
loadSprite('blackhole', 'level/blackhole.png');
loadSprite('moon', 'level/moon.png');
loadSprite('star', 'level/star.png');

// Load Rocket
for(let i=0; i<=3; i++){
    loadSprite('rocket'+String(i), 'player/rocket'+String(i)+'.png');
};

// Load Buttons
loadSprite('startButton','buttons/start_button.png');