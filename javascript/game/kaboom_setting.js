import kaboom from "../libraries/kaboom/kaboom.mjs";

export const k = kaboom({
        global: true,
        width: 1024,
        height: 576,
        clearColor: [1,1,1,1],
        canvas: document.getElementById("game"),
        debug: true
    });

export default k;