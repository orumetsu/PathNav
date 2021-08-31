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