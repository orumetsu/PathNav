export function camOperations() {

    // Default camScale
    let currentScale = 4;
    camScale(4);
    camPos(width()/2,height()/2)
    //camPos(player.pos);//
    
    // Change Camera Position
    action(()=>{
        if(mouseIsClicked()){
            camPos(mousePos());
        };
    });

    // Zoom In
    keyPress('i', () => {
        if(currentScale != 16){
            currentScale *= 2;
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
        //camPos(player.pos);//
    });
    
    camIgnore(['bg','ui']);

}