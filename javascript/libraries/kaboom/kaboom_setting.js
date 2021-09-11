import kaboom from './kaboom.mjs'

kaboom({
        global: true,
        width: 0.95*window.innerHeight*16/9,
        height: 0.95*window.innerHeight,
        clearColor: [1,1,1,1],
        canvas: document.getElementById('game'),
        debug: true,
});