export default function RocketSprite() {

   let pathMove = []; 
   let moving;

   const rocket = add([pos(vec2(32)),sprite('rocket0'),rotate(deg2rad(0)),pos(vec2(32)),origin("center"),scale(2)]);
    addButton('left',vec2(45,531),()=>{rocketRotate(true)});
    addButton('right',vec2(105,531),()=>{rocketRotate(false)});
    addButton('up',vec2(75,471),()=>{rocketMove()});

   async function maxThorttle(x,y){
        await wait(0.05);
        rocket.changeSprite('rocket1');
        await wait(0.25);
        rocket.changeSprite('rocket2');
        await moveTo(x*0.25, y*0.25,5);
        await wait(0.01);
        rocket.changeSprite('rocket3');
        await moveTo(x*0.75, y*0.75,5);
        // console.log(rocket.pos);
    }

    async function moveTo(x,y,framePerSec){
        if(x == 0){
            let frame = y/framePerSec;
            for(let i = 0; i < framePerSec;  i++){
                await wait(0.01);
                let posY = rocket.pos.y + frame;
                rocket.pos.y = posY;
            }

        }else if(y == 0){
            let frame = x/framePerSec;
            for(let i = 0; i < framePerSec;  i++){
                await wait(0.01);
                let posX = rocket.pos.x + frame;
                rocket.pos.x = posX;
            }
            
        }
    }

    async function idleThorttle(){
        await wait(0.05);
        rocket.changeSprite('rocket2');
        await wait(0.2);
        rocket.changeSprite('rocket1');
        await wait(0.05);
        rocket.changeSprite('rocket0');
        moving = false;
    }

    function rocketRotate(addDeg){
       if(!moving){
        if(rad2deg(rocket.angle) == 360 || rad2deg(rocket.angle) == -360){
            rocket.angle = 0;
        }
        if(addDeg){
            rocket.angle += deg2rad(90);
        }else{
            rocket.angle -= deg2rad(90);
        }
       }
    }

   async function rocketMove(){
        moving = true;
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
        await maxThorttle(x,y);
        await idleThorttle();
       
    }

    keyPress("enter",async ()=>{
        let i = 0;
        for(i in pathMove){
        //    console.log(pathMove[i]);
           await wait(0.5);
           if(pathMove[i] == 'left'){
               rocketRotate(true);
           }else if(pathMove[i] == 'right'){
               rocketRotate(false);
           }else if(pathMove[i] == 'move'){
               rocketMove();
           }
        }
        pathMove = [];
    });

    function addButton(title,position,func){
        const button = add([pos(position),rect(50,50),origin("center"),color(0,0,0)]);
        const titleText = add([
            text(title, 9),
            pos(position),
            origin("center"),
            color(1, 1, 1),
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

    keyPress("right",()=>{
        rocketRotate(false);
    });

    keyPress("left",()=>{
        rocketRotate(true);
    });

    keyPress("up",()=>{
       rocketMove();
    });
};