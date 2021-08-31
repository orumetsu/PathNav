export default function Level() {
    
    loadSprite('air','level/air.png');
    loadSprite('floor','level/floor.png');
    loadSprite('green_target','level/green_target.png');
    loadSprite('red_target','level/red_target.png');

    loadSprite('bg','bg/start_640.png');

    scene('level', () => {
        // const map = addLevel([
        //     "======",
        //     "======",
        //     "======",
        //     "======",
        //     "======",
        // ], {
        //     width: 64,
        //     height: 64,
        //     pos: vec2(0, 0),
            // every "=" on the map above will be turned to a game object with following comps
            // "=": [
            //     sprite('bg'),
            //     solid(),
            //     "block"],
            // "*": [
            //     sprite("green_target"),
            //     solid(),
            //     "block"],
            // "&": [
            //     sprite("red_target"),
            //     solid(),
            //     "block"]
        // });
        camScale(1); // minimal zoom 2 max zoom 6 default 4 
        const bg = add([
            sprite('bg',{
            width: width(),
            height: height(),
            tiled: true,
            }),
            area(vec2(0,0),vec2(width(),height())),
        ]);
        bg.action(() => {
            camPos(mousePos());
        });
        console.log(mousePos())
    });

    go('level');


}