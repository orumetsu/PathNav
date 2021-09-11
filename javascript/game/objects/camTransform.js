export function camTransform(rocket) {
    
    const panArea = add([
        rect(width(),0.79*height()),
        pos(0,0),
        layer('ui'),
        color(0,0,0,0),
    ])

    // // Default Camera
    let currentScale = 4;
    camIgnore(['bg', 'ui']);
    camScale(currentScale);
    camPos(rocket.pos);

    // Zoom In
    keyPress('i', () => {
        if(currentScale != 16){
            currentScale *=2;
            camScale(currentScale);
        };
    });
    
    // Zoom Out
    keyPress('o', () => {
        if(currentScale != 1){
            currentScale /= 2;
            camScale(currentScale);
        };
    });

    // Back to Player
    keyPress('p', () => {
        currentScale = 4;
        camScale(currentScale);
        camPos(rocket.pos);
    });

    // Change Camera Position
    panArea.action(()=>{
        if(mouseIsClicked() && panArea.isHovered()){
            camPos(mousePos());
        };
    });

};