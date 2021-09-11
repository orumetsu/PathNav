import {camTransform} from "./camTransform.js";

export function makeRocket() {

    const rocket = add([
        sprite('rocket0'),
        pos(vec2(10,10)),
        rotate(deg2rad(0)),
        origin('center'),
        layer('player'),
        color(1,1,1),
    ]);
    let waitTime = 1e-2;
    let movement = false;
    camTransform(rocket, movement);
    
    addButton('Left',vec2(0.075*width(),0.9*height()),()=>{rocketRotateCCW(true)});
    addButton('Move',vec2(0.2*width(),0.9*height()),()=>{rocketMove()});
    addButton('Right',vec2(0.325*width(),0.9*height()),()=>{rocketRotateCCW(false)});
    addButton('+',vec2(0.45*width(),0.9*height()),()=>{});

    keyPress(['right','d'],()=>{
        rocketRotateCCW(false);
    });

    keyPress(['left','a'],()=>{
        rocketRotateCCW(true);
    });

    keyPress(['up','w'],()=>{
    rocketMove();
    });

    // Functions

    async function moveTo(x,y,framePerSec){
        if(x == 0){
            let frame = y/framePerSec;
            for(let i = 0; i < framePerSec;  i++){
                await wait(waitTime);
                let posY = rocket.pos.y + frame;
                rocket.pos.y = posY;
            }
        }
        else if(y == 0){
            let frame = x/framePerSec;
            for(let i = 0; i < framePerSec;  i++){
                await wait(waitTime);
                let posX = rocket.pos.x + frame;
                rocket.pos.x = posX;
            }
        }
    }
    
    async function maxThrottle(x,y){
        rocket.changeSprite('rocket1'); 
        await moveTo(x*0.1, y*0.1,8);
        rocket.changeSprite('rocket2');
        await moveTo(x*0.3, y*0.3,8);
        rocket.changeSprite('rocket3');
        await moveTo(x*0.6, y*0.6,8);
    }

    async function idleThrottle(){
        await wait(0.15);
        rocket.changeSprite('rocket2');
        await wait(0.15);
        rocket.changeSprite('rocket1');
        await wait(0.15);
        rocket.changeSprite('rocket0');
        console.log(time());
        movement = false;
        
    }
   
    async function rocketRotateCCW(addDeg){
        if(!movement){
            movement = true;
            action(() => {
                if(movement){
                    camPos(rocket.pos);
                }
            });
            if(rad2deg(rocket.angle) == 360 || rad2deg(rocket.angle) == -360){
                rocket.angle = 0;
            }
            for(let i = 0; i < 30; i++){
                await wait(waitTime);
                if(addDeg){
                    rocket.angle += deg2rad(3);
                }else{
                    rocket.angle -= deg2rad(3);
                };
            };
            movement = false;
            rocket.angle = deg2rad(Math.round(rad2deg(rocket.angle)));
        }
    }
    
    async function rocketMove(){
        if(!movement){
            movement = true;
            action(() => {
                if(movement){
                    camPos(rocket.pos);
                }
            });
            let x,y;
            const distance = 20;
            if(rad2deg(rocket.angle) == 360 || rad2deg(rocket.angle) == -360 || rad2deg(rocket.angle) == 0){
                y = -distance;
                x = 0;
            }else if(rad2deg(rocket.angle) == -90|| rad2deg(rocket.angle) == 270){
                y = 0;
                x = distance;
            }else if(rad2deg(rocket.angle) == -270|| rad2deg(rocket.angle) == 90){
                y = 0;
                x = -distance;
            }else if(rad2deg(rocket.angle) == -180|| rad2deg(rocket.angle) == 180){
                y = distance;
                x = 0;
            }
            await maxThrottle(x,y);
            await idleThrottle();
        };
    }

    function addButton(title,position,func){
        const button = add([pos(position),rect(0.15*height(),0.15*height()),origin('center'),color(0,0,0),layer('ui')]);
        const titleText = add([
            text(title, 0.03*height()),
            pos(position),
            origin('center'),
            color(1, 1, 1),
            layer('ui'),
        ]);

        button.action(() => {
            if (button.isHovered()) {
                button.color = rgb(1, 1, 1);
                titleText.color = rgb(0,0,0);
                if (mouseIsClicked()) {
                func();
                }
            } else {
                titleText.color = rgb(1,1,1);
                button.color = rgb(0, 0, 0);
            }
        })
    }

};