import kaboom from "./kaboom.mjs"

kaboom({
        global: true,
        width: 1024,
        height: 576,
        clearColor: [1,1,1,1],
        canvas: document.getElementById("game"),
        debug: true
    });

loadRoot('./assets/');
loadSprite("rocket0","player/player_0.png");
loadSprite("rocket1","player/player_1.png");
loadSprite("rocket2","player/player_2.png");
loadSprite("rocket3","player/player_3.png");
