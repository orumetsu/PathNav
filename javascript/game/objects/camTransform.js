export function camTransform(rocket) {
    
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
    action(()=>{
        if(mouseIsClicked()){
            camPos(mousePos());
        };
    });

};